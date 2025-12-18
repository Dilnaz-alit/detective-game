const suspectId = localStorage.getItem('suspect');
const suspectCard = document.querySelector('.suspect-container');
const staticText = document.querySelector('.static-text');

if (!suspectId || !suspectCard) {
    console.log('Подозреваемый не выбран');
} else {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../js/suspect.json');
    xhr.send();

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);

        const suspect = data.find(item => item.id === suspectId);

        if (staticText) staticText.style.display = 'none';

        if (!suspect) {
            suspectCard.innerHTML = '<p>Данные не найдены</p>';
            return;
        }

        suspectCard.innerHTML = `
            <div class="suspect-card">
                <div class="image-alibi"> 
                    <img src="${suspect.image}">
                </div>
                <div class="text-alibi"> 
                    <h2>${suspect.name}</h2>
                    <p>${suspect.secret1}</p>
                    <p>${suspect.secret2}</p>
                    <p><strong>Алиби:</strong> ${suspect.alibi}</p>
                </div>
            </div>
        `;
    };
}
