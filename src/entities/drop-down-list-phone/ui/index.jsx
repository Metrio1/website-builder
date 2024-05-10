import React, { useState } from 'react';

export default function DropDownListPhone({ place }) {
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Оставляем только цифры
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');

    // Применяем форматирование номера телефона
    const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
    return phoneNumber; // Возвращаем оригинальный текст, если не удалось форматировать
  };

  const handleLinkCreation = () => {
    const formattedPhoneNumber = formatPhoneNumber(linkText);

    const link = document.createElement('a');
    link.href = linkUrl || '#'; // Если URL не указан, использовать '#'
    link.textContent = formattedPhoneNumber;
    link.style.fontSize = '24px';

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');
    const placementTag = node.querySelector(`.${place}`);

    // Очистить содержимое элемента, прежде чем добавить ссылку
    placementTag.innerHTML = '';
    placementTag.appendChild(link);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Телефон
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <h3>Добавить телефон</h3>
          <input
            type="text"
            placeholder="Введите номер телефона"
            value={linkText}
            onChange={(event) => setLinkText(event.target.value)}
            maxLength={11}
          />
          <input
            type="text"
            placeholder="Введите ссылку"
            value={linkUrl}
            onChange={(event) => setLinkUrl(event.target.value)}
          />
          <button onClick={handleLinkCreation}>Create Link</button>
        </div>
      )}
    </div>
  );
}
