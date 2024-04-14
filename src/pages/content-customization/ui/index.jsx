import './index.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTemplate } from '../../../features/model/actions.js';
import { useSelector } from 'react-redux';

export default function ContentCustomization() {
  const dispatch = useDispatch();
  const websiteTemplate = useSelector((state) => state.templateSlice.websiteTemplate);

  useEffect(() => {
    dispatch(loadTemplate(websiteTemplate));
  }, [websiteTemplate]);

  return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: websiteTemplate }} />
      </div>
  );
}