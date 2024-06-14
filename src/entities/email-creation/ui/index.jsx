import './index.scss';
import { Button, Flex } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';

export default function EmailCreation({ place, color }) {
  const [emailText, setEmailText] = useState('');
  const [email, setEmail] = useState('');

  const handleTextChange = (event) => {
    setEmailText(event.target.value);
  };

  const handleUrlChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLinkCreation = () => {
    const link = document.createElement('a');
    link.href = email || '#'; // Если URL не указан, использовать '#'
    link.textContent = emailText;
    link.style.fontSize = '20px';
    link.style.color = color;

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');
    const placementTag = node.querySelector(`.${place}`);

    // Очистить содержимое элемента, прежде чем добавить ссылку
    placementTag.innerHTML = '';
    placementTag.appendChild(link);
  };

  return (
    <div className="dropdown-list">
      <h3>Введите e-mail</h3>
      <Input
        type="text"
        placeholder="Enter e-mail text"
        value={emailText}
        onChange={handleTextChange}
        maxLength={15}
      />
      <Input type="text" placeholder="Enter e-mail" value={email} onChange={handleUrlChange} />
      <Button className="dropdown-list__add-e-mail" onClick={handleLinkCreation}>
        Создать e-mail
      </Button>
    </div>
  );
}
