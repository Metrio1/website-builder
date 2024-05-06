import './index.scss';
import { useState } from 'react';

export default function DropDownListLogo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h1></h1>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Телефон
      </button>
      {isOpen && <ul className="dropdown-list"></ul>}
    </div>
  );
}
