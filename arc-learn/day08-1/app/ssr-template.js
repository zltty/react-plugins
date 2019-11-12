import { Helmet } from 'react-helmet';

const template = ({ 
  root,
  script,
  initalState
}) => {
  const helmet = Helmet.renderStatic();
  // meta: helmet.meta.toString(), // 暂时不动态修改meta
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        ${helmet.title.toString()}
        ${helmet.link.toString()}
        ${helmet.style.toString()}
      </head>
      <body>
        <div id="root">${root}</div>
        ${script}
        <script>window.__INITIAL_STATE__ = ${initalState}</script>
      </body>
    </html>
  `
}
export default template;