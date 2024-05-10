import './index.scss';
import { useState } from 'react';

export default function SocialMediaCreation() {
  const [buttonLink, setButtonLink] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('fab fa-facebook-f');
  const [linkCount, setLinkCount] = useState(0);
  const maxLinks = 5;

  const handleUrlChange = (event) => {
    setButtonLink(event.target.value);
  };

  const handleIconChange = (event) => {
    setSelectedIcon(event.target.value);
  };

  const handleButtonCreation = () => {
    if (linkCount >= maxLinks) {
      alert(`Максимальное количество ссылок (${maxLinks}) достигнуто!`);
      return;
    }

    const button = document.createElement('button');
    button.className = 'round-button';

    button.addEventListener('click', () => {
      window.open(buttonLink, '_blank');
    });

    const icon = document.createElement('i');
    icon.className = selectedIcon;
    button.appendChild(icon);

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');
    const placementTag = node.querySelector(`.footer-bottom__social-media`);

    placementTag.appendChild(button);

    setLinkCount(linkCount + 1);
  };

  return (
    <div>
      <h3>Добавить кнопку</h3>
      <input
        type="text"
        placeholder="Введите URL для кнопки (необязательно)"
        value={buttonLink}
        onChange={handleUrlChange}
      />
      <p>Выберите иконку</p>
      <select value={selectedIcon} onChange={handleIconChange}>
        <option value="fab fa-facebook-f">Facebook</option>
        <option value="fab fa-twitter">Twitter</option>
        <option value="fab fa-instagram">Instagram</option>
        <option value="fab fa-youtube">YouTube</option>
        <option value="fab fa-whatsapp">WhatsApp</option>
        <option value="fab fa-tiktok">TikTok</option>
        <option value="fab fa-vk">Вконтакте</option>
      </select>

      <button onClick={handleButtonCreation}>Создать кнопку</button>
    </div>
  );
}
