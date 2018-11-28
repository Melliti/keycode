var colors = ["#B2B2C6", "#4E4E6C", "#6C4E4E", "#4E584E", "#B79EB1"];
var enable = true;

function keypressed(e) {
    keycode = document.getElementById("keycode");
    audio = document.getElementById("audio");

    keycode.innerHTML = e.charCode + " - " + String.fromCharCode(e.charCode);
    keycode.style.color = colors[Math.floor(Math.random() * colors.length)];
    console.log(keycode);
    if (enable)
        audio.play();
}

function switchSpeaker() {
    image = document.getElementsByClassName("speaker");

    enable ? enable = false : enable = true;
    enable ? image[0].src = "../icon/speaker.png" : image[0].src = "../icon/disable_speaker.png"; 
}