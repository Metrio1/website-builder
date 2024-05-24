import './index.scss';
import ColorsetCard from '../../../entities/template/ui/ColorsetCatd/ui/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetSelectedTags } from '../../../entities/tag/model/tag.slice.js';
import { clearLogoImage } from '../../../entities/set-logo-image/model/logoImage.slice.js';
import {clearAllSelectedOptions} from "../../../widgets/setting-up-main/model/selected-option.slice.js";
import {clearBlocks} from "../../../widgets/setting-up-main/model/number-of-blocks.slice.js";
import {Button} from "antd";

export default function ColorSpectrum() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSelectedTags());
    dispatch(clearLogoImage());
    dispatch(clearAllSelectedOptions());
    dispatch(clearBlocks());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/basic');
    // console.log(initialState);
  };
  return (
    <div className="color-spectrum">
      <header>
        <div className="color-spectrum__header">
          <Button className="color-spectrum__header__back-button" onClick={() => handleSelection()}>
            Вернуться назад
          </Button>
        </div>
      </header>
      <main>
        <div>
          <h1 className="color-spectrum__title">Выбор гаммы</h1>
          <div className="color-spectrum__colorsets">
            <ColorsetCard
              image={'colorset1.svg'}
              description={'Гамма с синими оттенками'}
              colorsetNumber={'colorset1'}
            />
            <ColorsetCard
              image={'colorset2.svg'}
              description={'Гамма с фиолетовыми оттенками'}
              colorsetNumber={'colorset2'}
            />
            <ColorsetCard
              image={'colorset3.svg'}
              description={'Гамма с зелёными оттенками'}
              colorsetNumber={'colorset3'}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
