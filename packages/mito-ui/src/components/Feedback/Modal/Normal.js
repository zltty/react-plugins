import React from 'react';
import { View ,StyleSheet } from '../../../index.js';

const Normal = ({ children, ...props }) => {
    const { in:inProp } = props;

    let transitionStyles={};
    if(inProp === true){
        transitionStyles = { opacity: 1, zIndex:undefined, display:'block' };
    } else {
        transitionStyles = { opacity: 0, zIndex:-999, display:'none' };
    }

    return (
        <View style={[styles.container, transitionStyles]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black',
    }
})


export default Normal;