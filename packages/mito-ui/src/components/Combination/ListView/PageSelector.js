import React from 'react';
import { View, Text ,Button ,StyleSheet } from '../../../index.js';

const styles = StyleSheet.create({
    startBtn:{
        width:'auto',
        paddingLeft:10,
        paddingRight:10,
        marginRight:1
    },
    lastBtn:{
        paddingLeft:10,
        paddingRight:10,
        width:'auto',
        marginLeft:1
    },
    numBtn:{
        paddingLeft:10,
        paddingRight:10,
        width:'auto',
        marginLeft:1,
        marginRight:1,
    },
    nextBtn:{
        width:60
    }
})

const PageSelector = ({...props})=> {
    const { style } = props;

    const __onPress = e => {
        console.log('button----------------->',e.target.innerText);
    }

    return(
        <View style={style}>
            <Button title='首页' style={styles.startBtn} onPress={__onPress}/>
            <Button title='上一页' style={styles.nextBtn} onPress={__onPress}/>
            {
                [1,2,3,4,5].map((item,index)=>
                    <Button key={'pagination'+index} title={item} style={styles.numBtn} onPress={__onPress}/>
                )
            }
            <Button title='下一页' style={styles.nextBtn} onPress={__onPress}/>
            <Button title='尾页' style={styles.lastBtn} onPress={__onPress}/>
        </View>
    )
}

export default PageSelector;