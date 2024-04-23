import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  useGetLayoutQuery,
  useLazyGetLayoutQuery,
} from '../../../entities/layout-pages/api/api.js';
import { useSelector } from 'react-redux';

export default function ContentCustomization() {
  // const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeContent, setIframeContent] = useState('');

  const templateId = useSelector((state) => state.templateSlice.websiteTemplate)

    console.log(templateId);

  const {data} = useGetLayoutQuery(templateId, {skip: !templateId});


  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/get_html')
  //     .then((response) => response.json()) // Получаем объект JSON
  //     .then((data) => {
  //       // Извлекаем HTML-контент из объекта JSON
  //       const htmlContent = data.data; // Предполагается, что HTML-контент находится в свойстве "data"
  //       setIframeContent(htmlContent); // Устанавливаем HTML-контент для iframe
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка при выполнении запроса:', error);
  //     });
  // }, []);
  const handleClick = () => {


    // if (iframeLoaded) {
    // const iframe = document.querySelector('iframe');
    // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    // const node = iframeDocument.querySelector('.sgcms-layout');
    // const header = node.querySelector('.sgcms-layout__header-container');
    // console.log(header);
    // if (header) {
    //   header.innerHTML = '<div>logo</div>';
    // }
    // }
  };

  // const handleIframeLoad = () => {
  //   setIframeLoaded(true);
  // };

  return (
    <div>
      <h1>sdfsdf</h1>
      <button onClick={handleClick}>click me</button>
      <iframe
        title="HTML Content"
        srcDoc={data?.data}
        style={{ width: '80vw', height: '100vh' }}
        // onLoad={handleIframeLoad} // Вызываем handleIframeLoad после загрузки iframe
      ></iframe>
    </div>
  );
}
