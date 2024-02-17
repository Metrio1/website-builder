import './index.scss';
import {Link} from "react-router-dom";

export default function Reg() {
    return (
        <main>
            <div className="authorization">
                <h1 className="authorization__header">Авторизация</h1>
                <div className="authorization__content">
                    <div className="authorization__fields">
                        <label htmlFor="surname">Логин</label>
                        <input type="text"></input>
                        <label htmlFor="password">Пароль</label>
                        <input type="text"></input>
                        <button>Авторизоваться</button>
                        <Link to="/reg" relative="path">Уже есть аккаунт?</Link>
                    </div>
                </div>
            </div>
        </main>);
}

