var api = require('twitch-api-v5');
 
api.clientID = '';

api.users.userByID({ userID: '57757860' }, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res);
        /* Example response
        {
            display_name: 'Twitch',
            _id: '12826',
            name: 'twitch',
            type: 'user',
            ...
        }
        */
    }
});
 
// api.feed.createPost({ auth: 'OAuth ...', channelID: '12826', post: 'New Post!' }, (err, res) => {
//     //...
// });