import React, { useState } from 'react';
import ImageUploader from '../../../entities/image-uploader/ui/index.jsx';

export default function SettingUpSlider({ setSidebarContent }) {
  const [numberOfSlide, setNumberOfSlide] = useState(2);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageUploaders, setImageUploaders] = useState([<ImageUploader key={0} numberOfSlide={1}/>]);

  const handleCreateImageUploader = () => {
    const newKey = imageUploaders.length;
    const newImageUploaders = [...imageUploaders, <ImageUploader key={newKey} numberOfSlide={imageUploaders.length + 1}/>];
    setImageUploaders(newImageUploaders);
  };

  const handleSlides = async () => {
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const swiperContainer = iframeDocument.querySelector('.swiper-wrapper');
    const lastSlide = swiperContainer.lastElementChild;

    const images = uploadedImages
        .filter((image) => image.uploaderIndex === numberOfSlide - 1)
        .map((image) => `${image.uploaderIndex + 1}.jpg`);

    images.forEach((image, imgNumber) => {
      const img = document.createElement('img');
      img.src = `http://127.0.0.1:5000/static/${image}`;
      const imageBox = swiperContainer.lastElementChild.querySelector('.image-box');
      const placementImg = document.createElement('div');
      placementImg.classList.add(`image-box__${numberOfSlide}_${imgNumber + 1}`);
      placementImg.appendChild(img);
      imageBox.appendChild(placementImg);
    });

    lastSlide.insertAdjacentHTML(
        'afterend',
        `
        <div class="card swiper-slide">
            <div class="image-box"></div>
            <div class="inner">
                <div class="ibanner-content right">
                    <div class="ibanner__title">
                        <b>Text ${numberOfSlide}<br /></b>
                    </div>
                    <a href="" class="btn ibanner__href">Button text ${numberOfSlide}</a>
                </div>
            </div>
        </div>
    `,
    );

    iframe.srcdoc = iframeDocument.documentElement.innerHTML;
    setNumberOfSlide((prevSlide) => prevSlide + 1);
  };

  const handleBack = () => {
    setSidebarContent('SettingUpMain');
  };

  const handleImageUpload = (imageUrl, uploaderIndex) => {
    setUploadedImages((prevImages) => [
      ...prevImages,
      { url: imageUrl, uploaderIndex: uploaderIndex }
    ]);
  };

  return (
      <div>
        <button onClick={handleBack}>Вернуться</button>
        <h3>Настройка слайдера</h3>
        {imageUploaders.map((imageUploader, index) => (
            <li key={index}>
              {imageUploader}
              {imageUploaders.length < 5 && (
                  <button onClick={handleCreateImageUploader}>Добавить картинку</button>
              )}
            </li>
        ))}
        <button onClick={handleSlides}>Добавить слайд</button>
      </div>
  );
}