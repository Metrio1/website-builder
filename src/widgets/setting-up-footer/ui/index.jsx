import './index.scss';
import DropDownListText from "../../../entities/drop-down-list-text/ui/index.jsx";
import DropDownListMenu from "../../../entities/drop-down-list-menu/ui/index.jsx";
import DropDownListPhone from "../../../entities/drop-down-list-phone/ui/index.jsx";
import DropDownListEmail from "../../../entities/drop-down-list-email/ui/index.jsx";
import DropDownListSocialMedia from "../../../entities/drop-down-social-media/ui/index.jsx";

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
        <DropDownListPhone place={'footer-top3__phone'}/>
        <DropDownListEmail />
      <DropDownListSocialMedia />
    </div>
  );
}
