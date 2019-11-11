import React from 'react';
import AppText from './AppText.js';
import { StyleSheet, Text, View } from '../../src/index.js';
 
const DocItem = ({ description, example = {}, name, typeInfo, label })=> {
    return(
        <View style={styles.example}>
            {
                name && 
                <AppText style={styles.title}>
                    <PropText label={label} name={name} typeInfo={typeInfo} />
                </AppText>
            }
            {
                example.code &&
                <View style={styles.renderBox}>
                    <AppText style={styles.exampleText}>Example</AppText>
                    <Text style={styles.code}>
                        {example.code}
                    </Text>
                </View>
            }
        </View>
    )
}

const PropText = ({label ,name , typeInfo})=> {
    return(
        <AppText>
            {
                label &&
                <Text style={[styles.label, label === 'web' && styles.webLabel]}>
                    {label}
                </Text>
            }
            <Text style={styles.propName}>
                {name}
            </Text>
            {
                typeInfo &&
                <Text>
                    {': '}
                    <Text style={styles.code}>
                    {typeInfo}
                    </Text>
                </Text>
            }
        </AppText>
    )
}

const styles = StyleSheet.create({
    exampleText: {
        color: '#AAB8C2',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        marginBottom: 'calc(0.5 * 1.3125rem)',
        textTransform: 'uppercase'
    },
    renderBox: {
        borderColor: '#E6ECF0',
        borderWidth: 1,
        padding: '1.3125rem',
        marginTop: '1.3125rem'
    },    
    title: {
        fontSize: '1rem'
    },
    code: {
        fontFamily: 'monospace, monospace',
        lineHeight: '1.3125em'
    },   
    example: {
        marginBottom: 'calc(1.5 * 1.3125rem)'
    },
    label:{
        backgroundColor: '#ddd',
        color: '#555',
        borderRadius: '1rem',
        padding: '0.125rem 0.5rem',
        marginRight: '0.5rem'
    },
    webLabel:{
        backgroundColor: '#bdebff',
        color: '#025268'
    }
})

export default DocItem;