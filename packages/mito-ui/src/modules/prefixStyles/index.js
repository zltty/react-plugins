//给js样式类加css 规则
import createPrefixer from 'inline-style-prefixer/static/createPrefixer';
import staticData from './static';

const prefixAll = createPrefixer(staticData);

export default prefixAll;

export const prefixInlineStyles = style => {
  const prefixedStyles = prefixAll(style);

  Object.keys(prefixedStyles).forEach(prop => {
    const value = prefixedStyles[prop];
    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });

  return prefixedStyles;
};
