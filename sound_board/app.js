const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopOthers();
    document.getElementById(sound).play();
  });
  document.getElementById('buttons').appendChild(btn);
});

function stopOthers() {
  sounds.forEach((sound) => {
    const otherSound = document.getElementById(sound);
    otherSound.pause();
    otherSound.currentTime = 0;
  });
}
