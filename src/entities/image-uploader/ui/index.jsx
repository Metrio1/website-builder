import React, { useState } from 'react';

export default function ImageUploader({ numberOfSlide, onImageSelect }) {
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileName = `${numberOfSlide}.jpg`;

      const formData = new FormData();
      formData.append('image', selectedFile, fileName);

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
          const imageUrl = `http://127.0.0.1:5000/static/${fileName}`;
          console.log('File uploaded:', data);
          onImageSelect(numberOfSlide, imageUrl);

          const iframe = document.querySelector('iframe');
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          const swiperContainer = iframeDocument.querySelector('.swiper-wrapper');

          const slide = swiperContainer.children[numberOfSlide - 1];
          const imageBox = slide.querySelector('.image-box');

          const img = document.createElement('img');
          img.src = imageUrl;
          const placementImg = document.createElement('div');
          placementImg.classList.add(`image-box__${numberOfSlide}_${numberOfSlide + 1}`);
          placementImg.appendChild(img);
          imageBox.appendChild(placementImg);

          iframe.srcdoc = iframeDocument.documentElement.innerHTML;
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Загрузить изображение</button>
    </div>
  );
}
