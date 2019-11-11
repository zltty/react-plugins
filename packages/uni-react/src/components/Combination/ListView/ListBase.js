import React ,{ PropTypes }from 'react';

import './index.css'

const ListBase = ({...props})=>{
    const {
        dataSource,
        renderRow,
        height=undefined,//滚动区域
        itemHeight,
        horizontal,
        onScroll,//在滚动的过程中，每帧最多调用一次此回调函数。
        refreshControl,//指定RefreshControl组件，用于为ListView提供下拉刷新功能。
        showsHorizontalScrollIndicator,//当此属性为true的时候，显示一个水平方向的滚动条。
        showsVerticalScrollIndicator,//当此属性为true的时候，显示一个垂直方向的滚动条。
        scrollTo,//滚动到指定的x, y偏移处。
        style,
        SeparatorComponent,
        renderFooter
    } = props;

    const viewStyle = {//可视区域样式
        // backgroundColor: style && style.backgroundColor,
        overflow: 'hidden',
        position: 'relative',
        overflowY: 'auto',
        width: 100+'%',
        // height: height + 2*itemHeight,
        height: height ,
        ...style
    }

    console.log('dataSource------------->',dataSource);
    console.log('height------------->',height);

    let __renderRow;
    const items = dataSource.map( (item,index) =>{
        __renderRow =  renderRow(item.data,index)
        const itemStyle = {
            position       : 'absolute',
            left           : 0,
            height         : itemHeight,
            top            : item.position,
        }
        return(
            <div key={'ListviewItem'+index} style={itemStyle}>
                {__renderRow}
                <SeparatorComponent />
            </div>
        )

    })

    // console.log('listbase----height------------>',height);
    // console.log('listbase----items------------>',items);
    // console.log('listbase----onScroll------------>',onScroll);
    return(
        <div 
            className='view-container' 
            style={viewStyle} 
            onScroll={onScroll}
        >
            {items}
        </div>
    )
}

export default ListBase;