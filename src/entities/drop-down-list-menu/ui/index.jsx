import './index.scss';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import д from '../../link-creation/ui/index.jsx';
import LinkCreation from '../../link-creation/ui/index.jsx';

export default function DropDownListMenu({ typesOfLinks, maximumNumberOfLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfLink, setNumberOfLink] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateLink = () => {
    if (numberOfLink < maximumNumberOfLinks) {
      setNumberOfLink(numberOfLink + 1);
    }
  };

  return (
    <div className="dropdown">
      <Button className="dropdown-button" onClick={toggleDropdown}>
        Меню
      </Button>
      {isOpen && (
        <ul className="dropdown-list">
          {[...Array(numberOfLink)].map((_, index) => (
            <li key={index}>
              <LinkCreation numberOfLink={index + 1} typesOfLinks={typesOfLinks} />
            </li>
          ))}
          {numberOfLink < maximumNumberOfLinks && (
            <li>
              <Button onClick={handleCreateLink}>Добавить ссылку</Button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
