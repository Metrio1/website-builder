import './index.scss';
import { Button, Flex } from 'antd';
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
      <Button className="dropdown-button" onClick={toggleDropdown}>
        Текст
      </Button>
      {isOpen && (
        <div className="dropdown-list">
          <SetText maxLength={150} place={'footer-top1'} color={'white'} font={'Arial'} />
        </div>
      )}
    </div>
  );
}
