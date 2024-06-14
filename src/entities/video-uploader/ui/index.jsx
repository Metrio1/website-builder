import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';

function VideoUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Пожалуйста, выберите файл для загрузки.');
      return;
    }

    const fileName = 'video.MP4';

    const formData = new FormData();
    formData.append('video', selectedFile, fileName);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload/video', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const videoUrl = `http://127.0.0.1:5000/static/${fileName}`;
        setVideoUrl(videoUrl);
      } else {
        alert('Ошибка загрузки видео.');
      }
    } catch (error) {
      console.error('Ошибка загрузки видео:', error);
      alert('Ошибка загрузки видео.');
    }
  };

  useEffect(() => {
    if (videoUrl) {
      const iframe = document.querySelector('iframe');
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const mainContainer = iframeDocument.querySelector('.main__container');
      const videoElement = document.createElement('video');
      videoElement.style.maxHeight = '400px';
      videoElement.controls = true;

      const sourceElement = document.createElement('source');
      sourceElement.src = videoUrl;
      sourceElement.type = 'video/mp4';

      videoElement.appendChild(sourceElement);

      mainContainer.innerHTML = ''; // Очистить контейнер перед добавлением нового видео
      mainContainer.appendChild(videoElement);
    }
  }, [videoUrl]);

  return (
    <div className="setting-up-container">
      <h3>Загрузка видео</h3>
      <div>
        <Input type="file" accept="video/*" onChange={handleFileChange} />
        <Button onClick={handleUpload}>Загрузить видео</Button>
      </div>
      <div className="main__container"></div>
    </div>
  );
}

export default VideoUploader;
