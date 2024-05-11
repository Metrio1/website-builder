import './index.scss';
import MainBlockCreation from '../../../entities/main-block-creation/ui/index.jsx';
import {
  useLazyGetCssQuery,
  useLazyGetJavaScriptQuery,
  useLazyGetMainQuery,
} from '../../../entities/layout-pages/api/api.js';

export default function SettingUpMain({ setSidebarContent }) {
  const [getMain, getMainState] = useLazyGetMainQuery();
  const [getJavaScript, getJavaScriptState] = useLazyGetJavaScriptQuery();
  const [getCss, getCssState] = useLazyGetCssQuery();
  const handleClick = () => {
    setSidebarContent(null);
  };

  const handleGetMain = async (main, js1, js2) => {
    const { data: tagMain } = await getMain(main);
    const { data: jsMain1 } = await getJavaScript(js1);
    const { data: jsMain2 } = await getJavaScript(js2);
    console.log(tagMain);
    console.log(jsMain1);
    console.log(jsMain2);
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector('.main__container');

    placementTag.innerHTML = tagMain?.data;

    // Создаем тег script для первого JavaScript файла
    const scriptTag1 = document.createElement('script');
    scriptTag1.type = 'text/javascript';
    scriptTag1.textContent = jsMain1?.data;
    placementTag.appendChild(scriptTag1);

    // Создаем тег script для второго JavaScript файла
    const scriptTag2 = document.createElement('script');
    scriptTag2.type = 'text/javascript';
    scriptTag2.textContent = jsMain2?.data;
    placementTag.appendChild(scriptTag2);

    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']; // Здесь должен быть массив изображений, полученный с сервера
    images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = `http://127.0.0.1:5000/static/${image}`; // Путь к изображению
      const placementImg = node.querySelector(`.image-box__${index + 1}`);
      placementImg.appendChild(img);
    });
  };

  return (
    <div className="setting-up-main">
      <h2>Настройка основного контента</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
      <MainBlockCreation />
      <button onClick={() => handleGetMain('gallery')}>Get gallery</button>
      <button onClick={() => handleGetMain('slider', 'swiper-bundle.min.js', 'script.js')}>
        Get slider
      </button>
    </div>
  );
}
