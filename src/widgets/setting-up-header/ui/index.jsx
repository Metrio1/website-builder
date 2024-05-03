import './index.scss';
import DropDownList from '../../../entities/drop-down-list/ui/index.jsx';
import DropDownListChoice from '../../../entities/drop-down-list-choice/ui/index.jsx';

export default function SettingUpHeader({ setSidebarContent }) {
  const handleClick = () => {
    setSidebarContent(null);
  };

  return (
    <div className="setting-up-header">
      <h2>Настройка хедера</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
      <DropDownList />
      <DropDownListChoice />

    </div>
  );
}
