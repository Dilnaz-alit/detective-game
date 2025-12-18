(function () {
    let progress = Number(localStorage.getItem('caseProgress')) || 0;

    function updateUI() {
        const bar = document.querySelector('.progress-bar');
        const text = document.querySelector('.progress-text');
        const finalBlock = document.querySelector('.final-container');

        if (bar && text) {
            bar.style.width = `${progress}%`;
            text.textContent = `Дело изучено на ${progress}%`;
        }

        if (finalBlock) {
            finalBlock.style.display = progress >= 100 ? 'block' : 'none';
        }
    }

    window.addProgress = function (value) {
        progress = Math.min(100, progress + value);
        localStorage.setItem('caseProgress', progress);
        updateUI();
    };

    document.addEventListener('DOMContentLoaded', updateUI);
})();


document.addEventListener('click', (e) => {
    const btn = e.target.closest('.searchAll');
    if (!btn) return;

    if (typeof window.addProgress !== 'function') return;

    const value = Number(btn.dataset.progress) || 10;
    window.addProgress(value);
});



const CORRECT_ID = 'father';

const suspects = document.querySelector('.suspects');
const wrongScreen = document.querySelector('.wrong-screen');
const modal = document.querySelector('.final-modal');
const video = document.getElementById('finalVideo');

suspects.addEventListener('click', (e) => {
  const suspect = e.target.closest('.suspect');
  if (!suspect) return;

  const id = suspect.dataset.id;

  if (id === CORRECT_ID) {
    showFinal();
  } else {
    showWrong();
  }
});

function showWrong() {
  wrongScreen.style.display = 'flex';

  setTimeout(() => {
    wrongScreen.style.display = 'none';
  }, 2000);
}

function showFinal() {
  modal.style.display = 'flex';

  video.pause();
  video.currentTime = 0;

  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Видео не запустилось:', error);
    });
  }
}

video.addEventListener('ended', () => {
  modal.style.display = 'none';
});

