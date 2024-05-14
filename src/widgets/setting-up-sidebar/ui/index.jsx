import './index.scss';
import DropDownListMenu from '../../../entities/drop-down-list-menu/ui/index.jsx';

export default function SettingUpSidebar({ setSidebarContent }) {
  const handleBack = () => {
    setSidebarContent(null);
  };

  return (
    <div className="setting-up-sidebar" style={{ overflowY: 'scroll' }}>
      <h2>Настройка сайдбара</h2>
      <button onClick={() => handleBack()}>Вернуться</button>
      <DropDownListMenu typesOfLinks={'sidebar__link'} maximumNumberOfLinks={10} />
    </div>
  );
}
