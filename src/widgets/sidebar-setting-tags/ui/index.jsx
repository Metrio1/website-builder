import './index.scss';
import React, { useState } from 'react';
import { Button, Flex } from 'antd';
import { useLazyGetTagQuery } from '../../../entities/layout-pages/api/api.js';
import SettingsButton from '../../../shared/settings-button/ui/index.jsx';
import { store } from '../../../app/appStore.js';
import {
  setSelectedFooterId,
  setSelectedHeaderId,
  setSelectedSidebarId,
} from '../../../entities/tag/model/tag.slice.js';
import { useSelector } from 'react-redux';

export default function SidebarSettingTags({ setSidebarContent }) {
  const [size, setSize] = useState('large');
  const selectedHeader = useSelector((state) => state.tagSlice.selectedHeader);
  const selectedSidebar = useSelector((state) => state.tagSlice.selectedSidebar);
  const selectedFooter = useSelector((state) => state.tagSlice.selectedFooter);

  const templateId = useSelector((state) => state.templateSlice.websiteTemplate);

  console.log(templateId);

  const headerPlace = '.sgcms-layout__header-container';
  const sidebarPlace = '.sgcms-layout__main__sidebar-container__list-container__wrapper';
  const footerPlace = '.sgcms-layout__footer-container';

  const [getTag, getTagState] = useLazyGetTagQuery();
  console.log(getTag);
  const handleClick = async (tag, place) => {
    getTag(tag);
    const { data: tagData } = await getTag(tag);
    console.log(tagData);
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector(place);

    if (tag === 'm1') {
      placementTag.insertAdjacentHTML('beforeend', tagData?.data);
    } else {
      placementTag.innerHTML = tagData?.data;
    }

    switch (place) {
      case headerPlace:
        return store.dispatch(setSelectedHeaderId(tag));
      case sidebarPlace:
        return store.dispatch(setSelectedSidebarId(tag));
      case footerPlace:
        return store.dispatch(setSelectedFooterId(tag));
    }
  };

  return (
    <div className="content-customization__main__sidebar-container__list-container__wrapper">
      <div className="content-customization__main__sidebar-container__list-container__wrapper__choose-block">
        <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
          Выбор шапки
        </h3>
        <div>
          <Button
            size={size}
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('h1', headerPlace)}
          >
            Шапка №1
          </Button>
          {selectedHeader === 'h1' && (
            <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpHeader'} />
          )}
        </div>

        <div>
          <Button
            size={size}
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('h2', headerPlace)}
          >
            Шапка №2
          </Button>
          {selectedHeader === 'h2' && (
            <SettingsButton
              className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
              setSidebarContent={setSidebarContent}
              tagType={'SettingUpHeader'}
            />
          )}
        </div>
      </div>
      {templateId !== '2' && (
        <div className="content-customization__main__sidebar-container__list-container__wrapper__choose-block">
          <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
            Выбор меню
          </h3>
          <div>
            <Button
              size={size}
              className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
              onClick={() => handleClick('s1', sidebarPlace)}
            >
              Меню №1
            </Button>
            {selectedSidebar === 's1' && (
              <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSidebar'} />
            )}
          </div>
          <div>
            <Button
              size={size}
              className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
              onClick={() => handleClick('s2', sidebarPlace)}
            >
              Меню №2
            </Button>
            {selectedSidebar === 's2' && (
              <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSidebar2'} />
            )}
          </div>
        </div>
      )}

      {/*<div>*/}
      {/*  <button*/}
      {/*    className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"*/}
      {/*    onClick={() => handleClick('s3', sidebarPlace)}*/}
      {/*  >*/}
      {/*    Сайдбар №3*/}
      {/*  </button>*/}
      {/*  {selectedSidebar === 's3' && (*/}
      {/*    <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSidebar'} />*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className="content-customization__main__sidebar-container__list-container__wrapper__choose-block">
        <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
          Выбор подвала
        </h3>
        <div>
          <Button
            size={size}
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('f1', footerPlace)}
          >
            Подвал №1
          </Button>
          {selectedFooter === 'f1' && (
            <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpFooter'} />
          )}
        </div>
        <div>
          <Button
            size={size}
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('f2', footerPlace)}
          >
            Подвал №2
          </Button>
          {selectedFooter === 'f2' && (
            <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpFooter2'} />
          )}
        </div>
      </div>
      <div className="content-customization__main__sidebar-container__list-container__wrapper__choose-block">
        <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
          Основной контент
        </h3>

        <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpMain'} />
      </div>
    </div>
  );
}
