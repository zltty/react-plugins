
import flattenStyle from './flattenStyle';
import StyleRegistry from './registry.js';

const StyleSheet = {
    create(styles) {
        const result = {};
        // console.log('注册的样式-------------------->',styles);
        Object.keys(styles).forEach(key => {
            result[key] = StyleRegistry.register({ [key]: styles[key] });
        });
        return result;
    },
    flatten: flattenStyle,
    hairlineWidth: 1
}

module.exports = StyleSheet;