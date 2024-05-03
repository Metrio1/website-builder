import './index.scss';
import { useState } from 'react';
import ImageLoader from "../../ImageLoader/ui/index.jsx";

export default function DropDownList() {
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
            <input type="text" />
          </div>
          <ImageLoader />
        </ul>
      )}
    </div>
  );
}
