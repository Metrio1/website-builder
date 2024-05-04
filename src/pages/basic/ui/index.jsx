import './index.scss';
import TemplateLayoutCard from '../../../entities/template/ui/TemplateLayoutCard/ui/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetSelectedTags } from '../../../entities/tag/model/tag.slice.js';

export default function Basic() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSelectedTags());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/');
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
            <TemplateLayoutCard
              image={'fourth_layout.svg'}
              description={'Шаблон с верхней панелью'}
              layoutNumber={'4'}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
