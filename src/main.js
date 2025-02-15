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


// main.js

// Находим кнопку
const backToTopButton = document.getElementById('back-to-top');

// Функция для показа кнопки
function showButton() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block'; // Показываем кнопку, если прокручено больше 300px
  } else {
    backToTopButton.style.display = 'none'; // Скрываем кнопку, если меньше 300px
  }
}

// Функция для прокрутки наверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавная прокрутка к верху
}

// Добавляем слушатель событий для прокрутки
window.addEventListener('scroll', showButton);

// Добавляем событие клика на кнопку
backToTopButton.addEventListener('click', scrollToTop);


import { downloadFile } from './js/download';
document
  .getElementById('downloadButton')
  .addEventListener('click', downloadFile);
