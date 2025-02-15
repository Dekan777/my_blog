import { addEventListeners } from './js/download.js';
import { initBackToTop } from './js/scroll.js';

//Scrolling
document.addEventListener('DOMContentLoaded', initBackToTop);

//Downloading
addEventListeners();

document.addEventListener('DOMContentLoaded', function () {
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



document.addEventListener('DOMContentLoaded', function () {
  // Получаем все элементы навигации
  const navItems = document.querySelectorAll('.work-nav-item');
  
  // Получаем текущий путь
  const currentPage = window.location.pathname.split('/').pop();

  // Функция для обновления активного элемента
  function updateActiveLink() {
    navItems.forEach(item => {
      // Убираем активный класс у всех элементов
      item.classList.remove('active');
    });
  
    // Ищем ссылку с нужным href и добавляем активный класс
    const activeLink = document.querySelector(`.work-nav-item[href="./work.html"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Если текущая страница - это workdesigning.html, активируем нужную ссылку
  if (currentPage === 'workdesigning.html') {
    updateActiveLink();
  }

  // Добавляем обработчик на клик для работы с ссылкой "Designing"
  const designingLink = document.querySelector('.work-nav-item[href="./workdesigning.html"]');
  if (designingLink) {
    designingLink.addEventListener('click', function (e) {
      // При клике отменяем стандартный переход
      e.preventDefault();

      // Обновляем активную ссылку
      updateActiveLink();

      // Перенаправляем на workdesigning.html
      window.location.href = './workdesigning.html';
    });
  }
});

