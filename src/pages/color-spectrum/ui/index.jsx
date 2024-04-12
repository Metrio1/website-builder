import './index.scss';
import ColorsetCard from '../../../entities/template/ui/ColorsetCatd/ui/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function ColorSpectrum() {
  const navigate = useNavigate();

  const handleSelection = (layoutType) => {
    navigate('/basic');
    // console.log(initialState);
  };
  return (
    <div className="color-spectrum">
      <header>
        <div className="color-spectrum__header">
          <button className="color-spectrum__header__back-button" onClick={() => handleSelection()}>
            Вернуться назад
          </button>
        </div>
      </header>
      <main>
        <div>
          <h1 className="color-spectrum__title">Выбор гаммы</h1>
          <div className="color-spectrum__colorsets">
            <ColorsetCard
              image={'colorset1.svg'}
              description={'Холодная гамма с фиолетовыми оттенками'}
              colorsetNumber={'colorset1'}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
