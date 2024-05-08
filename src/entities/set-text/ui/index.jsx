import './index.scss';
import { useState } from 'react';

export default function SetText({ maxLength, place }) {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector(`.${place}`);

    placementTag.style.fontSize = '30px';
    placementTag.innerHTML = newText;
  };

  return (
    <div>
      <h3>Введите текст</h3>
      <textarea value={inputText} onChange={handleInputChange} maxLength={maxLength} />
    </div>
  );
}
