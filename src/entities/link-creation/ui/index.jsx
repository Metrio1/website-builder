import './index.scss';
import { Button, Flex } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';

export default function LinkCreation({ numberOfLink, typesOfLinks }) {
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const handleTextChange = (event) => {
    setLinkText(event.target.value);
  };

  const handleUrlChange = (event) => {
    setLinkUrl(event.target.value);
  };

  const handleLinkCreation = () => {
    const link = document.createElement('a');
    link.href = linkUrl || '#'; // Если URL не указан, использовать '#'
    link.textContent = linkText;
    link.style.fontSize = '20px';
    link.style.color = 'white';

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');
    const placementTag = node.querySelector(`.${typesOfLinks}-${numberOfLink}`);

    // Очистить содержимое элемента, прежде чем добавить ссылку
    placementTag.innerHTML = '';
    placementTag.appendChild(link);
  };

  return (
    <div>
      <h3 className={'link-creation'}>Создать ссылку</h3>
      <Input
        type="text"
        placeholder="Введите текст ссылки"
        value={linkText}
        onChange={handleTextChange}
        maxLength={15}
      />
      <Input type="text" placeholder="Введите URL ссылки" value={linkUrl} onChange={handleUrlChange} />
      <Button onClick={handleLinkCreation}>Create Link</Button>
    </div>
  );
}
