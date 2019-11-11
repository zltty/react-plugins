import React ,{ Component }from 'react';
import { StyleSheet } from '../../../index.js'; 
import createDOMElement from '../../../../modules/createDOMElement';

class Text extends Component {
    static displayName = 'Text';

    render() {
        const { 
            dir, 
            numberOfLines,
            style,
            onLayout,
            block,
            onPress,
            ...otherProps
        } = this.props;

        if(onPress){
            otherProps.onClick = onPress;
        }
        otherProps.dir = dir !== undefined ? dir : 'auto';
        otherProps.style = [
            styles.inital,
            style,
            numberOfLines === 1 && styles.singleLineStyle,
            onPress && styles.pressable
        ];

        const component = block ? 'span' : 'div';
        return createDOMElement(component , otherProps);
    }
}

const styles = StyleSheet.create({
    inital: {
        borderWidth:0,
        color:'inherit',
        display:'inline',
        font:'inherit',
        margin:0,
        padding:0,
        textDecorationLine:'none',
        wordBreak:'normal'
    },
    pressable:{
        cursor:'pointer',
    },
    singleLineStyle:{
        maxHeight:'100%',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap'
    }
})

module.exports = Text;