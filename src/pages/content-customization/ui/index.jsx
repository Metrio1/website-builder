import React, { useState, useEffect } from 'react';
import './index.scss';
import { Button, Flex } from 'antd';
import {
  useGetLayoutQuery,
  useGetTagQuery,
  useLazyGetLayoutQuery,
  useLazyGetTagQuery,
} from '../../../entities/layout-pages/api/api.js';
import { useSelector } from 'react-redux';
import SidebarSettingTags from '../../../widgets/sidebar-setting-tags/ui/index.jsx';
import SettingUpSidebar from '../../../widgets/setting-up-sidebar/ui/index.jsx';
import SettingUpHeader from '../../../widgets/setting-up-header/ui/index.jsx';
import SettingUpFooter from '../../../widgets/setting-up-footer/ui/index.jsx';
import SettingUpMain from '../../../widgets/setting-up-main/ui/index.jsx';
import SettingUpSlider from '../../../widgets/setting-up-slider/ui/index.jsx';
import SettingUpGallery from '../../../widgets/setting-up-gallery/ui/index.jsx';
import SettingUpTextBlock from '../../../widgets/setting-up-text-block/ui/index.jsx';
import SettingUpImageText from '../../../widgets/setting-up-image-text/ui/index.jsx';
import SettingUpTextImage from '../../../widgets/setting-up-text-image/ui/index.jsx';
import SettingUpVideo from '../../../widgets/setting-up-video/ui/index.jsx';
import SettingUpListGrid from '../../../widgets/setting-up-list-grid/ui/index.jsx';
import SettingUpList from '../../../widgets/setting-up-list/ui/index.jsx';
import SettingUpSidebar2 from "../../../widgets/setting-up-sidebar-2/ui/index.jsx";
import SettingUpFooter2 from "../../../widgets/setting-up-footer-2/ui/index.jsx";

const colorSchemes = {
  colorset1: {
    '--header-color': '#05296E',
    '--sidebar-color': '#4575D4',
    '--footer-color': '#29467F',
    '--main-color': '#fff',
    '--emphasis-color': '#05296E',
  },
  colorset2: {
    '--header-color': '#3D0E3B',
    '--sidebar-color': '#5D295B',
    '--footer-color': '#462945',
    '--main-color': '#fff',
    '--emphasis-color': '#AC63A8',
  },
  colorset3: {
    '--header-color': '#015B20',
    '--sidebar-color': '#048A32',
    '--footer-color': '#1C6836',
    '--main-color': '#fff',
    '--emphasis-color': '#34C364',
  },
};


export default function ContentCustomization() {
  const templateId = useSelector((state) => state.templateSlice.websiteTemplate);
  const colorsetId = useSelector((state) => state.templateSlice.websiteColorset);

  const [sidebarContent, setSidebarContent] = useState('SettingUpTags');


  const { data } = useGetLayoutQuery(templateId, { skip: !templateId });

  const handleClick = () => {
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const iframeContent = iframeDocument.documentElement.outerHTML;

    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(iframeContent);
    downloadLink.download = 'iframe-content.html';

    downloadLink.click();
  };

  const applyColorScheme = (iframeDocument, scheme) => {
    const style = iframeDocument.createElement('style');
    style.innerHTML = `
      :root {
        ${Object.entries(scheme)
          .map(([key, value]) => `${key}: ${value};`)
          .join(' ')}
      }
    `;
    iframeDocument.head.appendChild(style);
  };

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    const handleLoad = () => {
      const scheme = colorSchemes[colorsetId];
      if (scheme) {
        applyColorScheme(iframe.contentDocument, scheme);
      }
    };

    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      if (iframe.contentDocument.readyState === 'complete') {
        handleLoad();
      }
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, [colorsetId, data]);

  const sidebarContentToRender = () => {
    switch (sidebarContent) {
      case 'SettingUpHeader':
        return <SettingUpHeader setSidebarContent={setSidebarContent} />;
      case 'SettingUpSidebar':
        return <SettingUpSidebar setSidebarContent={setSidebarContent} />;
      case 'SettingUpSidebar2':
        return <SettingUpSidebar2 setSidebarContent={setSidebarContent} />;
      case 'SettingUpFooter':
        return <SettingUpFooter setSidebarContent={setSidebarContent} />;
      case 'SettingUpFooter2':
        return <SettingUpFooter2 setSidebarContent={setSidebarContent} />;
      case 'SettingUpMain':
        return <SettingUpMain setSidebarContent={setSidebarContent} />;
      case 'SettingUpSlider':
        return <SettingUpSlider setSidebarContent={setSidebarContent} />;
      case 'SettingUpGallery':
        return <SettingUpGallery setSidebarContent={setSidebarContent} />;
      case 'SettingUpTextBlock':
        return <SettingUpTextBlock setSidebarContent={setSidebarContent} />;
      case 'SettingUpImageText':
        return <SettingUpImageText setSidebarContent={setSidebarContent} />;
      case 'SettingUpTextImage':
        return <SettingUpTextImage setSidebarContent={setSidebarContent} />;
      case 'SettingUpVideo':
        return <SettingUpVideo setSidebarContent={setSidebarContent} />;
      case 'SettingUpListGrid':
        return <SettingUpListGrid setSidebarContent={setSidebarContent} />;
      case 'SettingUpList':
        return <SettingUpList setSidebarContent={setSidebarContent} />;
      default:
        return <SidebarSettingTags setSidebarContent={setSidebarContent} />;
    }
  };

  return (
    <div className="content-customization">
      <header className="content-customization__header-container">
        <h1 className="content-customization__header-title">Настройка контента</h1>
        <Button className={'btn-download'} onClick={handleClick}>
          Выгрузить сайт
        </Button>
      </header>

      <main className="content-customization__main">
        <aside className="content-customization__main__sidebar-container">
          <div className="content-customization__main__sidebar-container__list-container">
            {sidebarContentToRender()}
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
