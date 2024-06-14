import './index.scss';
import DropDownListMenu from '../../../entities/drop-down-list-menu/ui/index.jsx';
import SetText from '../../../entities/set-text/ui/index.jsx';
import { useEffect } from 'react';
import BackButton from '../../../shared/back-button/ui/index.jsx';
import SettingUpTop from '../../../entities/setting-up-top/ui/index.jsx';

export default function SettingUpSidebar2({ setSidebarContent }) {
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
    <div className="setting-up-sidebar" style={{ overflowY: 'scroll' }}>
      <SettingUpTop headerText={'Настройка меню'} setSidebarContent={setSidebarContent} />
      <SetText
        place={'sidebar__text-1'}
        maxLength={10}
        textType={'small-header'}
        color={'white'}
        font={'Arial'}
      />
      <DropDownListMenu typesOfLinks={'sidebar-top__link'} maximumNumberOfLinks={5} />
      <SetText
        place={'sidebar__text-2'}
        maxLength={10}
        textType={'small-header'}
        color={'white'}
        font={'Arial'}
      />
      <DropDownListMenu typesOfLinks={'sidebar-bottom__link'} maximumNumberOfLinks={5} />
    </div>
  );
}
