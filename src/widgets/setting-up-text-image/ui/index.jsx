import './index.scss';
import SetText from '../../../entities/set-text/ui/index.jsx';
import React from 'react';
import ImageUploaderSolo from '../../../entities/image-uploader-solo/ui/index.jsx';
import BackButton from '../../../shared/back-button/ui/index.jsx';

export default function SettingUpTextImage({ setSidebarContent }) {
  return (
    <div>
      <BackButton setSidebarContent={setSidebarContent} way={'SettingUpMain'} />
      <h2>Настройка текстового блока с изображением справа</h2>
      <div>
        <h3>Основной текст</h3>
        <SetText maxLength={600} place={'image-text__text'} textType={'text'} />
      </div>
      <div>
        <h3>Изображение</h3>
        <ImageUploaderSolo />
      </div>
    </div>
  );
}
