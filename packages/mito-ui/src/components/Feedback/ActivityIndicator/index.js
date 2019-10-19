import React ,{ Component }from 'react';

import { View,StyleSheet } from '../../../index.js';

class ActivityIndicator extends Component {
    static displayName = 'ActivityIndicator';
    
    static defaultProps = {
        animating: true,
        color: '#1976D2',
        hideWhenStopped: true,
        size: 24
    };

    render() {
        const { animating, color, hideWhenStopped, size, style, ...other } = this.props;
        const svgLabel = (
            <svg height="100%" viewBox="0 0 32 32" width="100%">
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    strokeWidth="4"
                    style={{
                        stroke: color,
                        opacity: 0.2
                    }}
                />
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    strokeWidth="4"
                    style={{
                        stroke: color,
                        strokeDasharray: 80,
                        strokeDashoffset: 60
                    }}
                />
            </svg>    
        )
        const svgStyles = {
            height: size,
            width: size,
        }
        return(
            <View style={[
                svgStyles , 
                styles.animation,
                !animating && styles.animationPause,
                !animating && hideWhenStopped && styles.hideWhenStopped
            ]}>
                {svgLabel}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    animation: {
        animationDuration: '0.75s',
        animationName: 'rc-activityIndicator-animation',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
    },
    animationPause: {
        animationPlayState: 'paused'
    },
    hideWhenStopped: {
        visibility: 'hidden'
    },
})

module.exports = ActivityIndicator;