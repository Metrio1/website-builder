import './index.scss';
import React, { useState } from 'react';
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

  const selectedHeader = useSelector((state) => state.tagSlice.selectedHeader);
  const selectedSidebar = useSelector((state) => state.tagSlice.selectedSidebar);
  const selectedFooter = useSelector((state) => state.tagSlice.selectedFooter);

  const headerPlace = '.sgcms-layout__header-container';
  const sidebarPlace = '.sgcms-layout__main__sidebar-container';
  const footerPlace = '.sgcms-layout__footer-container';

  const [getTag, getTagState] = useLazyGetTagQuery();
  console.log(getTag);
  const handleClick = async (tag, place) => {


    getTag(tag);
    const { data: tagData } = await getTag(tag);
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector(place);

    placementTag.innerHTML = tagData?.data;

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
      <div className="content-customization__main__sidebar-container__list-container__wrapper__header-choose">
        <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
          Выбор хедера
        </h3>
        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__h1__btn-tag"
            onClick={() => handleClick('h1', headerPlace)}
          >
            Хедер №1
          </button>
          {selectedHeader === 'h1' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpHeader'} /> }
        </div>

        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('h2', headerPlace)}
          >
            Хедер №2
          </button>
          {selectedHeader === 'h2' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpHeader'} /> }
        </div>
      </div>
      <div className="content-customization__main__sidebar-container__list-container__wrapper__header-choose">
        <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
          Выбор сайдбара
        </h3>
        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('s1', sidebarPlace)}
          >
            Сайдбар №1
          </button>
          {selectedSidebar === 's1' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSidebar'} /> }
        </div>
        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('s2', sidebarPlace)}
          >
            Сайдбар №2
          </button>
          {selectedSidebar === 's2' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSidebar'} /> }
        </div>

        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('s3', sidebarPlace)}
          >
            Сайдбар №3
          </button>
          {selectedSidebar === 's3' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpSidebar'} /> }
        </div>
      </div>
      <div className="content-customization__main__sidebar-container__list-container__wrapper__header-choose">
        <h3 className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__title">
          Выбор футера
        </h3>
        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('f1', footerPlace)}
          >
            Футер №1
          </button>
          {selectedFooter === 'f1' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpFooter'} /> }
        </div>
        <div>
          <button
            className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-tag"
            onClick={() => handleClick('f2', footerPlace)}
          >
            Футер №2
          </button>
          {selectedFooter === 'f2' && <SettingsButton setSidebarContent={setSidebarContent} tagType={'SettingUpFooter'} /> }
        </div>
      </div>
    </div>
  );
}
