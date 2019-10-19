import React,{ Component } from 'react';
import ScrollViewBase from './ScrollViewBase.js';

class ScrollView extends Component {
    state = {
        offSet:0
    }
    static displayName='ScrollView';
    static defaultProps = {
        scrollTo:()=>{},
        scrollToEnd:()=>{},
        horizontal:false,
        onScroll:()=>{},
        scrollWithoutAnimation:false,
        getScrollableNode:()=>{},
        scrollEnabled:true,
        onEndReached:()=>{},
        onEndReachedThreshold:0,
    }

    _onScroll = e => {
        const { onEndReached ,onEndReachedThreshold ,horizontal} = this.props;
        const { contentOffset, contentSize ,layoutMeasurement } = e.nativeEvent;
        //1.计算滑动位置 是否执行滚动事件

        let scrollPosition; 
        let offSet = horizontal ? contentOffset.x : contentOffset.y;
        let firstPageSize = horizontal ? layoutMeasurement.width : layoutMeasurement.height;
        let totalSize = horizontal ? contentSize.width : contentSize.height;
        
        //1.1 已滚动位置  
        scrollPosition = offSet + firstPageSize + onEndReachedThreshold;
        this.setState({offSet:offSet})
        // console.log('scrollPosition-----scrollPosition---->',scrollPosition);
        //1.2 _handleScrolleToEnd函数 
        if(scrollPosition === totalSize){
            onEndReached && onEndReached(e);
        }
    }

    render(){
        const { 
            children,
            refreshControl,
            ...otherProps
        } = this.props;

        const props = {
            onScroll:this._onScroll,
        }
        if(refreshControl){
            return React.cloneElement(
                refreshControl,
                { style: otherProps.style, offSet:this.state.offSet },
                <ScrollViewBase
                    {...otherProps}
                    {...props}
                >
                    {children}
                </ScrollViewBase>
            )
        }

        return(
            <ScrollViewBase
                {...otherProps}
                {...props}
            >
                {children}
            </ScrollViewBase>
        )
    }

}


module.exports = ScrollView;