import './index.scss';
import { store } from '../../../../../app/appStore.js';
import { setTemplateId } from '../../../model/template.slice.js';
import { navigate } from 'jsdom/lib/jsdom/living/window/navigation.js';
import { useNavigate } from 'react-router-dom';
import { useLazyGetLayoutQuery } from '../../../../layout-pages/api/api.js';
import {Button} from "antd";

export default function TemplateLayoutCard({ image, description, layoutNumber }) {
  const [getLayout, getLayoutState] = useLazyGetLayoutQuery();
  
  const navigate = useNavigate();
  const handleSelection = () => {
    getLayout(layoutNumber);
    console.log(store.getState());
    store.dispatch(setTemplateId(layoutNumber));
    console.log(store.getState());
    navigate('/color-spectrum');
    // console.log(initialState);
  };

  return (
    <div className="basic__template">
      <img className="basic__layout" src={image} width="480" height="270" />
      <div className="basic__description">
        <h3>{description}</h3>
        <Button type="primary" className="basic__button" onClick={handleSelection}>
          Выбрать
        </Button>
      </div>
    </div>
  );
}
