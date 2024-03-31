import './index.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <>
      <i className="fas fa-bars" onClick={() => setIsSidebarOpen(!isSidebarOpen)}></i>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul className="sidebar__ul">
            <li>
              <a href="/">Главная страница</a>
            </li>
            <li>
              <a href="/basic">Выбрать другой шаблон</a>
            </li>
            <li>
              <a href="/auth">Выйти из аккаунта</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
