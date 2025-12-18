const container = document.querySelector('.messages');

let messages = [];
let index = 0;

fetch('../js/message.json')
  .then(res => res.json())
  .then(data => {
    messages = data;
    startFlow();
  })
  .catch(err => {
    console.error('Ошибка загрузки сообщений', err);
  });

function startFlow() {
  setInterval(createMessage, 1500);
}

function createMessage() {
    if (messages.length === 0) return;

    const data = messages[index];

    const message = document.createElement('div');
    message.className = 'message';

    const x = Math.random() * 60 + 20;
    message.style.left = `${x}%`;

    message.innerHTML = `
        <img class="avatar" src="${data.avatar}">
        <div class="text">${data.text}</div>
    `;

    container.appendChild(message);

    
    setTimeout(() => {
        message.remove();
    }, 8000);

    index++;

    
    if (index >= messages.length) {
        index = 0;
    }
}

