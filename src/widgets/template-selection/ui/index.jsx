import './index.scss';
import { store } from '../../../app/appStore.js';
import { setTemplateId } from '../../../entities/template/model/template.slice.js';

export default function TemplateSelection({ image, description, layoutNumber }) {
  const handleSelection = (layoutType) => {
    console.log(store.getState());
    store.dispatch(setTemplateId(layoutType));
    console.log(store.getState());
    // console.log(initialState);
  };

  return (
    <div className="basic__template">
      <img className="basic__layout" src={image} width="480" height="270" />
      <div className="basic__description">
        <h3>{description}</h3>
        <button className="basic__button" onClick={() => handleSelection({ layoutNumber })}>
          Выбрать
        </button>
      </div>
    </div>
  );
}
