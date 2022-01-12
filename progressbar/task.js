const send = document.getElementById('send');
const progress = document.getElementById('progress');

const form = document.getElementById('form');

send.addEventListener('click', (e) => {
  e.preventDefault();
  const data = document.getElementById('file').value;
  let xhr = new XMLHttpRequest();
  xhr.open('post', 'https://netology-slow-rest.herokuapp.com/upload.php', true, data);
  xhr.onprogress = (e) => {
    progress.value = e.loaded / 100000000;
  };
  xhr.send();
  xhr.responseType = 'json';
});