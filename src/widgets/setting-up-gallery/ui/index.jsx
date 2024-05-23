import './index.scss';
import React, { useState } from 'react';
import ImageUploaderGallery from '../../../entities/image-uploader-gallery/ui/index.jsx';
import BackButton from "../../../shared/back-button/ui/index.jsx";

export default function SettingUpGallery({ setSidebarContent }) {
  const [selectedImages, setSelectedImages] = useState({});

  const handleImageSelect = (slideNumber, imageUrl) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [slideNumber]: imageUrl,
    }));
  };

  const [ImageUploaderGallerys, setImageUploaderGallerys] = useState([
    {
      id: 1,
      component: (
        <ImageUploaderGallery key={0} numberOfSlide={1} onImageSelect={handleImageSelect} />
      ),
    },
  ]);

  const handleImages = () => {
    if (ImageUploaderGallerys.length < 12) {
      const newKey = ImageUploaderGallerys.length + 1;
      const newImageUploaderGallery = {
        id: newKey,
        component: (
          <ImageUploaderGallery
            key={newKey}
            numberOfSlide={newKey}
            onImageSelect={handleImageSelect}
          />
        ),
      };
      setImageUploaderGallerys((prevUploaders) => [...prevUploaders, newImageUploaderGallery]);
    }
  };


  return (
    <div className="gallery">
      <BackButton setSidebarContent={setSidebarContent}/>
      <h3>Настройка галлереи</h3>
      <ul>
        {ImageUploaderGallerys.map((uploader) => (
          <li key={uploader.id}>
            Изображение {uploader.id}
            {uploader.component}
          </li>
        ))}
      </ul>
      {ImageUploaderGallerys.length < 12 && (
        <button onClick={handleImages}>Добавить изображение</button>
      )}
    </div>
  );
}
