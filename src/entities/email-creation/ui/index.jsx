import './index.scss';
import { useState } from 'react';

export default function EmailCreation() {
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

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');
    const placementTag = node.querySelector(`.footer-top3__e-mail`);

    // Очистить содержимое элемента, прежде чем добавить ссылку
    placementTag.innerHTML = '';
    placementTag.appendChild(link);
  };

  return (
    <div>
      <h3>Введите e-mail</h3>
      <input
        type="text"
        placeholder="Enter e-mail text"
        value={emailText}
        onChange={handleTextChange}
        maxLength={15}
      />
      <input type="text" placeholder="Enter e-mail" value={email} onChange={handleUrlChange} />
      <button onClick={handleLinkCreation}>Create e-mail</button>
    </div>
  );
}
