import './index.scss';
import MainBlockCreation from '../../../entities/main-block-creation/ui/index.jsx';
import { useLazyGetMainQuery } from '../../../entities/layout-pages/api/api.js';

export default function SettingUpMain({ setSidebarContent }) {
  const [getMain, getMainState] = useLazyGetMainQuery();
  const handleClick = () => {
    setSidebarContent(null);
  };

  const handleGetMain = async (main) => {
    console.log(getMain);
    const { data: tagMain } = await getMain(main);
    console.log(tagMain);
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const node = iframeDocument.querySelector('.sgcms-layout');

    const placementTag = node.querySelector('.main__container');

    placementTag.innerHTML = tagMain?.data;
  };

  return (
    <div className="setting-up-main">
      <h2>Настройка основного контента</h2>
      <button onClick={() => handleClick()}>Вернуться</button>
      <MainBlockCreation />
      <button onClick={() => handleGetMain('gallery')}>Get main</button>
    </div>
  );
}
