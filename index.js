var request = require("request");
const gifMaker = require('./gifmaker');
require("dotenv").config();

function generateUserID(msg, username) {
    request.get({
            url: `https://api.twitch.tv/helix/users?login=${username}`,
            headers: {
                'Client-ID': process.env.TWITCH_CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json',
            }
        },
        (req, res) => {
            userId = JSON.parse(res.toJSON().body).data[0].id;
            request.get({
                    type: 'GET',

                    url: `https://api.twitch.tv/kraken/users/${userId}/follows/channels`,
                    headers: {
                        'Client-ID': process.env.TWITCH_CLIENT_ID,
                        Accept: 'application/vnd.twitchtv.v5+json'
                    }
                },
                (req, res) => {
                    let json = JSON.parse(res.body);
                    return new Promise(resolve => {
                        resolve(
                            json.follows.map(channel => {
                                return channel.channel._id;
                            })
                        );
                    }).then(result => {
                        const queryStr = result.join(',');
                        request.get({
                                type: 'GET',

                                url: `https://api.twitch.tv/kraken/streams/?channel=${queryStr}&stream_type=live`,
                                headers: {
                                    'Client-ID': `${process.env.TWITCH_CLIENT_ID}`,
                                    Accept: 'application/vnd.twitchtv.v5+json'
                                }
                            },
                            (req, res) => {
                                let json2 = JSON.parse(res.body);
                                json2.streams.map(element => {
                                    return msg.channel.send([ 
                                        element.channel.display_name,
                                        `<${element.channel.url}>`,
                                        gifMaker()
                                    ]);
                                });
                            }
                        );
                    });
                }
            );
        },
    )
}


module.exports = {
    generateUserID
}