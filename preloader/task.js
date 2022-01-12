const loader = document.getElementById('loader');
const list = document.getElementById('items');
let items = [];
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com', true);
xhr.send();
xhr.responseType = 'json';

xhr.onload = () => {
  if (xhr.status === 200) {
    loader.classList.remove('loader_active');

    items = xhr.response.response.Valute;

    renderTable(items);
  } else {
    loader.classList.remove('loader_active');
    alert('При загрузке данных, произошла ошибка.')
  }
};


renderTable = (items) => {
  for (let key in items) {
    const div = document.createElement('div');
    div.classList.add('item');
    list.appendChild(div);
    
    div.innerHTML = `
      <div class="item__code">
        ${items[key].CharCode}
      </div>
      <div class="item__value">
        ${items[key].Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `;
  }
}