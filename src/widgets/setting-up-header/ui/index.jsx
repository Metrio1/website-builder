import './index.scss';
import DropDownListChoice from '../../../entities/drop-down-list-choice/ui/index.jsx';
import DropDownListLogo from '../../../entities/drop-down-list-logo/ui/index.jsx';
import DropDownListMenu from '../../../entities/drop-down-list-menu/ui/index.jsx';
import DropDownListPhone from '../../../entities/drop-down-list-phone/ui/index.jsx';
import { useEffect } from 'react';
import BackButton from '../../../shared/back-button/ui/index.jsx';
import SettingUpTop from '../../../entities/setting-up-top/ui/index.jsx';

export default function SettingUpHeader({ setSidebarContent }) {
  useEffect(() => {
    const iframe = document.querySelector('iframe');

    const removeBorders = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const header = iframeDocument.querySelector('.header');
      if (header) {
        const elements = header.querySelectorAll('*');
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
    <div className="setting-up-header">
      <SettingUpTop headerText={'Настройка шапки'} setSidebarContent={setSidebarContent} />
      <DropDownListLogo />
      <DropDownListMenu typesOfLinks={'menu__link'} maximumNumberOfLinks={5} />
      <DropDownListPhone place={'phone'} color={'white'} />
    </div>
  );
}
