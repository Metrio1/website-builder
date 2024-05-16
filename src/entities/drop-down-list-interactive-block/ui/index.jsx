import './index.scss';
import { useState } from 'react';
import SetText from '../../set-text/ui/index.jsx';
import EmailCreation from '../../email-creation/ui/index.jsx';
import SetButton from '../../set-button/ui/index.jsx';

export default function DropDownListInteractiveBlock({ index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Настроить
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <SetText maxLength={30} place={`ibanner__title__text-${index}`} />
          <SetButton />
        </div>
      )}
    </div>
  );
}
