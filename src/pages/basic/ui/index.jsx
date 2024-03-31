import './index.scss';
import templateSlice, { setTemplateId } from '../../../entities/template/model/template.slice.js';
import { store } from '../../../app/appStore.js';

export default function Basic() {
  const handleSelection = (layoutType) => {
    console.log(store.getState());
    store.dispatch(setTemplateId(layoutType));
    console.log(store.getState());
    // console.log(initialState);
  };

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
            <div className="basic__template">
              <img className="basic__layout" src="first_layout.svg" width="480" height="270" />
              <div className="basic__description">
                <h3>Шаблон с левой боковой панелью</h3>
                <button className="basic__button" onClick={() => handleSelection('first_layout')}>
                  Выбрать
                </button>
              </div>
            </div>
            <div className="basic__template">
              <img className="basic__layout" src="second_layout.svg" width="480" height="270" />
              <div className="basic__description">
                <h3>Шаблон без боковой панели</h3>
                <button className="basic__button" onClick={() => handleSelection('second_layout')}>
                  Выбрать
                </button>
              </div>
            </div>
            <div className="basic__template">
              <img className="basic__layout" src="third_layout.svg" width="480" height="270" />
              <div className="basic__description">
                <h3>Шаблон с правой боковой панелью</h3>
                <button className="basic__button" onClick={() => handleSelection('third_layout')}>
                  Выбрать
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
