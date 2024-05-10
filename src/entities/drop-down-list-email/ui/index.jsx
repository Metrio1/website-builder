import './index.scss';
import { useState } from 'react';
import SetText from '../../set-text/ui/index.jsx';
import EmailCreation from "../../email-creation/ui/index.jsx";

export default function DropDownListEmail() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        E-mail
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <EmailCreation />
        </div>
      )}
    </div>
  );
}
