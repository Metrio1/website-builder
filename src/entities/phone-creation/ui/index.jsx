import './index.scss';
import { useState } from 'react';

export default function PhoneCreation() {
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

        const iframe = document.querySelector('iframe');
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const node = iframeDocument.querySelector('.sgcms-layout');
        const placementTag = node.querySelector(`.link-${numberOfLink}`);

        // Очистить содержимое элемента, прежде чем добавить ссылку
        placementTag.innerHTML = '';
        placementTag.appendChild(link);
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
            <button onClick={handleLinkCreation}>Create Link</button>
        </div>
    );
}
