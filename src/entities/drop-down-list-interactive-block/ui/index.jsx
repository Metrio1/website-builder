import './index.scss';
import { useState } from 'react';
import SetText from '../../set-text/ui/index.jsx';
import EmailCreation from '../../email-creation/ui/index.jsx';
import SetButton from '../../set-button/ui/index.jsx';
import {Button} from "antd";

export default function DropDownListInteractiveBlock({ index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button className="dropdown-button" onClick={toggleDropdown}>
        Настроить
      </Button>
      {isOpen && (
        <div className="dropdown-list">
          <SetText maxLength={30} place={`ibanner__title__text-${index}`} textType={"small-header"} />
          <SetButton place={`ibanner__button-${index}`} />
        </div>
      )}
    </div>
  );
}
