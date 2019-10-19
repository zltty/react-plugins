import React from 'react';
import { View, StyleSheet  } from '../../src/index.js';

import AppText from './AppText.js';

const Title = ({children})=> {
    return(
        <AppText style={styles.title}>
            {children}
        </AppText>
    )
}
export const Description = ({children})=> {
    return (
        <AppText style={styles.description}>
            {children}
        </AppText>
    )
}

const UIExplorer = ({children , description , title})=> {
    return(
        <View style={styles.root}>
            <Title>{title}</Title>
            {description}
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
        padding:'1rem',
        flex:1
    },
    title: {
        fontSize: '2rem',
    },
    description:{
        color: '#666',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.25rem',
        marginTop: 'calc(0.5 * 1.3125rem)',
        marginBottom: 'calc(1.5 * 1.3125rem)'
    }
})

export default UIExplorer;