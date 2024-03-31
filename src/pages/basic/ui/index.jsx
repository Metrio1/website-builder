import './index.scss';
import TemplateSelection from '../../../widgets/template-selection/ui/index.jsx';

export default function Basic() {
  return (
    <div className="basic">
      <header>
        <div className="basic__header">
          <button className="basic__back-button">Назад</button>
        </div>
      </header>
      <main>
        <div>
          <h1 className="basic__title">Выбор базового шаблона</h1>
          <div className="basic__templates">
            <TemplateSelection
              image={'first_layout.svg'}
              description={'Шаблон с левой боковой панелью'}
              layoutNumber={'first_layout'}
            />
            <TemplateSelection
              image={'second_layout.svg'}
              description={'Шаблон без боковой панели'}
              layoutNumber={'second_layout'}
            />
            <TemplateSelection
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
