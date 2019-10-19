const emptyObject = {};

import normalizeValue from './normalizeValue';

const createReactDOMStyle = style =>{
    if(style){
        const inlineStyle = {};
        //1.合并样式
        const keys = Object.keys(style);
        
        const styles = keys.reduce((a,b)=>{
            if(typeof style[b] !=='object'){
                inlineStyle[b] = style[b];
                return Object.assign(a, {});
            }
            return Object.assign(a, style[b]);
        },{});
        const __styles = {
            ...styles,
            ...inlineStyle
        }
        return { [keys[0]]: __styles };
    }
    return emptyObject;
}

export default createReactDOMStyle;