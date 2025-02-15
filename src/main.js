import { downloadFile } from './js/download.js';
import { initBackToTop } from './js/scroll.js';

document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split('/').pop(); // Получаем имя текущего файла

  navItems.forEach(item => {
    const itemHref = item.getAttribute('href').split('/').pop(); // Получаем имя файла ссылки

    // Убираем класс 'active' у всех
    item.classList.remove('active');

    // Если текущий путь совпадает с href, добавляем класс 'active'
    if (itemHref === currentPage) {
      item.classList.add('active'); // Активируем элемент
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.work-nav-item');
  const currentPage = window.location.pathname.split('/').pop(); // Получаем имя текущего файла

  navItems.forEach(item => {
    const itemHref = item.getAttribute('href').split('/').pop(); // Получаем имя файла ссылки

    // Убираем класс 'active' у всех
    item.classList.remove('active');

    // Если текущий путь совпадает с href, добавляем класс 'active'
    if (itemHref === currentPage) {
      item.classList.add('active'); // Активируем элемент
    }
  });
});


//Scrolling
document.addEventListener('DOMContentLoaded', initBackToTop);

//Downloading
document.getElementById('downloadButton').addEventListener('click', downloadFile);