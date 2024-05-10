import './index.scss';
import { useState } from 'react';

export default function MainBlockCreation() {
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const handleTextChange = (event) => {
    setLinkText(event.target.value);
  };

  const handleUrlChange = (event) => {
    setLinkUrl(event.target.value);
  };

  const handleMainCreation = () => {

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');
    const placementTag = node.querySelector(`.sgcms-layout__main__main-container`);

    // Очистить содержимое элемента, прежде чем добавить ссылку
    placementTag.innerHTML = 'sdfsdf';
  };

  return (
    <div>
      <h3>Создать ссылку</h3>
      <input
        type="text"
        placeholder="Enter link text"
        value={linkText}
        onChange={handleTextChange}
        maxLength={15}
      />
      <input type="text" placeholder="Enter link URL" value={linkUrl} onChange={handleUrlChange} />
      <button onClick={handleMainCreation}>Create block</button>
    </div>
  );
}
