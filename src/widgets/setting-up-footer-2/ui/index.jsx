import './index.scss';
import DropDownListText from '../../../entities/drop-down-list-text/ui/index.jsx';
import DropDownListMenu from '../../../entities/drop-down-list-menu/ui/index.jsx';
import DropDownListPhone from '../../../entities/drop-down-list-phone/ui/index.jsx';
import DropDownListEmail from '../../../entities/drop-down-list-email/ui/index.jsx';
import DropDownListSocialMedia from '../../../entities/drop-down-social-media/ui/index.jsx';
import { useEffect } from 'react';
import BackButton from '../../../shared/back-button/ui/index.jsx';
import SettingUpTop from '../../../entities/setting-up-top/ui/index.jsx';

export default function SettingUpFooter2({ setSidebarContent }) {
  useEffect(() => {
    const iframe = document.querySelector('iframe');

    const removeBorders = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const footer = iframeDocument.querySelector('.footer');
      if (footer) {
        const elements = footer.querySelectorAll('*');
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
    <div className="setting-up-footer">
      <SettingUpTop headerText={'Настройка подвала'} setSidebarContent={setSidebarContent} />
      <DropDownListText
        name={'Текст'}
        maxLength={300}
        place={'footer-top1'}
        color={'white'}
        font={'Arial'}
      />
      <DropDownListMenu typesOfLinks={'footer-top2__link'} maximumNumberOfLinks={5} />
      <DropDownListMenu typesOfLinks={'footer-top3__link'} maximumNumberOfLinks={5} />
      <DropDownListPhone place={'footer-bottom__contacts__phone'} color={'white'} />
      <DropDownListEmail place={'footer-bottom__contacts__e-mail'} />
      <DropDownListSocialMedia />
    </div>
  );
}
