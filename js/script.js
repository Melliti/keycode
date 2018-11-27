var colors = ["#B2B2C6", "#4E4E6C", "#6C4E4E", "#4E584E", "#B79EB1"];

function keypressed(e) {
    keycode = document.getElementById("keycode");
    audio = document.getElementById("audio");

    keycode.innerHTML = e.charCode + " - " + String.fromCharCode(e.charCode);
    keycode.style.color = colors[Math.floor(Math.random() * colors.length)];
    audio.play();
}