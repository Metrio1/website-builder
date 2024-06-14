import './index.scss';
import { useState } from 'react';
import { Button, Flex } from 'antd';
import SetText from '../../set-text/ui/index.jsx';
import EmailCreation from '../../email-creation/ui/index.jsx';

export default function DropDownListEmail({ place, color }) {
  const [size, setSize] = useState('large');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button size={size} className="dropdown-button" onClick={toggleDropdown}>
        E-mail
      </Button>
      {isOpen && (
        <div>
          <EmailCreation place={place} color={'white'} />
        </div>
      )}
    </div>
  );
}
