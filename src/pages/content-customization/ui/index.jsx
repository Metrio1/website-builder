import React, { useState, useEffect } from 'react';
import './index.scss';
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
import SettingUpMain from "../../../widgets/setting-up-main/ui/index.jsx";
import SettingUpSlider from "../../../widgets/setting-up-slider/ui/index.jsx";
import SettingUpGallery from "../../../widgets/setting-up-gallery/ui/index.jsx";
import SettingUpTextBlock from "../../../widgets/setting-up-text-block/ui/index.jsx";
import SettingUpImageText from "../../../widgets/setting-up-image-text/ui/index.jsx";
import SettingUpTextImage from "../../../widgets/setting-up-text-image/ui/index.jsx";
import SettingUpVideo from "../../../widgets/setting-up-video/ui/index.jsx";
import SettingUpListGrid from "../../../widgets/setting-up-list-grid/ui/index.jsx";
import SettingUpList from "../../../widgets/setting-up-list/ui/index.jsx";

export default function ContentCustomization() {
  const templateId = useSelector((state) => state.templateSlice.websiteTemplate);

  const [sidebarContent, setSidebarContent] = useState('SettingUpTags');

  // console.log(sidebarContent);

  const { data } = useGetLayoutQuery(templateId, { skip: !templateId });

  // const sidebarContentToRender = !sidebarContent ? <SidebarSettingTags setSidebarContent={setSidebarContent}/> : <SidebarSettingHeader setSidebarContent={setSidebarContent}/>;

  const sidebarContentToRender = () => {
    switch (sidebarContent) {
      case 'SettingUpHeader':
        return <SettingUpHeader setSidebarContent={setSidebarContent} />;
      case 'SettingUpSidebar':
        return <SettingUpSidebar setSidebarContent={setSidebarContent} />;
      case 'SettingUpFooter':
        return <SettingUpFooter setSidebarContent={setSidebarContent} />;
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
