import './index.scss';
import VideoUploader from '../../../entities/video-uploader/ui/index.jsx';
import React, { useState } from 'react';
import ImageUploader from '../../../entities/image-uploader/ui/index.jsx';
import ImageUploaderList from '../../../entities/image-uploader-list/ui/index.jsx';
import SetText from '../../../entities/set-text/ui/index.jsx';
import SetButton from '../../../entities/set-button/ui/index.jsx';
import BackButton from "../../../shared/back-button/ui/index.jsx";
import {Button} from "antd";

export default function SettingUpList({ setSidebarContent }) {
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
          place={`list-flex__element__image__1`}
          imageClass={`list__image`}
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
        const swiperContainer = iframeDocument.querySelector('.list-flex');
        if (swiperContainer) {
          const lastSlide = swiperContainer.lastElementChild;

          lastSlide.insertAdjacentHTML(
            'afterend',
            `
              <div class="list-flex__element list-flex__element__${newNumberOfSlide}">
                <div class="list-flex__element__image list-flex__element__image__${newNumberOfSlide}"></div>
                <div class="list-flex__element__text-wrapper">
            <div class="list-flex__element__text-wrapper__header-element list-flex__element__text-wrapper__header-element__${newNumberOfSlide}"></div>
            <div class="list-flex__element__text-wrapper__text-element list-flex__element__text-wrapper__text-element__${newNumberOfSlide}"></div>
                </div>
                <div class="list-flex__element__button-element list-flex__element__button-element__${newNumberOfSlide}"></div>
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
                place={`list-flex__element__image__${newNumberOfSlide}`}
                imageClass={'list__image'}
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
    <div className={'setting-up-list'}>
      <BackButton setSidebarContent={setSidebarContent} way={"SettingUpMain"} />
      <h3>Настройка списка</h3>
      <ul>
        {imageUploaderLists.map((uploader) => (
          <li style={{marginTop: 30}} key={uploader.id}>
            Блок {uploader.id}
            {uploader.component}
            <SetText
              maxLength={20}
              place={`list-flex__element__text-wrapper__header-element__${uploader.id}`}
              textType={'smallest-header'}
            />
            <SetText maxLength={600} place={`list-flex__element__text-wrapper__text-element__${uploader.id}`} textType={'text'} />
            <SetButton place={`list-flex__element__button-element__${uploader.id}`} />
          </li>
        ))}
      </ul>
      {imageUploaderLists.length < 12 && <Button onClick={handleSlides}>Добавить блок</Button>}
    </div>
  );
}
