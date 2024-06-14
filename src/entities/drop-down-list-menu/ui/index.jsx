import './index.scss';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import д from '../../link-creation/ui/index.jsx';
import LinkCreation from '../../link-creation/ui/index.jsx';

export default function DropDownListMenu({ typesOfLinks, maximumNumberOfLinks }) {
  const [size, setSize] = useState('large');
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
      <Button size={size} className="dropdown-button" onClick={toggleDropdown}>
        Меню
      </Button>
      {isOpen && (
        <div className="dropdown-list">
          {[...Array(numberOfLink)].map((_, index) => (
            <div key={index}>
              <LinkCreation numberOfLink={index + 1} typesOfLinks={typesOfLinks} />
            </div>
          ))}
          {numberOfLink < maximumNumberOfLinks && (
            <div>
              <Button className="dropdown-list__add-link" onClick={handleCreateLink}>
                Добавить ссылку
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
