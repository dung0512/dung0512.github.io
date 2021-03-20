//khai bao bien
let audio, playbtn, title, imagesong, artist, mutebtn, seekslider, volumecontrol, seeking = false, seekto,
    currenttime, durtimetext, playlist_status, dir, playlist, ext, agent, playlist_artist, repeat, random,
    prevbtn, nextbtn, index, likebtn;
//khoi tao mot so bien
dir = "../music/";
playlist = ["Forever Young", "Love To Hate Me", "Lovesick Girls", "Pretty Savage"];
title = ["Forever Young", "Love To Hate Me", "Lovesick Girls", "Pretty Savage"];
artist = ["BlackPink", "BlackPink", "BlackPink", "BlackPink"];

imagesong = ["../image/1.jpg", "../image/2.jpg", "../image/3.jfif", "../image/5.jfif"];
//gan gia tri de chay moi browser
ext = ".mp3";
agent = navigator.userAgent.toLocaleUpperCase();
if (agent.indexOf('firefox') != -1 || agent.indexOf('opera') != -1) {
    ext = ".ogg";
}
//gan object
playbtn = document.getElementById("pausebtn");
mutebtn = document.getElementById("mutebtn");
random = document.getElementById("random");
seekslider = document.getElementById("seekslider");
playlist_status = document.getElementById("song");
playlist_artist = document.getElementById("artist");
currenttime = document.getElementById("currenttext");
durtimetext = document.getElementById("durtimetext");
prevbtn = document.getElementById("prevbtn");
nextbtn = document.getElementById("nextbtn");
likebtn = document.getElementById("like");
repeat = document.getElementById("repeat");
volumecontrol = document.getElementById("volumeslider");
//audio
index = 0
audio = new Audio();
audio.src = dir + playlist[index] + ext;
audio.loop = false;
playlist_status.innerHTML = title[index];
playlist_artist.innerHTML = artist[index];
window.onload = function() {
  var context = new AudioContext();
  audio.play();
  audio.muted=false;
}


//them su kien
playbtn.addEventListener("click", playPause);
prevbtn.addEventListener("click", prevSong);
nextbtn.addEventListener("click", nextSong);
mutebtn.addEventListener("click", mute);
seekslider.addEventListener("mousedown", function (event) {
    seeking = true; seek(event);
});
seekslider.addEventListener("mousemove", function (event) {
    seek(event);
});
seekslider.addEventListener("mouseup", function (event) {
    seeking = false, seek(event);
});
volumecontrol.addEventListener("mousemove", setvolume);
audio.addEventListener("timeupdate", function () { seekTimeupdate(); });
audio.addEventListener("ended", function () {
    switchTrack();
})
repeat.addEventListener("click", loop);
random.addEventListener("click", random1);
likebtn.addEventListener("click", likesong);
//cac ham
function fetchMusicInfo() {
    $("#pausebtn img").attr("src", "../image/pause-red.png");
    $("#bgImage").attr("src", imagesong[index]);
    $("#image").attr("src", imagesong[index]);

    //title and artist
    playlist_status.innerHTML = title[index];
    playlist_artist.innerHTML = artist[index];

    //audio run
    audio.src = dir + playlist[index] + ext;
    audio.play();
}
function playPause() {
    if (audio.paused) {
        audio.play();
        $("#pausebtn img").attr("src", "../image/pause-red.png");
    }
    else {
        audio.pause();
        $("#pausebtn img").attr("src", "../image/play-red.png");
    }
}
function nextSong() {
    index++;
    if (index > playlist.length - 1) {
        index = 0;
    }
    fetchMusicInfo();

}
function prevSong() {
    index--;
    if (index < 0) {
        index = playlist.length - 1;
    }
    fetchMusicInfo();
}
function mute() {
    if (audio.muted) {
        audio.muted = false;
        $("#mutebtn img").attr("src", "../image/speaker.png");
    }
    else {
        audio.muted = true;
        $("#mutebtn img").attr("src", "../image/mute.png");
    }
}
function loop() {
    if (audio.loop) {
        audio.loop = false;
        $("#repeat img").attr("src", "../image/rep.png");
    }
    else {
        audio.loop = true;
        $("#repeat img").attr("src", "../image/rep1.png");
    }
}
function seek(event) {
    if (audio.duration == 0) {
        null
    }
    else {
        if (seeking) {
            seekslider.value = event.clientX - seekslider.offsetLeft;
            seekto = audio.duration * (seekslider.value / 100);
            audio.currentTime = seekto;
        }
    }
}
function setvolume() {
    audio.volume = volumecontrol.value / 100;

}
function seekTimeupdate() {
    if (audio.duration) {
        let nt = audio.currentTime * (100 / audio.duration);
        seekslider.value = nt;
        var currmin = Math.floor(audio.currentTime / 60);
        var currsec = Math.floor(audio.currentTime - currmin * 60);
        var durmin = Math.floor(audio.duration / 60);
        var dursec = Math.floor(audio.duration - durmin * 60);
        if (currsec < 10) {
            currsec = "0" + currsec;
        }
        if (dursec < 10) {
            dursec = "0" + dursec;
        }
        if (currmin < 10) {
            currmin = "0" + currmin;
        }
        if (dursec < 10) {
            durmin = "0" + durmin;
        }
        currenttime.innerHTML = currmin + ":" + currsec;
        durtimetext.innerHTML = durmin + ":" + dursec;
    }
    else {
        currenttime.innerHTML = "00" + ":" + "00";
        durtimetext.innerHTML = "00" + ":" + "00";
    }
}
function switchTrack() {
    if (index == playlist.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    fetchMusicInfo();
}

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
function random1() {
    let randomIndex = getRandomNumber(0, playlist.length - 1);
    index = randomIndex;
    fetchMusicInfo();
}
function likesong() {
    $("#like i").toggleClass("likesong1");
}
