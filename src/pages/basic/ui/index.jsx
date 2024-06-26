import './index.scss';
import TemplateLayoutCard from '../../../entities/template/ui/TemplateLayoutCard/ui/index.jsx';
import { useNavigate } from 'react-router-dom';
import {Button} from "antd";

export default function Basic() {


  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/');
  };
  return (
    <div className="basic">
      <header>
        <div className="basic__header">
          <Button className="color-spectrum__header__back-button" onClick={() => handleSelection()}>
            Вернуться назад
          </Button>
        </div>
      </header>
      <main>
        <div>
          <h1 className="basic__title">Выбор базового шаблона</h1>
          <div className="basic__templates">
            <TemplateLayoutCard
              image={'first_layout.svg'}
              description={'Шаблон с левой боковой панелью'}
              layoutNumber={'1'}
            />
            <TemplateLayoutCard
              image={'second_layout.svg'}
              description={'Шаблон без боковой панели'}
              layoutNumber={'2'}
            />
            <TemplateLayoutCard
              image={'third_layout.svg'}
              description={'Шаблон с правой боковой панелью'}
              layoutNumber={'3'}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
