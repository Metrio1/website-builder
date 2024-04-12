import './index.scss';
import { store } from '../../../../../app/appStore.js';
import { setColorsetId } from '../../../model/template.slice.js';
import { useNavigate } from 'react-router-dom';

export default function ColorsetCard({ image, description, colorsetNumber }) {
  const navigate = useNavigate();
  const handleSelection = () => {
    console.log(store.getState());
    store.dispatch(setColorsetId(colorsetNumber));
    console.log(store.getState());
    navigate('/content-customization');
    // console.log(initialState);
  };

  return (
    <div className="basic__template">
      <img className="basic__layout" src={image} width="480" height="270" />
      <div className="basic__description">
        <h3>{description}</h3>
        <button className="basic__button" onClick={handleSelection}>
          Выбрать
        </button>
      </div>
    </div>
  );
}
