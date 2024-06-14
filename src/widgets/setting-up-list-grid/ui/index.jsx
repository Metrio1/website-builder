import './index.scss';
import VideoUploader from '../../../entities/video-uploader/ui/index.jsx';
import React, { useState } from 'react';
import ImageUploader from '../../../entities/image-uploader/ui/index.jsx';
import ImageUploaderList from '../../../entities/image-uploader-list/ui/index.jsx';
import SetText from '../../../entities/set-text/ui/index.jsx';
import SetButton from '../../../entities/set-button/ui/index.jsx';
import BackButton from '../../../shared/back-button/ui/index.jsx';
import { Button } from 'antd';
import DropDownListText from '../../../entities/drop-down-list-text/ui/index.jsx';

export default function SettingUpListGrid({ setSidebarContent }) {
  const [numberOfSlide, setNumberOfSlide] = useState(1);
  const [selectedImages, setSelectedImages] = useState({});

  const handleImageSelect = (slideNumber, imageUrl) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [slideNumber]: imageUrl,
    }));
  };

  const [imageUploaderLists, setImageUploaderList] = useState([
    {
      id: 1,
      component: (
        <ImageUploaderList
          key={1}
          numberOfSlide={1}
          onImageSelect={handleImageSelect}
          place={`image-element__1`}
          imageClass={`list-grid__image`}
        />
      ),
    },
  ]);

  const handleSlides = () => {
    const newNumberOfSlide = numberOfSlide + 1;

    const iframe = document.querySelector('iframe');
    if (iframe) {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDocument) {
        const swiperContainer = iframeDocument.querySelector('.list-grid');
        if (swiperContainer) {
          const lastSlide = swiperContainer.lastElementChild;

          lastSlide.insertAdjacentHTML(
            'afterend',
            `
              <div class="list-element list-element__${newNumberOfSlide}">
                <div class="image-element image-element__${newNumberOfSlide}"></div>
                <div class="header-element header-element__${newNumberOfSlide}"></div>
                <div class="text-element text-element__${newNumberOfSlide}"></div>
                <div class="button-element button-element__${newNumberOfSlide}"></div>
              </div>
            `,
          );

          const newImageUploader = {
            id: newNumberOfSlide,
            component: (
              <ImageUploaderList
                key={newNumberOfSlide}
                numberOfSlide={newNumberOfSlide}
                onImageSelect={handleImageSelect}
                place={`image-element__${newNumberOfSlide}`}
                imageClass={`list-grid__image`}
              />
            ),
          };
          setImageUploaderList((prevUploaders) => [...prevUploaders, newImageUploader]);
          setNumberOfSlide(newNumberOfSlide);

          iframe.srcdoc = iframeDocument.documentElement.innerHTML;
        }
      }
    }
  };

  return (
    <div className={'setting-up-list-grid'}>
      <BackButton setSidebarContent={setSidebarContent} way={'SettingUpMain'} />
      <h3>Настройка списка</h3>
      <div>
        {imageUploaderLists.map((uploader) => (
          <div className="setting-up-container" key={uploader.id}>
            <h3>Блок {uploader.id}</h3>
            {uploader.component}
            <DropDownListText
              name={'Заголовок'}
              maxLength={20}
              place={`header-element__${uploader.id}`}
              textType={'small-header'}
            />
            <DropDownListText
              name={'Описание'}
              maxLength={100}
              place={`text-element__${uploader.id}`}
              textType={'text'}
            />
            <SetButton place={`button-element__${uploader.id}`} />
          </div>
        ))}
        {imageUploaderLists.length < 12 && <Button onClick={handleSlides}>Добавить блок</Button>}
      </div>
    </div>
  );
}
