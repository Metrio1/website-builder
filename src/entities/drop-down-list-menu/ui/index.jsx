import './index.scss';
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
      <h1></h1>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Меню
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {[...Array(numberOfLink)].map((_, index) => (
            <li key={index}>
              <LinkCreation numberOfLink={index + 1} typesOfLinks={typesOfLinks} />
            </li>
          ))}
          {numberOfLink < maximumNumberOfLinks && (
            <li>
              <button onClick={handleCreateLink}>Добавить ссылку</button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
