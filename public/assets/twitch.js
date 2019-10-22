var socket = io.connect('localhost:4000');

let twitchPlayer = document.getElementById('yoyo'); // this is the twitch player
let playButton = document.getElementById('playButton'); // this is the play button
let pauseButton = document.getElementById('pauseButton'); // this is the pause button 

// Twitch settings
var options = {
    autoplay: true,
    controls: false, 
    width: 854,
    height: 480,
    channel: "72hrs",
};
var player = new Twitch.Player(twitchPlayer, options);
player.setVolume(1);

// Function to play stream
function playStream(player) {
    player.play(); 
}

function pauseStream(player) {
    player.pause();
}

playButton.addEventListener('click', () => {
    socket.emit('play', {
        play: "play"
    });
});

pauseButton.addEventListener('click', () => {
    socket.emit('pause', {
        pause: "pause"
    });
});

// Listening for events

socket.on('play', (data) => {
    console.log(data);
    playStream(player);
});

socket.on('pause', (data) => {
    console.log(data);
    pauseStream(player);
});



