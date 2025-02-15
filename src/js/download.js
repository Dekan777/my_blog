// Код для скачивания файла
function downloadFile() {
  const fileUrl = 'Denys_Koshevyi_FrontEndDeveloper.pdf'; // Путь к файлу
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = 'Denys_Koshevyi_FrontEndDeveloper.pdf'; // Имя файла
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Запускаем привязку событий только в том случае, если на странице есть кнопка
if (document.getElementById('downloadButton')) {

  document.addEventListener('DOMContentLoaded', addEventListeners);
  // console.log('DOM download');
}

// Функция для добавления обработчика событий на кнопку
export function addEventListeners() {
  const downloadButton = document.getElementById('downloadButton');
  if (downloadButton) {
    downloadButton.addEventListener('click', downloadFile); // Привязываем событие только если элемент существует
  }
}
