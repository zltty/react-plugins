import React from 'react';


const Navigator = ({...props})=>{
    const {
        title,
        height=60,
        color='#fff',
        backgroundColor='#ff9900'
    } = props;

    const container = {
        display:'flex',        
        justifyContent:'center',
        alignItems:'center',
        height,
        backgroundColor,
    }

    const titleContainer = {
        color,
    }

    return(
        <div style={ container }>
            <div style={ titleContainer }>
                {title}
            </div>
        </div>
    )
}

module.exports = Navigator;