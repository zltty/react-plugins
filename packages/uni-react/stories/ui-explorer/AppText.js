import React from 'react';
import { StyleSheet, Text } from '../../src/index.js';

const AppText = ({ style ,...rest})=> {
    return(
        <Text
            {...rest}
            style={[styles.baseText, style, rest.href && styles.link]}
        />
    )
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, ' +
          '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // emoji fonts
        lineHeight: '1.3125em'
    },
    link: {
        color: '#1B95E0',
        marginTop: 'calc(0.5 * 1.3125rem)',
        textDecorationLine: 'underline'
    }
})

export default AppText;