export function downloadFile() {
  const fileUrl = 'favicon.svg'; // Путь к файлу
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = 'favicon.svg'; // Имя файла
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

