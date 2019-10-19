import React ,{ Component }from 'react';
import debounce from 'debounce';

import { View, StyleSheet } from '../../../../src';

const normalizeScrollEvent = e => ({
  nativeEvent: {
    contentOffset: {
      get x() {
        return e.target.scrollLeft;
      },
      get y() {
        return e.target.scrollTop;
      }
    },
    contentSize: {
      get height() {
        return e.target.scrollHeight;
      },
      get width() {
        return e.target.scrollWidth;
      }
    },
    layoutMeasurement: {
      get height() {
        return e.target.offsetHeight;
      },
      get width() {
        return e.target.offsetWidth;
      }
    }
  },
  timeStamp: Date.now()
});

const _shouldEmitScrollEvent = (lastTick, eventThrottle)=> {
    const timeSinceLastTick = Date.now() - lastTick;
    return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}

const ScrollViewBase = ({...props})=>{
    let isScrolling = false; 
    let scrollLastTick = 0;
    
    const { 
        children,
        scrollEnabled,//是否可以滚动
        style,//样式
        onScroll,
        scrollEventThrottle,
        //event
        scrollTo,
        scrollToEnd
    } = props;

    const _handleScrollTick = e => {
        scrollLastTick = Date.now();
        if(onScroll){
            onScroll(normalizeScrollEvent(e));
        }
    }
    const _handleScrollStart = e=> {
        isScrolling = true;
        scrollLastTick = Date.now();
    }
    const _handleScrollEnd = e=>{
        isScrolling = false;
        if(onScroll){
            onScroll(normalizeScrollEvent(e));
        }
    }
    const _debouncedOnScrollEnd = debounce(_handleScrollEnd, 100);
    const _handleScroll = e=> {
        e.persist();
        e.stopPropagation();
        _debouncedOnScrollEnd(e);
        
        if(isScrolling){
            if (_shouldEmitScrollEvent(scrollLastTick, scrollEventThrottle)) {
                _handleScrollTick(e);
            }
        } else {
            _handleScrollStart(e);
        }

    }
    
    return(
        <View 
            style={[styles.container,style,!scrollEnabled && styles.scrollDisabled]}
            onScroll={_handleScroll}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    scrollDisabled: {
        touchAction: 'none'
    }
})

module.exports = ScrollViewBase;