import React from 'react';

import { Image } from '../../../../src';

const ImageScreen = ()=> {
    // const testt = require.context('./adPage.jpg',true,/\.(jpe?g|png|svg|gif)$/);    
    // const testt = require('./adPage.jpg');    
    // const testt = require('./logo.svg');    
    const testt = (
        <svg height="500" viewBox="0 0 32 32" width="300">
            <circle
                 cx="16"
                 cy="16"
                 fill="none"
                 r="14"
                 strokeWidth="4"
                 style={{
                     stroke: 'green',
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
                    stroke: 'green',
                    strokeDasharray: 80,
                    strokeDashoffset: 60
                }}
            />
        </svg>    
    )
    return(
        <Image 
            source={testt}
        />
    )
}

module.exports = ImageScreen;