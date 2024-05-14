import React, { useState } from 'react';
import './index.scss';
import SliderCreation from '../../slider-creation/ui/index.jsx';
import {
  useLazyGetCssQuery,
  useLazyGetJavaScriptQuery,
  useLazyGetMainQuery,
  useLazyGetTagQuery,
} from '../../layout-pages/api/api.js';
import SettingsButton from '../../../shared/settings-button/ui/index.jsx';
import { handleGetMain } from '../../../shared/handle-get-main/index.js';

export default function DropDownListChoice({ index, setSidebarContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const [getTag, getTagState] = useLazyGetTagQuery();
  const [getMain, getMainState] = useLazyGetMainQuery();
  const [getJavaScript, getJavaScriptState] = useLazyGetJavaScriptQuery();
  const [getCss, getCssState] = useLazyGetCssQuery();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const createBlock = async () => {
    console.log(index);
    const { data: blockData } = await getTag('m1');

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementBlock = node.querySelector(`.sgcms-layout__main__main-container-${index}`);
    placementBlock.innerHTML = blockData?.data;
  };


  const selectOption = async (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (option === 'Слайдер') {
      await createBlock();
      await handleGetMain(
          index,
          getMain,
          getJavaScript,
          getCss,
          'slider',
          'swiper-bundle.min.js',
          'script.js',
          'slider-style.css',
          'style.css',
          'swiper-bundle.min.css',
      );
    } else if (option === 'Галлерея') {
      await createBlock();
      await handleGetMain(index, getMain, getJavaScript, getCss, 'gallery');
    }
  };

  return (
    <div className="dropdown">
      <button className="dropdown-choice" onClick={toggleDropdown}>
        {selectedOption || 'Выберите вариант'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-element" onClick={() => selectOption('Слайдер')}>
            Слайдер
          </li>
          <li className="dropdown-element" onClick={() => selectOption('Галлерея')}>
            Галлерея
          </li>
          <li className="dropdown-element" onClick={() => selectOption('Вариант 3')}>
            Вариант 3
          </li>
        </ul>
      )}
      {selectedOption === 'Слайдер' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSlider'}/>}
      {selectedOption === 'Галлерея' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpGallery'}/>}
    </div>
  );
}
