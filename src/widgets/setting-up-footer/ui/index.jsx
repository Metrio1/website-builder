import './index.scss';

export default function SettingUpFooter({ setSidebarContent }) {
    const handleClick = () => {
        setSidebarContent(null);
    }

  return (
    <div>
        <h2>Настройка футера</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
    </div>
  );
}
