import ObjectHash from 'object-hash';
import hash from '../../modules/hash';
import generateCss from './generateCss';
import resetCSS from './resetCSS.js';

const emptyObject = {};
const PRE_STYLE_ELEMENT_ID = 'prereact-components-stylesheet';
const STYLE_ELEMENT_ID = 'react-components-stylesheet';

const createCssRule = (className, prop, key) => {
    //1.生成css
    const css = generateCss(prop[key]);
    const selector = `.${className}`;
    const result = `${selector}{${css}}`;

    return result
};

//不存在样式类时 创建
const createClassName = (key, value) => {
    if(key){
        const hashed = hash(key + ObjectHash(value));
        return process.env.NODE_ENV !== 'production' ? `rc-${key}-${hashed}` : `rc-${hashed}`;
    }
};


class StyleManager {
    cache = null;
    mainSheet = null;

    constructor(){
        this.cache = {
            byClassName:{},
            byProp:{},
        };
        //0.初始化
        document.head.insertAdjacentHTML('afterbegin',this.getStyleSheetHtml());
        this.preMainSheet = document.getElementById(PRE_STYLE_ELEMENT_ID);
        this.mainSheet = document.getElementById(STYLE_ELEMENT_ID);
    }
    getClassName(prop) {
        return this.cache.byProp[prop];
    }
    getStyleSheetHtml(){
        const stylesheets = [
            { id: PRE_STYLE_ELEMENT_ID,textContent:`${resetCSS}`},
            { id: STYLE_ELEMENT_ID,textContent:'' }
        ];
        return stylesheets
            .map(sheet=>{
                return `<style id="${sheet.id}">\n${sheet.textContent}</style>`
            })
            .join('\n')
    };

    //1.声明类
    setDeclaration(prop, value, type) {
        const key = Object.keys(prop)[0];
        let className = this.getClassName(key);
        
        // console.log('==========声明样式缓存====1===>',this.cache);
        // console.log('==========声明样式类型====2=key==>',key);
        // console.log('==========声明样式类型====2=value==>',value);
        // console.log('==========声明样式类型====2=type==>',type);
        if(!className){
            //1.1.1 新建样式类
            className = createClassName(key, value);
            //1.1.2 通过id获取样式dom
            // console.log('==========声明样式缓存=className===3===>',className);
            //1.1.3不存在该样式
            if(!this.cache.byProp[className]){
                // console.log('==========声明样式缓存不存在====4=========>');
                //1.1.4 添加样式类到缓存中
                this._addToCache(className, prop, key);
                //1.1.5 创建新css规则
                const rule = createCssRule(className, prop ,key);
                // console.log('==========声明样式缓存不存在====6=========>',rule);
                this.cache.byProp[className] = true;
                const sheet = type === 'registry' ? this.preMainSheet.sheet : this.mainSheet.sheet;

                sheet.insertRule(rule, sheet.cssRules.length);
            } 
        }
        // console.log('==========setDeclaration-this.cache--222222222======>',this.cache);
        // //1.2返回样式类
        return className;
    }

    _addToCache(className, prop, key) {
        // console.log('==========声明样式缓存添加的样式====5=========>',prop);
        this.cache.byClassName[className] = { prop, key };
    }
}


export default StyleManager;