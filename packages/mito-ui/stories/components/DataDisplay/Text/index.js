import React from 'react';

import { Text ,StyleSheet } from '../../../../src';

import UIExplorer,{
    Description,
    DocItem
} from '../../../ui-explorer'


const TextScreen = ({...props}) => {
    // console.log('UIExplorer------->',UIExplorer);
    return(
        <UIExplorer title='Text'>
            <Description>文本组件</Description>
            <DocItem
                name='style'
                typeInfo='?style'
                example={{
                    code:'textTest: {color:"#faaf45"} <Text style={styles.textTest}>xxxx</Text>'
                }}
            />
            <Text style={styles.textTest}>
                http://www.baidu.com
            </Text>
        </UIExplorer>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        height:60,
    },
    title: {
        fontSize: '2rem'
    },
    textTest: {
        color:'#faaf45'
    }
})

module.exports = TextScreen;