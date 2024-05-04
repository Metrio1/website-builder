import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoImage } from '../model/logoImage.slice.js';

export default function SetLogoImage() {
  const uploadedImage = useSelector((state) => state.logoImageSlice.logoImage);
  const dispatch = useDispatch();
  console.log(uploadedImage);
  const handleLogoImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(setLogoImage(reader.result));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleLogoImageChange} />
      {uploadedImage && (
        <div>
          <h2>Загруженное изображение</h2>
          <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};
