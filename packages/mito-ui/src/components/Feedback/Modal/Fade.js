import React from 'react';
import Transition from 'react-transition-group/Transition';
import { View ,StyleSheet } from '../../../index.js';

const Fade = ({ children, duration =500, enter=duration, exit=duration,...props }) => {
    const { in:inProp } = props;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
    }
    //中间态
    const midStatus = { opacity: 0, zIndex:undefined, display:'block'};
    const transitionStyles={
        exited:{ opacity: 0, zIndex:-999, display:'none'},
        //添加中间态
        entered:{ opacity: 1, zIndex:undefined, display:'block'}
    };
    //中间态
    if(inProp ===true) {
        transitionStyles['entering'] = midStatus;
    } else {
        transitionStyles['exiting'] = midStatus;
    }

    return (
        <Transition
            in={inProp}
            timeout={{
                enter: enter,
                exit: exit,
            }}
        >
        {
            (state)=>{
                return (
                    <View style={[styles.container,defaultStyle, transitionStyles[state] ]}>
                        {children}
                    </View>
                )
            }
        }
        </Transition>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black',
    }
})


export default Fade;