import React from 'react';

import createDOMProps from '../createDOMProps';

const eventHandlerNames = {
    onClick: true,
    onClickCapture: true,
    onMoveShouldSetResponder: true,
    onMoveShouldSetResponderCapture: true,
    onResponderGrant: true,
    onResponderMove: true,
    onResponderReject: true,
    onResponderRelease: true,
    onResponderTerminate: true,
    onResponderTerminationRequest: true,
    onStartShouldSetResponder: true,
    onStartShouldSetResponderCapture: true,
    onTouchCancel: true,
    onTouchCancelCapture: true,
    onTouchEnd: true,
    onTouchEndCapture: true,
    onTouchMove: true,
    onTouchMoveCapture: true,
    onTouchStart: true,
    onTouchStartCapture: true
};

const createDOMElement = (component, props) => {
    const Component = component;

    // console.log('view---props------------->',props);
    const domProps = createDOMProps(Component, props);
    
    const comProps = {};
    Object.keys(domProps).forEach( item => {
        //清除事件
        if(global.deviceInfo.OS !=='web' && item.indexOf('onMouse')>-1){
            return;
        }
        if(global.deviceInfo.OS ==='web' && item.indexOf('onTouch')>-1){
            return;
        }
        comProps[item] = domProps[item];
    });

    return <Component {...comProps} />;
};

export default createDOMElement;