const eviButtons = document.querySelectorAll('.btn-evi');
const buttonsEvis = document.querySelector('.btn-evis');
const eviContent = document.querySelectorAll('.bullet');


const closeBlock = () => {
    eviButtons.forEach(btn => {
        btn.classList.remove('bullet_active');
    })

    eviContent.forEach(block => {
        block.style.display = 'none';
    })
}

const showBlock = (index = 0) => {
    eviContent[index].style.display = 'block'
    eviButtons[index].classList.add('bullet_active');
}
closeBlock();
showBlock(0);

buttonsEvis.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-evi')
    if(!btn) return;

    eviButtons.forEach((item, index) => {
        if(btn === item) {
            closeBlock();
            showBlock(index);
        }
    });

});

let plusIndex = 0;

function autoSlide () {
    plusIndex++;

    if(plusIndex >= eviContent.length) {
        plusIndex = 0;
    }

    closeBlock();
    showBlock(plusIndex);
}; 

let contentInterval = setInterval(autoSlide, 2000);

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.searchAll');
    if (!btn) return;

    const value = Number(btn.dataset.progress) || 10;

    if (typeof window.addProgress === 'function') {
        window.addProgress(value);
    }
});
