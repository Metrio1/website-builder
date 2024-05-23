import './index.scss';
import { useState } from 'react';
import { Button, Flex } from 'antd';
import SetText from '../../set-text/ui/index.jsx';
import EmailCreation from "../../email-creation/ui/index.jsx";

export default function DropDownListEmail({ place, color }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button className="dropdown-button" onClick={toggleDropdown}>
        E-mail
      </Button>
      {isOpen && (
        <div className="dropdown-list">
          <EmailCreation place={place} color={'white'} />
        </div>
      )}
    </div>
  );
}
