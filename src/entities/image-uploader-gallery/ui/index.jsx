import React, { useState } from 'react';

export default function ImageUploaderGallery({ numberOfSlide, onImageSelect }) {
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileName = `gallery_${numberOfSlide}.jpg`;

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
          const imageBox = iframeDocument.querySelector('.image-grid');

          const existingImage = imageBox.querySelector(`.image-box__${numberOfSlide}`);
          if (existingImage) {
            existingImage.remove();
          }

          const img = document.createElement('img');
          img.src = imageUrl;
          img.classList.add(`image-box__${numberOfSlide}`);
          imageBox.appendChild(img);

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
