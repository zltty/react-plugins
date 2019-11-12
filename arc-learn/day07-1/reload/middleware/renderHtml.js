import AssetManifest from '../../../dist/asset-manifest.json';

/**
 * 生成模板
 * @param {*} template
 */
const renderHtml = (template) => {
  const csspath = `/${AssetManifest['main.css']}`;
  const jspath = `/${AssetManifest['main.js']}`;
  const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charSet='utf-8'>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'>
        <meta httpEquiv='Cache-Control' content='no-siteapp'>
        <meta name='renderer' content='webkit'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href=${csspath} rel="stylesheet">
      </head>
  
      <body>
        <div id="root">${template}</div>
        <script type="text/javascript" src=${jspath}></script>
      </body>
  
      </html>
    `;
  return html;
};

/**
 * 生成内容
 */
const renderContent = () => {
  const csspath = `${AssetManifest['main.css']}`;
  const jspath = `${AssetManifest['main.js']}`;

  const headerContent = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charSet='utf-8'>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'>
        <meta httpEquiv='Cache-Control' content='no-siteapp'>
        <meta name='renderer' content='webkit'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href=${csspath} rel="stylesheet">
      </head>

      <body>
  `;
  const wrapperContent = '<div id="root">';
  const footContent = `</div>
    <script type="text/javascript" src=${jspath}></script>
    </body>
    </html>
  `;
  return {
    headerContent,
    wrapperContent,
    footContent
  };
};

module.exports = {
  renderHtml,
  renderContent
};
