import './index.scss';
import DropDownListChoice from '../../../entities/drop-down-list-choice/ui/index.jsx';
import DropDownListLogo from '../../../entities/drop-down-list-logo/ui/index.jsx';
import DropDownListMenu from '../../../entities/drop-down-list-menu/ui/index.jsx';
import DropDownListPhone from '../../../entities/drop-down-list-phone/ui/index.jsx';

export default function SettingUpHeader({ setSidebarContent }) {
  const handleClick = () => {
    setSidebarContent(null);
  };

  return (
    <div className="setting-up-header">
      <h2>Настройка хедера</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
      <DropDownListLogo />
      {/*<DropDownListChoice />*/}
      <DropDownListMenu typesOfLinks={'menu__link'} maximumNumberOfLinks={5} />
      <DropDownListPhone place={'phone'} />
    </div>
  );
}
