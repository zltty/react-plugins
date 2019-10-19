import React ,{ Component } from 'react';

const WhiteSpace = ({...props})=> {
    const {
        height=1,
        backgroundColor='#fff',
    } = props;

    const container = {
        height,
        backgroundColor,
    }

    return (
        <div style={container}></div>
    )
}

module.exports = WhiteSpace;