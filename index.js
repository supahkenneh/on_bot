var api = require('twitch-api-v5');
var request = require("request");
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
                    console.log(json.follows);
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
                                    'Client-ID': 'd4t8xvlad2p46ju6nmr8bxb1qd62un',
                                    Accept: 'application/vnd.twitchtv.v5+json'
                                }
                            },
                            (req, res) => {
                                let json2 = JSON.parse(res.body);
                                json2.streams.map(element => {
                                    return msg.channel.send([ 
                                        element.channel.display_name,
                                        element.channel.url
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