import './index.scss';

export default function SettingUpSidebar({ setSidebarContent }) {
    const handleClick = () => {
        setSidebarContent(null);
    }

  return (
    <div>
        <h2>Настройка сайдбара</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
    </div>
  );
}
