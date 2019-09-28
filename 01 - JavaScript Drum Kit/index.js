function app() {
  document.addEventListener('keydown', ({ keyCode }) => {
    const buttonNode = document.querySelector(`div[data-key='${keyCode}']`);
    const audioNode = document.querySelector(`audio[data-key='${keyCode}']`);

    if (!buttonNode || !audioNode) return;

    const isPlaying = audioNode.currentTime > 0 && audioNode.currentTime < audioNode.duration;

    if (isPlaying) return;

    buttonNode.classList.add('playing');
    audioNode.play();

    audioNode.onended = () => buttonNode.classList.remove('playing');
  });
}

app();
