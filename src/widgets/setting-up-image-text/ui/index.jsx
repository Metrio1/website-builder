import './index.scss';
import SetText from '../../../entities/set-text/ui/index.jsx';
import React from 'react';
import ImageUploaderSolo from "../../../entities/image-uploader-solo/ui/index.jsx";

export default function SettingUpImageText({ setSidebarContent }) {
  const handleBack = () => {
    setSidebarContent('SettingUpMain');
  };

  return (
    <div>
      <button onClick={handleBack}>Вернуться</button>
      <h2>Настройка текстового блока с изображением слева</h2>
      <div>
        <h3>Изображение</h3>
          <ImageUploaderSolo />
      </div>
      <div>
        <h3>Основной текст</h3>
        <SetText maxLength={1000} place={'image-text__text'} textType={'text'} />
      </div>
    </div>
  );
}
