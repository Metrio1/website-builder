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
import { useDispatch, useSelector } from 'react-redux';
import { incrementBlocks } from '../model/number-of-blocks.slice.js';
import BackButton from '../../../shared/back-button/ui/index.jsx';
import { Button } from 'antd';
import SettingUpTop from '../../../entities/setting-up-top/ui/index.jsx';

export default function SettingUpMain({ setSidebarContent }) {
  const [size, setSize] = useState('large');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const numberOfBlocks = useSelector((state) => state.numberOfBlocks);
  const dispatch = useDispatch();

  const handleCreateBlock = () => {
    dispatch(incrementBlocks());
  };

  return (
    <div className="dropdown">
      <SettingUpTop headerText={'Добавление контента'} setSidebarContent={setSidebarContent} />
      <div className="dropdown-list">
        {[...Array(numberOfBlocks)].map((_, index) => (
          <div key={index}>
            <DropDownListChoice index={index} setSidebarContent={setSidebarContent} />
          </div>
        ))}
        {numberOfBlocks < 7 && (
          <Button size={size} onClick={handleCreateBlock}>
            Добавить блок с контентом
          </Button>
        )}
      </div>
    </div>
  );
}
