
import { StyleSheet,StyleRegistry } from '../../index.js';

const emptyObject = {};

const resetStyles = StyleSheet.create({
    button: {
      appearance: 'none',
      backgroundColor: 'transparent',
      color: 'inherit',
      font: 'inherit',
      textAlign: 'inherit'
    },
    link: {
      backgroundColor: 'transparent',
      color: 'inherit',
      textDecorationLine: 'none'
    },
    list: {
      listStyle: 'none'
    }
});

const defaultStyleResolver = style => {
    return StyleRegistry.resolve(style);
}

const createDOMProps = (component, props, styleResolver) => {
    if (!styleResolver) {
        styleResolver = defaultStyleResolver;
    }

    if (!props) {
        props = emptyObject;
    }
    const {
        testID,
        style: providedStyle,
        ...domProps
    } = props;

    const reactStyle = [
        component ==='a' && resetStyles.link,
        component ==='button' && resetStyles.button,
        component === 'ul' && resetStyles.list,
        providedStyle
    ];
    const { className, style } = styleResolver(reactStyle);

    if (className && className.constructor === String) {
        domProps.className = domProps.className ? `${domProps.className} ${className}` : className;
    }
    if (component === 'a' && domProps.target === '_blank') {
        domProps.rel = `${domProps.rel || ''} noopener noreferrer`;
    }
    if (testID && testID.constructor === String) {
        domProps['data-testid'] = testID;
    }
    if (style) {
        domProps.style = style;
    }
    return domProps;
}

export default createDOMProps;