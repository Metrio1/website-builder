import './index.scss';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import SetText from '../../set-text/ui/index.jsx';

export default function DropDownListText({ name, place, font, textType, maxLength, color }) {
  const [size, setSize] = useState('large');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h1></h1>
      <Button size={size} className="dropdown-button" onClick={toggleDropdown}>
        {name}
      </Button>
      {isOpen && (
        <div className="dropdown-list">
          <SetText
            maxLength={maxLength}
            place={place}
            color={color}
            font={font}
            textType={textType}
          />
        </div>
      )}
    </div>
  );
}
