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

// Код для кнопки "Наверх"
const backToTopButton = document.getElementById('back-to-top');

// Показываем кнопку при прокрутке
function showButton() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// Прокрутка наверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Добавляем события для прокрутки и клика
window.addEventListener('scroll', showButton);
backToTopButton.addEventListener('click', scrollToTop);

// Дополнительный функционал для загрузки файла (если нужно)
import { downloadFile } from './js/download';
document.getElementById('downloadButton').addEventListener('click', downloadFile);
