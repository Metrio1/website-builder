import './index.scss';
import SetText from '../../../entities/set-text/ui/index.jsx';
import React from 'react';

export default function SettingUpTextBlock({ setSidebarContent }) {
  const handleBack = () => {
    setSidebarContent('SettingUpMain');
  };

  return (
    <div>
      <button onClick={handleBack}>Вернуться</button>
      <h2>Настройка текстового блока</h2>
      <div>
        <h3>Заголовок</h3>
        <SetText maxLength={30} place={'text-block__top'} textType={'big-header'} />
      </div>
      <div>
        <h3>Текст</h3>
        <SetText maxLength={1000} place={'text-block__bottom'} textType={'text'} />
      </div>
    </div>
  );
}
