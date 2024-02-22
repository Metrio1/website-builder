import './index.scss';
import { Link } from 'react-router-dom';

export default function Reg() {
  const handleClick = () => console.log('Регистрация прошла успешно');

  return (
    <main>
      {/*<Outlet />*/}
      <div className="registration">
        <h1 className="registration__header">Регистрация</h1>
        <div className="registration__content">
          <div className="registration__fields">
            <label htmlFor="name">Имя</label>
            <input type="text"></input>
            <label htmlFor="surname">Фамилия</label>
            <input type="text"></input>
            <label htmlFor="surname">Логин</label>
            <input type="text"></input>
            <label htmlFor="email">Email</label>
            <input type="text"></input>
            <label htmlFor="password">Пароль</label>
            <input type="text"></input>
            <label htmlFor="password-repeat">Повторение пароля</label>
            <input type="password"></input>
            <button onClick={handleClick} type="submit" className="reg-btn">
              Зарегистрироваться
            </button>
            <Link to="/auth" relative="path" className="link-to-auth">
              Уже есть аккаунт?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
