import './index.scss';
import { useState } from 'react';
import { Button, Flex } from 'antd';
import DropDownListChoice from '../../drop-down-list-choice/ui/index.jsx';
import SocialMediaCreation from '../../social-media-creation/ui/index.jsx';
import { isElement } from 'react-dom/test-utils';

export default function DropDownListSocialMedia() {
  const [size, setSize] = useState('large');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button size={size} className="dropdown-button" onClick={toggleDropdown}>
        Социальные сети
      </Button>
      {isOpen && (
        <ul className="dropdown-list">
          <SocialMediaCreation />
        </ul>
      )}
    </div>
  );
}
