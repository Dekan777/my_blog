document.addEventListener('DOMContentLoaded', function () {
  // Получаем текущий путь страницы без слэша в начале
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Получаем все элементы навигации
  const navLinks = document.querySelectorAll('.nav-studio');

  navLinks.forEach(link => {
    // Убираем класс 'current' у всех
    link.classList.remove('current');

    // Проверяем, если ссылка ведёт на текущий путь, добавляем 'current'
    if (link.getAttribute('href').includes(currentPath)) {
      link.classList.add('current');
    }
  });
});

import { downloadFile } from './js/download';
document
  .getElementById('downloadButton')
  .addEventListener('click', downloadFile);
