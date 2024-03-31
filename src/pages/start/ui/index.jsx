import './index.scss';

export default function Start() {
  return (
    <div className="start">
      <header>
        <div className="start__header"></div>
      </header>
      <main>
        <div className="start__banner">
          <h1 className="start__main-title">Конструктор сайтов</h1>
          <div className="start__slogan">
            <span className="start__slogan-text">
              Создайте потрясающий сайт
              <br />
              без знания программирования
              <br />и дизайна для ваших нужд
            </span>
            <button className="start__main-button">Создать сайт</button>
          </div>
        </div>
        <div className="start__description">
          <h1 className="start__description-title">Большой выбор шаблонов</h1>
        </div>
      </main>
    </div>
  );
}
