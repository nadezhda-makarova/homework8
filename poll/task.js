const poll = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
xhr.send();
xhr.responseType = 'json';

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = xhr.response.data;

    renderQuest(response);
  } else {
    alert('При загрузке данных, произошла ошибка.')
  }
};

renderQuest = (res) => {
  const pool = res.title;
  const listAnswer = res.answers;
  poll.innerText = pool;

  listAnswer.forEach(element => {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.innerText = element;
    answer.appendChild(button);

    button.addEventListener('click', () => {
      alert(`«Спасибо, ваш голос засчитан!»`);
    })
  });
}