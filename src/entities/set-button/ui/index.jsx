import './index.scss';
import { useState } from 'react';

export default function SetButton({ place }) {
  const [inputText, setInputText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      const iframe = document.querySelector('iframe');
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const node = iframeDocument.querySelector('.sgcms-layout');

      const placementContainer = node.querySelector(`.${place}`);

      if (placementContainer && !placementContainer.querySelector('.btn')) {
        // Создаем кнопку, если её еще нет
        const newButton = document.createElement('a');
        newButton.href = linkUrl || '#';
        newButton.className = `btn`;
        newButton.innerHTML = inputText || 'Кнопка';
        placementContainer.appendChild(newButton);
      }
    }
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const button = iframeDocument.querySelector(`.${place} .btn`);

    if (button) {
      button.innerHTML = newText;
    }
  };

  const handleUrlChange = (event) => {
    const newLink = event.target.value;
    setLinkUrl(newLink);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const button = iframeDocument.querySelector(`.${place} .btn`);

    if (button) {
      button.href = newLink;
    }
  };

  return (
      <div>
        <button className="dropdown-button" onClick={toggleDropdown}>
          Добавить кнопку
        </button>
        {isOpen && (
            <div className="input-container">
              <h3>Введите текст для кнопки</h3>
              <textarea value={inputText} onChange={handleInputChange} maxLength={20} />
              <h3>Введите ссылку для кнопки</h3>
              <input
                  type="text"
                  placeholder="Введите URL"
                  value={linkUrl}
                  onChange={handleUrlChange}
              />
            </div>
        )}
      </div>
  );
}