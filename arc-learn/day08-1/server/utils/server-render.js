import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server'

import tempalte from '../../app/ssr-template';
import pathconfig from '../../config/path.config';
/**
 * 生成模板
 * @param {*} reactEle webpack 打包的bundle
 */
const renderString = (reactEle, initalState={}) => {
  const extractor = new ChunkExtractor({
    statsFile: pathconfig.loadable,
  })
  console.log('initalState.home------->',initalState);
  const jsx = extractor.collectChunks(reactEle)
  const root = renderToString(jsx);
  const html = tempalte({
    initalState: JSON.stringify(initalState),
    root,
    script: extractor.getScriptTags()
  })
  return html;
};

/**
 * 生成内容
 */
const renderStream = (jspath) => {

  const headerContent = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charSet='utf-8'>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'>
        <meta httpEquiv='Cache-Control' content='no-siteapp'>
        <meta name='renderer' content='webkit'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
      </head>

      <body>
  `;
  const wrapperContent = '<div id="root">';
  const footContent = `
    </div>
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

export {
  renderString,
  renderStream
};
