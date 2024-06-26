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
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../../../widgets/setting-up-main/model/selected-option.slice.js';
import { Button, Select } from 'antd';

const { Option } = Select;

export default function DropDownListChoice({ index, setSidebarContent }) {
  const [size, setSize] = useState('large');
  const selectedOption = useSelector((state) => state.selectedOption[index]);
  const dispatch = useDispatch();

  const [getTag, getTagState] = useLazyGetTagQuery();
  const [getMain, getMainState] = useLazyGetMainQuery();
  const [getJavaScript, getJavaScriptState] = useLazyGetJavaScriptQuery();
  const [getCss, getCssState] = useLazyGetCssQuery();

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
    dispatch(setSelectedOption({ index, option }));
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
    } else if (option === 'Текстовый блок') {
      await createBlock();
      await handleGetMain(index, getMain, getJavaScript, getCss, 'text-block');
    } else if (option === 'Изображение + текстовый блок') {
      await createBlock();
      await handleGetMain(index, getMain, getJavaScript, getCss, 'image-text');
    } else if (option === 'Текстовый блок + изображение') {
      await createBlock();
      await handleGetMain(index, getMain, getJavaScript, getCss, 'text-image');
    } else if (option === 'Видео') {
      await createBlock();
    } else if (option === 'Список элементов в виде сетки') {
      await createBlock();
      await handleGetMain(index, getMain, getJavaScript, getCss, 'list-grid');
    } else if (option === 'Список элементов') {
      await createBlock();
      await handleGetMain(index, getMain, getJavaScript, getCss, 'list');
    }
  };

  return (
    <div className="dropdown-list-choice">
      <Select
        size={size}
        value={selectedOption || 'Выберите вариант'}
        onChange={selectOption}
        className="dropdown-list-choice__choice"
      >
        <Option value="Слайдер">Слайдер</Option>
        <Option value="Галлерея">Галлерея</Option>
        <Option value="Текстовый блок">Текстовый блок</Option>
        <Option value="Изображение + текстовый блок">Изображение + текстовый блок</Option>
        <Option value="Видео">Видео</Option>
        <Option value="Список элементов в виде сетки">Список элементов в виде сетки</Option>
        <Option value="Список элементов">Список элементов</Option>
      </Select>
      {selectedOption === 'Слайдер' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSlider'} />
      )}
      {selectedOption === 'Галлерея' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpGallery'} />
      )}
      {selectedOption === 'Текстовый блок' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpTextBlock'} />
      )}
      {selectedOption === 'Изображение + текстовый блок' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpImageText'} />
      )}
      {selectedOption === 'Текстовый блок + изображение' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpTextImage'} />
      )}
      {selectedOption === 'Видео' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpVideo'} />
      )}
      {selectedOption === 'Список элементов в виде сетки' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpListGrid'} />
      )}
      {selectedOption === 'Список элементов' && (
        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpList'} />
      )}
    </div>
  );
}
