import './index.scss';
import fs from 'fs';
import templateSlice from '../../../entities/template/model/template.slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function ContentCustomization() {
  const templateSlice = useSelector((state) => state.templateSlice);
  const dispatch = useDispatch();
  const htmlPageRef = useRef(null);
  const loadHtmlPage = (templateSlice) => {
    const htmlPath = `./layouts/${templateSlice}/${templateSlice}.html`;
    return fs.readFileSync(htmlPath, 'utf-8');
  };

  useEffect(() => {
    const htmlPage = loadHtmlPage(templateSlice);
    dispatch({ type: 'SET_HTML_PAGE', payload: htmlPage });
  }, [templateSlice]);

  return (
      <div>
          <p>Текущий templateId: {templateSlice.websiteTemplate.layoutNumber}</p>
          <div ref={htmlPageRef}/>
      </div>
  );
}
