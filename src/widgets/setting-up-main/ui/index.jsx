import './index.scss';
import MainBlockCreation from '../../../entities/main-block-creation/ui/index.jsx';
import {
  useLazyGetCssQuery,
  useLazyGetJavaScriptQuery,
  useLazyGetMainQuery,
  useLazyGetTagQuery,
} from '../../../entities/layout-pages/api/api.js';
import React, { useState } from 'react';
import LinkCreation from '../../../entities/link-creation/ui/index.jsx';
import DropDownListChoice from '../../../entities/drop-down-list-choice/ui/index.jsx';
import SliderCreation from '../../../entities/slider-creation/ui/index.jsx';

export default function SettingUpMain({ setSidebarContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [numberOfBlocks, setNumberOfBlocks] = useState(1);

  const handleBack = () => {
    setSidebarContent(null);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCreateBlock = () => {
    if (numberOfBlocks < 5) {
      setNumberOfBlocks(numberOfBlocks + 1);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={() => handleBack()}>Вернуться</button>
      <ul className="dropdown-list">
        {[...Array(numberOfBlocks)].map((_, index) => (
          <li key={index}>
            <DropDownListChoice index={index} setSidebarContent={setSidebarContent} />
          </li>
        ))}
        {numberOfBlocks < 5 && (
          <li>
            <button onClick={handleCreateBlock}>Добавить блок с контентом</button>
          </li>
        )}
      </ul>
    </div>
  );

}
