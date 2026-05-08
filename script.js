const audio = document.getElementById("audio");
const recordButton = document.querySelector(".record-button");
const recordImage = document.querySelector(".record-image");
const miniButton = document.querySelector(".mini-play-button");
const headerPlayer = document.querySelector(".header-player");
const musicSection = document.querySelector(".music-section");
const musicTime = document.querySelector(".music-time");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    recordImage.classList.add("is-playing");
    miniButton.textContent = "❚❚";
  } else {
    audio.pause();
    recordImage.classList.remove("is-playing");
    miniButton.textContent = "▶";
  }
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

recordButton.addEventListener("click", toggleMusic);
miniButton.addEventListener("click", toggleMusic);

audio.addEventListener("timeupdate", () => {
  musicTime.textContent = formatTime(audio.currentTime);
});

window.addEventListener("scroll", () => {
  const musicBottom = musicSection.offsetTop + musicSection.offsetHeight;

  if (window.scrollY > musicBottom - 100) {
    headerPlayer.classList.add("is-visible");
  } else {
    headerPlayer.classList.remove("is-visible");
  }
});