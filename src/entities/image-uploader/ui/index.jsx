import React, { useState } from 'react';

export default function ImageUplaoder({ numberOfSlide }) {
  const [selectedFile, setSelectedFile] = useState('');
  let numberOfImage = 1;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Генерация нового имени файла
      const fileName = `${numberOfSlide}.jpg`; // Замените на ваш способ генерации имени файла

        console.log(numberOfSlide);

      // Создание объекта FormData и добавление файла с новым именем
      const formData = new FormData();
      formData.append('image', selectedFile, fileName);

      // Отправка запроса на сервер
      fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then((data) => {
            console.log('File uploaded:', data);
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
