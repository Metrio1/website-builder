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

      const placementBtn = node.querySelector(`.${place}`);

      if (!placementBtn) {
        // Создаем кнопку, если её еще нет
        const newButton = document.createElement('a');
        newButton.href = linkUrl || '#';
        newButton.className = `btn ibanner__href ${place}`;
        newButton.innerHTML = inputText || 'Кнопка';
        node.querySelector('.ibanner-content').appendChild(newButton);
      }
    }
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const button = iframeDocument.querySelector(`.${place}`);

    if (button) {
      button.innerHTML = newText;
    }
  };

  const handleUrlChange = (event) => {
    const newLink = event.target.value;
    setLinkUrl(newLink);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const button = iframeDocument.querySelector(`.${place}`);

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
            placeholder="Enter link URL"
            value={linkUrl}
            onChange={handleUrlChange}
          />
        </div>
      )}
    </div>
  );
}
