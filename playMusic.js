const playButton = document.querySelector('.play-music');
const music = document.querySelector('audio');

playButton.addEventListener('click', (event) =>{
  event.preventDefault();
  music.volume = 0.5;
  music.muted = !music.muted;
});