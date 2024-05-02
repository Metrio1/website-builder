import './index.scss';
import DropDownList from '../../../entities/drop-down-list/ui/index.jsx';

export default function SettingUpHeader({ setSidebarContent }) {
  const handleClick = () => {
    setSidebarContent(null);
  };

  return (
    <div>
      <h2>Настройка хедера</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
      <DropDownList />
    </div>
  );
}
