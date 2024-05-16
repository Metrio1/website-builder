import React, { useState } from 'react';
import ImageUploader from '../../../entities/image-uploader/ui/index.jsx';
import SettingsButton from "../../../shared/settings-button/ui/index.jsx";
import DropDownListInteractiveBlock from "../../../entities/drop-down-list-interactive-block/ui/index.jsx";

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
      component: <ImageUploader key={0} numberOfSlide={1} onImageSelect={handleImageSelect}/>,
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
      <div class="ibanner__button"> 
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
          <ImageUploader key={newKey} numberOfSlide={newKey} onImageSelect={handleImageSelect}/>
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

  const handleBack = () => {
    setSidebarContent('SettingUpMain');
  };

  return (
      <div>
        <button onClick={handleBack}>Вернуться</button>
        <h3>Настройка слайдера</h3>
        <ul>
          {imageUploaders.map((uploader, index) => (
              <li key={uploader.id}>
                Слайд {uploader.id}
                {uploader.component}
                <div className="interactive-block">
                  <button onClick={() => handleInteractiveBlock(uploader.id)}>
                    Добавить интерактивный блок на слайд
                  </button>
                  {interactiveBlockId === uploader.id && <DropDownListInteractiveBlock index={uploader.id}/>}
                </div>
              </li>
          ))}
        </ul>
        {imageUploaders.length < 5 && <button onClick={handleSlides}>Добавить слайд</button>}
      </div>
  );
}
