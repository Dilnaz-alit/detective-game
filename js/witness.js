const cardsContainer = document.querySelector('.witness');
const topButtons = document.querySelectorAll('.icon .wit');
const staticText = document.querySelector('.static-text');


const xhr = new XMLHttpRequest();
xhr.open('GET', '../js/character.json');
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();

xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);

    cardsContainer.innerHTML = '';

    data.forEach(char => {
        cardsContainer.innerHTML += `
            <div class="witness-item" data-id="${char.id}">
                <div class="witness-cart">
                    <div class="wit-image">
                        <img src="${char.image}" alt="${char.name}">
                    </div>

                    <div class="wit-info">
                        <p><strong>Имя:</strong> ${char.name}</p>
                        <p><strong>Возраст:</strong> ${char.age}</p>
                        <p><strong>Отношение:</strong> ${char.status}</p>
                        <p><strong>Работа:</strong> ${char.work}</p>
                    </div>
                </div>

                <button class="wit-btn">Подозревать</button>
            </div>
        `;
    });
};


topButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const card = cardsContainer.querySelector(
            `.witness-item[data-id="${id}"]`
        );

        if (card) {
            cardsContainer.prepend(card);
        }

    });
});


cardsContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('wit-btn')) return;
    
    const card = e.target.closest('.witness-item');
    const suspectId = card.dataset.id;

    localStorage.setItem('suspect', suspectId);


    window.location.href = 'suspect.html';
});
