const toggleButton = document.querySelector(".toggle");
const video = document.querySelector(".player__video");
const skipButtons = document.querySelectorAll("[data-skip]");
const progressBar = document.querySelector(".progress__filled");
const progressContainer = document.querySelector(".progress");
const rangeButtons = document.querySelectorAll(".player__slider");
const fullScreenButton = document.querySelector(".fullscreen");

let mousedown = false;
let isPaused = true;
let isFullScreen = false;

function startAndStop() {
    if (isPaused) {
        video.play()
        isPaused = false;
        toggleButton.textContent = "►";
    } else {
        video.pause()
        isPaused = true;
        toggleButton.textContent = "❚ ❚";
    }
};

function skipTime() {
    const skipTime = this.dataset.skip;
    video.currentTime += parseFloat(skipTime);
};

function updateRange() {
    // if(this.name === "volume"){
    //     video.volume = this.value;
    // }
    // else if(this.name === "playbackRate"){
    //     video.playbackRate = this.value
    // }
    video[this.name] = this.value;
}

function handleProgress() {
    progressBar.style.flexBasis = `0%`
    const pourcentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${pourcentage}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressContainer.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

function fullScreen() {
    video.requestFullscreen();
}

skipButtons.forEach(skipButton => {
    skipButton.addEventListener("click", skipTime)
});

rangeButtons.forEach(range => {
    range.addEventListener("change", updateRange);
});

toggleButton.addEventListener("click", startAndStop);
video.addEventListener("click", startAndStop);
video.addEventListener("timeupdate", handleProgress);
progressContainer.addEventListener("click", scrub);
progressContainer.addEventListener('mousedown', () => mousedown = true);
progressContainer.addEventListener('mouseup', () => mousedown = false);
progressContainer.addEventListener('mousemove', (e) => mousedown && scrub(e));
fullScreenButton.addEventListener("click", fullScreen);




