/**
 * Created by tangsuan on 2016/5/24.
 */
~function () {
    var music = document.getElementById("music"), audioFir = document.getElementById("audioFir");
    window.setTimeout(function () {
        audioFir.play();
        audioFir.addEventListener("canplay", function () {
            music.style.display = "block";
            music.className = "music musicMove";
        }, false);
    }, 500);
    music.addEventListener("click", function () {
        if (audioFir.paused) {
            audioFir.play();
            music.className = "music musicMove";
            return;
        }
        audioFir.pause();
        music.className = "music";
    }, false);
}();