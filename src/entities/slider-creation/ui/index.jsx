import './index.scss';
import {
  useLazyGetCssQuery,
  useLazyGetJavaScriptQuery,
  useLazyGetMainQuery,
  useLazyGetTagQuery,
} from '../../layout-pages/api/api.js';
import {useState} from "react";

export default function SliderCreation() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

  const [getMain, getMainState] = useLazyGetMainQuery();
  const [getJavaScript, getJavaScriptState] = useLazyGetJavaScriptQuery();
  const [getCss, getCssState] = useLazyGetCssQuery();

  const [getTag, getTagState] = useLazyGetTagQuery();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

  const handleGetMain = async (main, js1, js2, css1, css2, css3) => {
    const { data: tagMain } = await getMain(main);

    const { data: blockData } = await getTag('m1');

    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementBlock = node.querySelector('.sgcms-layout__main__main-container');
    placementBlock.insertAdjacentHTML('beforeend', blockData?.data);

    const placementTag = node.querySelector('.main__container');
    placementTag.innerHTML = tagMain?.data;
    if (main === 'slider') {
      const { data: jsMain1 } = await getJavaScript(js1);
      const { data: jsMain2 } = await getJavaScript(js2);
      const { data: cssMain1 } = await getCss(css1);
      const { data: cssMain2 } = await getCss(css2);
      const { data: cssMain3 } = await getCss(css3);
      const scriptTag1 = document.createElement('script');
      scriptTag1.type = 'text/javascript';
      scriptTag1.textContent = jsMain1?.data;
      placementTag.appendChild(scriptTag1);
      const scriptTag2 = document.createElement('script');
      scriptTag2.type = 'text/javascript';
      scriptTag2.textContent = jsMain2?.data;
      placementTag.appendChild(scriptTag2);
      const styleTag1 = document.createElement('style');
      styleTag1.textContent = cssMain1?.data;
      iframeDocument.head.appendChild(styleTag1);
      const styleTag2 = document.createElement('style');
      styleTag2.textContent = cssMain2?.data;
      iframeDocument.head.appendChild(styleTag2);
      const styleTag3 = document.createElement('style');
      styleTag3.textContent = cssMain3?.data;
      iframeDocument.head.appendChild(styleTag3);
      const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']; // Здесь должен быть массив изображений, полученный с сервера
      images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = `http://127.0.0.1:5000/static/${image}`; // Путь к изображению
        const placementImg = node.querySelector(`.image-box__${index + 1}`);
        placementImg.appendChild(img);
      });
    }
  };

  handleGetMain(
    'slider',
    'swiper-bundle.min.js',
    'script.js',
    'slider-style.css',
    'style.css',
    'swiper-bundle.min.css',
  );

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption || 'Выберите вариант'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-element" onClick={() => selectOption('Вариант 1')}>
            Вариант 1
          </li>
          <li className="dropdown-element" onClick={() => selectOption('Вариант 2')}>
            Вариант 2
          </li>
          <li className="dropdown-element" onClick={() => selectOption('Вариант 3')}>
            Вариант 3
          </li>
        </ul>
      )}
    </div>
  );
}
