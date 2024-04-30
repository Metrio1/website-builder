import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  useGetLayoutQuery, useGetTagQuery,
  useLazyGetLayoutQuery, useLazyGetTagQuery,
} from '../../../entities/layout-pages/api/api.js';
import { useSelector } from 'react-redux';
import {get} from "jsdom/lib/jsdom/named-properties-tracker.js";

export default function ContentCustomization() {
  const templateId = useSelector((state) => state.templateSlice.websiteTemplate);

  const [getTag, getTagState] = useLazyGetTagQuery();

  const { data } = useGetLayoutQuery(templateId, { skip: !templateId });

  const headerPlace = '.sgcms-layout__header-container';
  const sidebarPlace = '.sgcms-layout__main__sidebar-container';
  const footerPlace = '.sgcms-layout__footer-container';
  const handleClick = async (tag, place) => {
    getTag(tag);
    const { data: tagData } = await getTag(tag);
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placement = node.querySelector(place);

    placement.innerHTML = tagData?.data;
  };

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
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('h1', headerPlace)}
              >
                Хедер №1
              </button>
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-settings"
                  onClick={() => handleClick('h1', headerPlace)}
              >
                *
              </button>
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('h1', headerPlace)}
              >
                Хедер №1
              </button>
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('h2', headerPlace)}
              >
                Хедер №2
              </button>
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('s1', sidebarPlace)}
              >
                Сайдбар №1
              </button>
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('s2', sidebarPlace)}
              >
                Сайдбар №2
              </button>
              {/*<button*/}
              {/*    className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"*/}
              {/*    onClick={() => handleClick('s3', sidebarPlace)}*/}
              {/*>*/}
              {/*  Сайдбар №3*/}
              {/*</button>*/}
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('f1', footerPlace)}
              >
                Футер №1
              </button>
              <button
                  className="content-customization__main__sidebar-container__list-container__wrapper_btn-tag"
                  onClick={() => handleClick('f2', footerPlace)}
              >
                Футер №2
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
