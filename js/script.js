function showCard() {
    $(".letter").css("display", "none");
    $(".section").css("display", "block");
}
var letter = document.getElementById("button");
letter.addEventListener('animationend', changeAnimation);

function changeAnimation() {
    $("#button").css("animation", "2s scaleup2 .2s infinite both");
}