import './index.scss';
import { useNavigate } from 'react-router-dom';
import {Button} from "antd";

export default function Home() {
  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/basic');
  };
  return (
    <div className="home">
      <h1 className="home__title">Добро пожаловать в конструктор сайтов!</h1>
      <main className="home__main-container">
        <Button type="primary" size={'large'} onClick={() => handleSelection()}>
          Создать сайт
        </Button>
      </main>
    </div>
  );
}
