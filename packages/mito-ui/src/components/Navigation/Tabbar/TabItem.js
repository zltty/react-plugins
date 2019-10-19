import React from 'react';

/**
 * @author com.ppz.zl
 * @dateTime  2017年05月26日10:27:05
 * @desc tab
 * @version v1
 * @param {*} props 
 */
const TabItem = ({...props}) => {
    // Mitt.emit('foo', 'test');
    // console.log('Tabitem------------------>',props);
    const { 
        id,//tab id用于点击事件 返回值 *{string}
        title,//tab 说明 *{string}
        icon,//图标 *{string}
        tabStyles='tabItem',//容器样式 *{object}
        iconStyles='tabImg',//图标样式 *{object}
        titleStyles,//title样式 *{object}
        color,
        onClick,//点击事件 *{function}
    } = props;

    const styles = {
        tabItem: {
            display:'flex',
            flex:1,
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center', 
        },
        tabImg: {
            width: 24,
            height: 24,
            backgroundSize: '24 24',
        },
        tabActiveItem: {
            color: '#fb664c'
        },
        tabUnActiveItem: {
            color:' #d3d3d3'
        }
    }

    return(
        <div style={ styles[tabStyles] } onClick={ () => onClick(id) } >
            <img src={icon} style={ styles[iconStyles] } alt=""/>
            <div style={ styles[titleStyles] } >
                {title}
            </div>
        </div>
    );
};

module.exports = TabItem;