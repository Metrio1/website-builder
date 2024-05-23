import './index.scss';
import DropDownListMenu from '../../../entities/drop-down-list-menu/ui/index.jsx';
import SetText from '../../../entities/set-text/ui/index.jsx';
import { useEffect } from 'react';
import BackButton from "../../../shared/back-button/ui/index.jsx";

export default function SettingUpSidebar({ setSidebarContent }) {

  useEffect(() => {
    const iframe = document.querySelector('iframe');

    const removeBorders = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const sidebar = iframeDocument.querySelector('.sidebar');
      if (sidebar) {
        const elements = sidebar.querySelectorAll('*');
        elements.forEach((element) => {
          element.style.border = 'none';
        });
      }
    };

    if (iframe) {
      if (iframe.contentDocument.readyState === 'complete') {
        removeBorders();
      } else {
        iframe.onload = () => {
          removeBorders();
        };
      }
    }
  }, []);

  return (
    <div className="setting-up-sidebar">
      <h2>Настройка сайдбара</h2>
      <BackButton setSidebarContent={setSidebarContent}/>
      <SetText place={'sidebar__text'} maxLength={10} textType={'small-header'} color={'white'} font={'Arial'} />
      <DropDownListMenu typesOfLinks={'sidebar__link'} maximumNumberOfLinks={10} />
    </div>
  );
}
