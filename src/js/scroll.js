// Возвращаем найденный элемент
function findButton() {
  return document.getElementById('back-to-top');
}

// Показываем кнопку при прокрутке
function showButton() {
  const backToTopButton = findButton();
  if (backToTopButton) {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }
}

// Прокрутка наверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Добавляем слушатели событий
export function initBackToTop() {
  const backToTopButton = findButton();
  if (backToTopButton) {
    window.addEventListener('scroll', showButton);
    backToTopButton.addEventListener('click', scrollToTop);
  } else {
    console.error('Кнопка "Наверх" не найдена!');
  }
}
