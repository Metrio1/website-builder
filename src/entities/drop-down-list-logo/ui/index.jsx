import './index.scss';
import { useState } from 'react';
import SetLogoImage from '../../set-logo-image/ui/index.jsx';
import SetLogoText from '../../set-logo-text/ui/index.jsx';

export default function DropDownListLogo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h1></h1>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Логотип
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <div>
            <p>Текст</p>
            <SetLogoText />
          </div>
            <SetLogoImage />
        </ul>
      )}
    </div>
  );
}
