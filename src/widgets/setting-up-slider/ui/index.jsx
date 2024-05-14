import './index.scss';
import React, {useState} from 'react';
import ImageUploader from '../../../entities/image-uploader/ui/index.jsx';
import LinkCreation from '../../../entities/link-creation/ui/index.jsx';
import { isButton } from 'jsdom/lib/jsdom/living/helpers/form-controls.js';

export default function SettingUpSlider({ setSidebarContent }) {
  const [imageUploaders, setImageUploaders] = useState([<ImageUploader key={0} />]);
  const [numberOfSlide, setNumberOfSlide] = useState(2);

  const handleCreateImageUploader = () => {
    const newKey = imageUploaders.length;
    const newImageUploaders = [...imageUploaders, <ImageUploader key={newKey} />];
    setImageUploaders(newImageUploaders);
  };
  const handleSlides = async () => {
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const swiperContainer = iframeDocument.querySelector('.swiper-wrapper');
    const lastSlide = swiperContainer.lastElementChild;

    lastSlide.insertAdjacentHTML(
      'afterend',
      `
        <div class="card swiper-slide">
            <div class="image-box"><div class='image-box__${numberOfSlide}'></div></div>
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
  };

  const handleBack = () => {
    setSidebarContent('SettingUpMain');
  };

  return (
    <div>
      <button onClick={handleBack}>Вернуться</button>
      <h3>Настройка слайдера</h3>
      {imageUploaders.map((imageUploader, index) => (
        <li key={index}>{imageUploader}</li>
      ))}
      {imageUploaders.length < 5 && (
        <li>
          <button onClick={handleCreateImageUploader}>Добавить картинку</button>
        </li>
      )}
      <button onClick={handleSlides}>Добавить слайд</button>
    </div>
  );
}
