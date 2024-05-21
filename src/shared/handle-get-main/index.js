export const handleGetMain = async (
  index,
  getMain,
  getJavaScript,
  getCss,
  main,
  js1,
  js2,
  css1,
  css2,
  css3,
) => {


  const { data: tagMain } = await getMain(main);

  console.log(getMain)

  const iframe = document.querySelector('iframe');
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const node = iframeDocument.querySelector('.sgcms-layout');

  const placementTag = node.querySelector(`.sgcms-layout__main__main-container-${index}`);

  placementTag.innerHTML = tagMain?.data;

  if (main === 'slider') {
    const { data: jsMain1 } = await getJavaScript(js1);
    const { data: jsMain2 } = await getJavaScript(js2);
    const { data: cssMain1 } = await getCss(css1);
    const { data: cssMain2 } = await getCss(css2);
    const { data: cssMain3 } = await getCss(css3);
    const scriptTag1 = document.createElement('script');
    scriptTag1.type = 'text/javascript';
    scriptTag1.textContent = jsMain1?.data;
    placementTag.appendChild(scriptTag1);
    const scriptTag2 = document.createElement('script');
    scriptTag2.type = 'text/javascript';
    scriptTag2.textContent = jsMain2?.data;
    placementTag.appendChild(scriptTag2);
    const styleTag1 = document.createElement('style');
    styleTag1.textContent = cssMain1?.data;
    iframeDocument.head.appendChild(styleTag1);
    const styleTag2 = document.createElement('style');
    styleTag2.textContent = cssMain2?.data;
    iframeDocument.head.appendChild(styleTag2);
    const styleTag3 = document.createElement('style');
    styleTag3.textContent = cssMain3?.data;
    iframeDocument.head.appendChild(styleTag3);
  }
};
