const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: false },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        //bot username
        username: 'BOTUSERNAME',
        //bot oauth
        password: 'BOTOAUTHTOKEN'
      },
      //channel to read
      channels: ['sodapoppin']
});

client.on('connected', onConnectedHandler);
client.connect();

client.on('message', (channel, tags, message) => {
    const isBroadcaster = tags.badges && tags.badges.broadcaster;
    const isMod = tags.badges && tags.badges.moderator;
    const isSub = tags.badges && tags.badges.subscriber;

    if (isBroadcaster == 1) {
        broadcasterBadge = '[b] ';
    } else if (isBroadcaster == null) {
        broadcasterBadge = '';
    }

    if (isMod == 1) {
        moderatorBadge = '[m] ';
    } else if (isMod == null) {
        moderatorBadge = '';
    }

    if (isSub >= 1) {
        subscriberBadge = '[s] ';
    } else if (isSub == null) {
        subscriberBadge = '';
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":";

    console.log(time + " " + broadcasterBadge + moderatorBadge + subscriberBadge + tags.username + ":" + " " + message);
});

function onConnectedHandler (addr, port) {
    console.log(`::: Successfully connected to ${addr}:${port} :::`);
  }