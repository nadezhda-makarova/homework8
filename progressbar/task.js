const send = document.getElementById('send');
const progress = document.getElementById('progress');

const form = document.getElementById('form');

send.addEventListener('click', (e) => {
  e.preventDefault();
  const data = new FormData(document.getElementById('form'))
  let xhr = new XMLHttpRequest();
  xhr.open('post', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
  xhr.responseType = 'json';
  xhr.upload.onprogress = (e) => {
    progress.value = e.loaded * 100 / e.total;
  };
  xhr.send(data);
});