import React ,{ Component }from 'react';

import { View, StyleSheet } from '../../../../src';

class TouchableOpacity extends Component {
    static displayName='TouchableOpacity';
    state = {
        reload: false,
        activeOpacity: this.props.activeOpacity || 0.2,
        focusedOpacity: this.props.focusedOpacity || 1,
        opacity: 1,
    }
    _onPressStart = ()=>{
        // console.log('点击----onPressStart--------->');
        this._setOpacityTo(this.state.activeOpacity);
    }
    _onPressEnd = e=>{
        e.persist();
        e.stopPropagation();
        this._setOpacityTo(this.state.focusedOpacity);

        this.props.onPress && this.props.onPress(e);
    }

    _setOpacityTo = (opacity)=> {
        this.setState({opacity});
    }

    render() {
        const {
            onPress,
            disabled=false,
            ...other,
        } = this.props;

        const btnOpacityStyle = {
            opacity: this.state.opacity,
        }
        
        return(
            <View 
                onMouseDown={this._onPressStart}
                onMouseUp={this._onPressEnd}
                onTouchStart={this._onPressStart}
                onTouchEnd={this._onPressEnd}
                style={[ 
                    styles.root, 
                    disabled && styles.actionable, 
                    this.props.style,
                    btnOpacityStyle,
                    disabled && styles.buttonDisabled, 
                ]}
            >
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        transitionProperty: 'opacity',
        transitionDuration: '0.15s',
        userSelect: 'none'//用户不能选择文字
    },
    actionable: {
        cursor: 'pointer',
        touchAction: 'manipulate'
    },
    buttonDisabled: {
        backgroundColor: '#dfdfdf'
    },
});

module.exports = TouchableOpacity;