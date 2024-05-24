import './index.scss';
import { useState } from 'react';
import { Button, Flex } from 'antd';
import SetLogoImage from '../../set-logo-image/ui/index.jsx';
import SetText from '../../set-text/ui/index.jsx';

export default function DropDownListLogo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h1></h1>
      <Button className="dropdown-button" onClick={toggleDropdown}>
        Логотип
      </Button>
      {isOpen && (
        <ul className="dropdown-list">
          <div>
            <SetText maxLength={20} place={'logo-text'} textType={'small-header'} color={'white'} font={'Arial'} />
          </div>
          <SetLogoImage />
        </ul>
      )}
    </div>
  );
}
