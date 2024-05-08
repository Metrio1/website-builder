import './index.scss';
import DropDownListText from "../../../entities/drop-down-list-text/ui/index.jsx";
import DropDownListMenu from "../../../entities/drop-down-list-menu/ui/index.jsx";

export default function SettingUpFooter({ setSidebarContent }) {
  const handleClick = () => {
    setSidebarContent(null);
  };

  return (
    <div className="setting-up-footer">
      <h2>Настройка футера</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
        <DropDownListText />
        <DropDownListMenu typesOfLinks={'footer-top2__link'} maximumNumberOfLinks={5} />
    </div>
  );
}
