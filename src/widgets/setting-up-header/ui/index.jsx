import './index.scss';

export default function SettingUpHeader({ setSidebarContent }) {
    const handleClick = () => {
        setSidebarContent(null);
    }

  return (
    <div>
        <h2>Настройка хедера</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
    </div>
  );
}
