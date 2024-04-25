import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  useGetLayoutQuery,
  useLazyGetLayoutQuery,
} from '../../../entities/layout-pages/api/api.js';
import { useSelector } from 'react-redux';

export default function ContentCustomization() {
  const templateId = useSelector((state) => state.templateSlice.websiteTemplate);

  console.log(templateId);

  const { data } = useGetLayoutQuery(templateId, { skip: !templateId });

  const handleClick = () => {};

  return (
    <div className="content-customization">
      <header className="content-customization__header-container">
        <h1 className="content-customization__header-title">Настройка контента</h1>
      </header>

      <main className="content-customization__main">
        <aside className="content-customization__main__sidebar-container">
          <div className="content-customization__main__sidebar-container__list-container">
            <div className="content-customization__main__sidebar-container__list-container__wrapper">
              <button
                className="content-customization__main__sidebar-container__list-container__wrapper-btn1"
                onClick={handleClick}
              >
                click me
              </button>
            </div>
          </div>
        </aside>
        <div className="sgcms-layout__main__main-container">
          <iframe
            className="content-customization__main__iframe"
            title="HTML Content"
            srcDoc={data?.data}
            style={{ width: '80vw', height: '100vh' }}
          ></iframe>
        </div>
      </main>
    </div>
  );
}
