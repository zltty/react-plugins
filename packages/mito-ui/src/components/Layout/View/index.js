import React , { Component } from 'react';
import { bool } from 'prop-types';

import createDOMElement from '../../../modules/createDOMElement';

import StyleSheet from '../../../apis/StyleSheet';

class View extends Component {
    static displayName = 'View';

    render(){
        const {
            style,
            onLayout,
            removeClippedSubviews,
            ...otherProps
        } = this.props;

        otherProps.style = [styles.initial, style];
        // console.log('otherProps.style-------------->',otherProps.style);

        const component = 'div';
        
        return createDOMElement(component, otherProps);
    }
}
const styles = StyleSheet.create({
    initial: {
        alignItems: 'stretch',
        borderWidth: 0,
        borderStyle: 'solid',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        position: 'relative',
        // fix flexbox bugs
        minHeight: 0,
        minWidth: 0,
        flexShrink: 0
    },
})

module.exports = View;