import React ,{ Component } from 'react';

import { StyleSheet } from '../../../../src';
import createDOMElement from '../../../modules/createDOMElement';
import findNodeHandle from '../../../modules/findNodeHandle';


const normalizeEventHandler = handler => e=> {
    if(handler){
        e.nativeEvent.text = e.target.value;
        return handler(e);
    }
}


class TextInput extends Component {
    static displayName = 'TextInput';

    static defaultProps = {
        multiline:false,
        onFocus:()=>{},
        onBlur:()=>{},
        onChange:()=>{},
        onChangeText:()=>{},
        onKeyDown:()=>{},
        onKeyPress:()=>{},
        pattern: undefined
    }

    _resolveEvent = {
        multiline: true,
    }

    render(){
        const {
            multiline,
        } = this.props;

        const component = multiline === true ? 'textarea' :'input';
        const resolveProps = this._resolveProps(component ,this.props);

        return createDOMElement(component, resolveProps);
    }

    //1.处理input事件
    _resolveProps = (component ,props)=> {
        const __props = {
            onFocus: ()=>{},
            onBlur: ()=>{},
            onChange: normalizeEventHandler(this._handleChange),
            onKeyDown: ()=>{},
            onKeyPress: ()=>{},
            pattern: props.pattern,
            style:props.style
        };

        return __props;
    }
    //2.onchange
    _handleChange = e => {
        const { onChange, onChangeText } = this.props;
        const { text } = e.nativeEvent;
        if (onChange) {
            onChange(e)
        }
        if(onChangeText){
            onChangeText(text);
        }
    }
    //3.onBlur
    _handleBlur = e =>{ 
        // console.log('eeeeeeeeee------------------->',e);
    }


}

module.exports = TextInput;