import './index.scss';
import React, { useState } from 'react';
import ImageUploader from '../../../entities/image-uploader/ui/index.jsx';
import SettingsButton from '../../../shared/settings-button/ui/index.jsx';
import DropDownListInteractiveBlock from '../../../entities/drop-down-list-interactive-block/ui/index.jsx';
import BackButton from '../../../shared/back-button/ui/index.jsx';
import { Button } from 'antd';
import SettingUpTop from '../../../entities/setting-up-top/ui/index.jsx';

export default function SettingUpSlider({ setSidebarContent }) {
  const [numberOfSlide, setNumberOfSlide] = useState(2);
  const [selectedImages, setSelectedImages] = useState({});
  const [interactiveBlockId, setInteractiveBlockId] = useState(null);

  const handleImageSelect = (slideNumber, imageUrl) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [slideNumber]: imageUrl,
    }));
  };

  const [imageUploaders, setImageUploaders] = useState([
    {
      id: 1,
      component: (
        <ImageUploader
          key={0}
          numberOfSlide={1}
          onImageSelect={handleImageSelect}
          place={'swiper-wrapper'}
        />
      ),
    },
  ]);

  const handleInteractiveBlock = (index) => {
    setInteractiveBlockId(index);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const inner = iframeDocument.querySelector(`.inner__${index}`);

    inner.innerHTML = `
    <div class="ibanner-content right">
      <div class="ibanner__title">
        <b class="ibanner__title__text-${index}">Текст ${index}<br/></b>
      </div>
      <div class="ibanner__button-${index}"> 
      </div> 
    </div>
    `;
  };

  // <a href="" className="btn ibanner__href">Кнопка ${index}</a>
  const handleSlides = () => {
    const newKey = imageUploaders.length + 1;
    const newImageUploader = {
      id: newKey,
      component: (
        <ImageUploader
          key={newKey}
          numberOfSlide={newKey}
          onImageSelect={handleImageSelect}
          place={'swiper-wrapper'}
        />
      ),
    };
    setImageUploaders((prevUploaders) => [...prevUploaders, newImageUploader]);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const swiperContainer = iframeDocument.querySelector('.swiper-wrapper');
    const lastSlide = swiperContainer.lastElementChild;

    lastSlide.insertAdjacentHTML(
      'afterend',
      `
        <div class="card swiper-slide">
            <div class="image-box"></div>
            <div class="inner__${numberOfSlide}">
 
            </div>
        </div>
      `,
    );

    // <div className="ibanner-content right">
    //   <div className="ibanner__title">
    //     <b>Text ${numberOfSlide}<br/></b>
    //   </div>
    //   <a href="" className="btn ibanner__href">Button text ${numberOfSlide}</a>
    // </div>

    iframe.srcdoc = iframeDocument.documentElement.innerHTML;

    setNumberOfSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div className="setting-up-slider">
      <SettingUpTop headerText={'Настройка слайдера'} setSidebarContent={setSidebarContent} />
      <div className="setting-up-container">
        {imageUploaders.map((uploader, index) => (
          <div className="setting-up-container__element" key={uploader.id}>
            <h3>Слайд {uploader.id}</h3>
            {uploader.component}
            <div className="interactive-block">
              <Button onClick={() => handleInteractiveBlock(uploader.id)}>
                Добавить интерактивный блок на слайд
              </Button>
              {interactiveBlockId === uploader.id && (
                <DropDownListInteractiveBlock index={uploader.id} />
              )}
            </div>
          </div>
        ))}
        {imageUploaders.length < 5 && <Button onClick={handleSlides}>Добавить слайд</Button>}
      </div>
    </div>
  );
}
