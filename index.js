var api = require('twitch-api-v5');
 
api.clientID = 'SECRET';

// api.users.userByID({ userID: '57757860' }, (err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(res);
//         /* Example response
//         {
//             display_name: 'Twitch',
//             _id: '12826',
//             name: 'twitch',
//             type: 'user',
//             ...
//         }
//         */
//     }
// });

/////////////////////////////////////////////////////

api.users.follows({userID: '57757860'}, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        for (var i=0; i<res.follows.length; i++) {
            // console.log("loop");
            // if (res.follows[i].channel.name === "riotgames") {
            //     console.log(res.follows[i]);
            // }

            api.streams.live({channel: res.follows[i].channel._id}, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    if (res._total > 0) {
                        console.log(res);
                        console.log("*********");
                        console.log(res.streams[0].stream_type)
                        console.log("*********");
                    }
                }
            })

        }
        // console.log(res.follows[0]);
    }
})
 
/////////////////////////////////////////////////////
// '36029255'
// api.streams.live({channel: '26301881'}, (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// })

/////////////////////////////////////////////////////

// api.feed.createPost({ auth: 'OAuth ...', channelID: '12826', post: 'New Post!' }, (err, res) => {
//     //...
// });