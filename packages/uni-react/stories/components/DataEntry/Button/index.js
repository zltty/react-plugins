import React from 'react';

import { Button, StyleSheet } from '../../../../src';


const ButtonScreen = ()=> {
    
    const clickFunction = () => {console.log('测试点击事件----------->');};
    
    return(
        <Button 
            title='buttontest' 
            style={styles.button} 
            onPress={clickFunction} 
        />
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#17BF63',
        color:'#fff',
        width:120,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    }
})

module.exports = ButtonScreen;
