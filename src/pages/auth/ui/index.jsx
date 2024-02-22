import './index.scss';
import { Link } from 'react-router-dom';

export default function Auth() {
  const handleClick = () => console.log('Авторизация прошла успешно');

  return (
    <main>
      {/*<Outlet />*/}
      <div className="authorization">
        <h1 className="authorization__header">Авторизация</h1>
        <div className="authorization__content">
          <div className="authorization__fields">
            <label htmlFor="surname">Логин</label>
            <input type="text"></input>
            <label htmlFor="password">Пароль</label>
            <input type="text"></input>
            <button onClick={handleClick} type="submit" className="auth-btn">
              Авторизоваться
            </button>
            <Link to="/registration" relative="path">
              Ещё нет аккаунта?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
