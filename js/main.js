const firstCard = document.querySelector("#first");
const secondCard = document.querySelector("#second");
const threeCard = document.querySelector("#three");
const fourCard = document.querySelector("#four");

// --------------------------------------


let name = document.querySelector("#name");
let surame = document.querySelector('#surname');
let age = document.querySelector('#age')

// -----------------------------------------

const openConvert = document.querySelector('.openRead');
const openBtn = document.querySelector('#open');
const readConvert = document.querySelector('.convert');
const readBtn = document.querySelector('.reading');
const goBtn = document.querySelector('#go');

// -----------------------------------------

goBtn.addEventListener('click', ()=> {
    if (name.value === '' || surame.value === '') {
        alert('Введите имя и фамилию')
        openConvert.style.display = 'none'
    } else if (age.value < '25'){
        alert(`Недопустимый возраст`)
        openConvert.style.display = 'none'
    } else {
        setTimeout(()=> {
            openConvert.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }, 1000)
    } 
});

function typeText(element, speed = 50) {
    const fullText = element.textContent.trim();
    element.textContent = "";
    let index = 0;

    function type() {
        if (index < fullText.length) {
            element.textContent += fullText[index];
            index++;
            setTimeout(type, speed); 
        }
    }

    type();
}

openBtn.addEventListener('click', () => {
    openConvert.style.display = 'none';

    setTimeout(()=> {
        readConvert.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }, 1000)

    const writing = document.getElementById('writing');
    typeText(writing, 40);
});

const finishBtn = () => {
    openConvert.style.display = 'none';
    readConvert.style.display = 'none';
    document.body.style.overflow = '';
}

    readBtn.onclick = finishBtn;

// -----------------------------------------------------


