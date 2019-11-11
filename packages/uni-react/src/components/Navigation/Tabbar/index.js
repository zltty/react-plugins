import React from 'react';

const Tabbar = ({...props}) => {
    const { 
        children, 
        tabBarBackgroundColor ='#fff',
        component ,
        style
    } = props;
    const Com = component;

    const dashBoardContainer = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f3f3f0'
    }

    const tabBarContainer = {
        margin:0,
        padding:0,
        height:60,
        listStyleType:'none',
        display:'flex',
        flexDirection:'row',  
        backgroundColor: tabBarBackgroundColor 
    }

    return(
        <div style={dashBoardContainer} >
            <Com />
            <div style={tabBarContainer} >
                {children}
            </div>
        </div>
    );
};

module.exports = Tabbar;