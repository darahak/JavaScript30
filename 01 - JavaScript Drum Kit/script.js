window.addEventListener('keydown', e => {
  const PLAYING = 'playing';
  const code = e.keyCode;

  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if (audio === null) return;

  audio.currentTime = 0;
  audio
    .play()
    .then(() => {
      const key = document.querySelector(`div[data-key="${code}"]`);
      key.classList.add(PLAYING);

      audio.addEventListener('ended', () => key.classList.remove(PLAYING));
    })
    .catch(error => console.error('Audio failed to play!', error));
});
