import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/basic');
    // console.log(initialState);
  };
  return (
    <div className="home">
      <h1 className="home__title">Добро пожаловать в конструктор сайтов!</h1>
      <main className="home__main-container">
        <button className="home__main-container__create-button" onClick={() => handleSelection()}>
          Создать сайт
        </button>
      </main>
    </div>
  );
}
