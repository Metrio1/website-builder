import './index.scss';
import { useState } from 'react';
import SetText from '../../set-text/ui/index.jsx';

export default function DropDownListText() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h1></h1>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Текст
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <SetText maxLength={150} place={'footer-top1'} />
        </div>
      )}
    </div>
  );
}
