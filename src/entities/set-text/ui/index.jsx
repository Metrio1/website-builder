import './index.scss';
import { Input } from 'antd';
const { TextArea } = Input;
import { useState } from 'react';

export default function SetText({ maxLength, place, textType, color, font }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector(`.${place}`);

    placementTag.style.color = color;

    placementTag.style.fontFamily = font;

    if (textType === 'big-header') {
      placementTag.style.fontSize = '24px'; // Or any style specific to headers
      placementTag.innerHTML = `<h1>${newText}</h1>`;
    } else if (textType === 'small-header') {
      placementTag.style.fontSize = '16px'; // Or any style specific to headers
      placementTag.innerHTML = `<h1>${newText}</h1>`;
    } else if (textType === 'smallest-header') {
      placementTag.style.fontSize = '12px'; // Or any style specific to headers
      placementTag.innerHTML = `<h1>${newText}</h1>`;
    } else {
      placementTag.style.fontSize = '16px'; // Or any style specific to regular text
      placementTag.innerHTML = `<p>${newText}</p>`;
    }
  };

  return (
    <div>
      <h4>Введите текст</h4>
      {/*<Input value={inputText} onChange={handleInputChange} maxLength={maxLength} />*/}
      <TextArea

        showCount
        maxLength={maxLength}
        onChange={handleInputChange}
        placeholder="disable resize"
        style={{
          height: 120,
          resize: 'none',
        }}
      />
    </div>
  );
}
