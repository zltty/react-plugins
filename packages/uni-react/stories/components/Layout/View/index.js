import React from 'react';

import { View ,StyleSheet } from '../../../../src';

import UIExplorer,{
    Description,
    DocItem
} from '../../../ui-explorer'

const ViewScreen = ({...props}) => {
    const test2 = {
        fontSize:25,
        backgroundColor:'black',
    }
    const test3 = {
        fontSize:25,
        backgroundColor:'red',
    }
    return(
        <UIExplorer title='View'>
            <Description>
                ui block
            </Description>

            <DocItem 
                name='style'
                typeInfo="?style"
                example={{ 
                    code:'<View style={[ styles.container,styles.test,test2 ]}>viewtest</View>'
                }}
            />
            <View style={[ styles.container,styles.test,test2 ]}>
                viewtest
            </View>
        </UIExplorer>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:60,
    },
    test:{
        color:'#faaf45'
    }
})

module.exports = ViewScreen;