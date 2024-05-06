import './index.scss';
import { useState } from 'react';

export default function SetLogoText() {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector('.logo-text');

    placementTag.style.fontSize = '30px';
    placementTag.innerHTML = newText;
  };

  return <input type="text" value={inputText} onChange={handleInputChange} maxLength={20} />;
}
