document.addEventListener('DOMContentLoaded', function () {
  // Получаем текущий путь страницы без слэша в начале
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Получаем все элементы навигации
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    // Убираем класс 'active' у всех
    link.classList.remove('active');

    // Проверяем, если ссылка ведёт на текущий путь, добавляем 'active'
    if (link.getAttribute('href').includes(currentPath)) {
      link.classList.add('active');
    }
  });
});


import { downloadFile } from './js/download';
document
  .getElementById('downloadButton')
  .addEventListener('click', downloadFile);
