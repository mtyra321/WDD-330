var audio;

document.getElementsByTagName('body')[0].addEventListener("keydown", function(e) {
    console.log("key is " + e.key);
    if (document.getElementById(e.key) != null) {
        audio = document.getElementById(e.key);

    } else {
        audio = null;
    }
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }

});