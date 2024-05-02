import './index.scss';
import React from 'react';

export default function SettingsButton({ setSidebarContent, tagType }) {
  const handleClick = () => {
    setSidebarContent(tagType);
  };

  return (

    <button
      className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-settings"
      onClick={() => handleClick()}
    >
      Настроить
    </button>
  );
}
