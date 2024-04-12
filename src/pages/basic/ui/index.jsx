import './index.scss';
import TemplateLayoutCard from '../../../entities/template/ui/TemplateLayoutCard/ui/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function Basic() {
  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/');
    // console.log(initialState);
  };
  return (
    <div className="basic">
      <header>
        <div className="basic__header">
          <button className="color-spectrum__header__back-button" onClick={() => handleSelection()}>
            Вернуться назад
          </button>
        </div>
      </header>
      <main>
        <div>
          <h1 className="basic__title">Выбор базового шаблона</h1>
          <div className="basic__templates">
            <TemplateLayoutCard
              image={'first_layout.svg'}
              description={'Шаблон с левой боковой панелью'}
              layoutNumber={'first_layout'}
            />
            <TemplateLayoutCard
              image={'second_layout.svg'}
              description={'Шаблон без боковой панели'}
              layoutNumber={'second_layout'}
            />
            <TemplateLayoutCard
              image={'third_layout.svg'}
              description={'Шаблон с правой боковой панелью'}
              layoutNumber={'third_layout'}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
