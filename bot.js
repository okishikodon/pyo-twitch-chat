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

let defaultColors = [
    '#FF0000','#0000FF','#008000','#B22222','#FF7F50',
    '#9ACD32','#FF4500','#2E8B57','#DAA520','#D2691E',
    '#5F9EA0','#1E90FF','#FF69B4','#8A2BE2','#00FF7F'
  ],
  randomColorsChosen = {};
  
  function resolveColor(chan, name, color) {
  if(color !== null) {
    return color;
  }
  if(!(chan in randomColorsChosen)) {
    randomColorsChosen[chan] = {};
  }
  if(name in randomColorsChosen[chan]) {
    color = randomColorsChosen[chan][name];
  }
  else {
    color = defaultColors[Math.floor(Math.random()*defaultColors.length)];
    randomColorsChosen[chan][name] = color;
  }
  return color;
  }

client.on('message', (channel, tags, message) => {

    let color = resolveColor(channel, tags.username, tags.color);
    
    const isBroadcaster = tags.badges && tags.badges.broadcaster;
    const isMod = tags.badges && tags.badges.moderator;
    const isSub = tags.badges && tags.badges.subscriber;

    if (isBroadcaster == 1) {
        broadcasterBadge = '<div id="badge"><img src="img/badges/1.png"/></div> ';
      } else if (isBroadcaster == null) {
        broadcasterBadge = '';
      }
  
      if (isMod == 1) {
        moderatorBadge = '<div id="badge"><img src="img/badges/2.png"/></div> ';
      } else if (isMod == null) {
        moderatorBadge = '';
      }
  
      if (isSub >= 1) {
        subscriberBadge = '<div id="badge"><img src="img/badges/3.png"/></div> ';
      } else if (isSub == null) {
        subscriberBadge = ''; 
      }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    var div = document.createElement('div');
    div.className = 'message';

    div.innerHTML = "<span id='time'>" + time + ":</span>" + " " + broadcasterBadge + moderatorBadge + subscriberBadge + " " + "<span style='color:" + color + "; font-weight: 600;'> " + tags.username + "</span>:" + " " + "<span id='message'>" + message + "</span>";
    document.getElementById('chat-container').appendChild(div);

    //stay at the bottom
    window.scrollTo(0,document.body.scrollHeight);
    
    //remove messages after 50 seconds, mostly useful for big streams i guess. change later to only display a set amount of messages
    setTimeout(function() {
        div.remove();
      }, 50000);
});

function onConnectedHandler (addr, port) {
    console.log(`::: Successfully connected to ${addr}:${port} :::`);
  }