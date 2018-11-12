function keypressed(e) {
    document.getElementById("keycode").innerHTML = e.charCode + " - " + String.fromCharCode(e.charCode);
}