import './index.scss';
import { useState } from 'react';

export default function DropDownListChoice() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <h1></h1>
      <button className="dropdown-button" onClick={toggleDropdown}>{selectedOption || 'Выберите вариант'}</button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-element" onClick={() => selectOption('Вариант 1')}>Вариант 1</li>
          <li className="dropdown-element" onClick={() => selectOption('Вариант 2')}>Вариант 2</li>
          <li className="dropdown-element" onClick={() => selectOption('Вариант 3')}>Вариант 3</li>
        </ul>
      )}
    </div>
  );
}
