import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoImage } from '../model/logoImage.slice.js';
import { useLazyGetTagQuery } from '../../layout-pages/api/api.js';

export default function SetLogoImage() {
  const uploadedImage = useSelector((state) => state.logoImageSlice.logoImage);
  const dispatch = useDispatch();

  const iframe = document.querySelector('iframe');
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const node = iframeDocument.querySelector('.sgcms-layout');

  const placementTag = node.querySelector('.logo-image');

  if (uploadedImage) {
    placementTag.innerHTML = `<img src="${uploadedImage}" alt="Uploaded" style="max-height: 40px;" />`;
  }

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
