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
import {useDispatch, useSelector} from "react-redux";
import { incrementBlocks } from '../model/number-of-blocks.slice.js';

export default function SettingUpMain({ setSidebarContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const numberOfBlocks = useSelector((state) => state.numberOfBlocks);
  const dispatch = useDispatch();

  const handleBack = () => {
    setSidebarContent(null);
  };

  const handleCreateBlock = () => {
    dispatch(incrementBlocks());
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
        {numberOfBlocks < 7 && (
          <li>
            <button onClick={handleCreateBlock}>Добавить блок с контентом</button>
          </li>
        )}
      </ul>
    </div>
  );

}
