import ReactPropRegistry from '../../modules/ReactPropRegistry';

function getStyle(style) {
    if(typeof style === 'number'){
        return ReactPropRegistry.getByID(style);
    }
    return style;
}

function flattenStyle(style) {
    //1.style空
    if(style == null || typeof style === 'boolean'){
        return undefined;
    }
    //2.style不是数组 通过style去查询缓存样式
    if(!Array.isArray(style)){
        return getStyle(style);
    }
    //3.style 降低样式数组维度
    const result = {};
    for(let i =0, styleLength=style.length; i<styleLength;i++) {
        const computedStyle = flattenStyle(style[i]);
        if(computedStyle) {
            for(const key in computedStyle) {
                const value = computedStyle[key];
                result[key] = value;
            }
        }
    }
    return result;
}

export default flattenStyle;