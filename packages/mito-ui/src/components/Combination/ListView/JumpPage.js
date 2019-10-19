import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from '../../../index.js';

const styles = StyleSheet.create({
    textInput:{
        width:40,
        marginLeft:5,
        marginRight:5,
    },
    title:{
        fontSize:14,
    },
    page:{
        fontSize:14,
        marginRight:10
    },
    btn:{
        width:50,
        borderRadius:4,
        backgroundColor:'#faaf45'
    }
})

const JumpPage = ({...props})=> {
    const {
        marginLeft,
        marginRight
    } = props;

    const container = {
        flexDirection:'row',
        marginLeft,
        marginRight,
        alignItems:'center',
    }
    return(
        <View style={container}>
            <Text block={true} style={styles.title}>跳转</Text>
            <TextInput style={styles.textInput} />
            <Text block={true} style={styles.page}>页</Text>
            <Button title='提交' style={styles.btn}/>
        </View>
    )
}

export default JumpPage;