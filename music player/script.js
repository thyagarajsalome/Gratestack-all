const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrIcon = document.getElementById("ctrIcon");

// Set progress bar max value when metadata is loaded
song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Toggle play/pause functionality
const togglePlayPause = () => {
  if (song.paused) {
    song.play();
    ctrIcon.classList.replace("fa-play", "fa-pause");
  } else {
    song.pause();
    ctrIcon.classList.replace("fa-pause", "fa-play");
  }
};

// Update progress bar every 500ms
setInterval(() => {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
}, 500);

// Seek to new position when progress bar changes
progress.oninput = () => {
  song.currentTime = progress.value;
  if (song.paused) {
    song.play();
    ctrIcon.classList.replace("fa-play", "fa-pause");
  }
};

// Attach play/pause function to button click (assuming there's a button)
ctrIcon.onclick = togglePlayPause;
