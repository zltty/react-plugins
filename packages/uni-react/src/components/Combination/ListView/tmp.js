'use strict';

//rn > 0.26
import React, { Component } from 'react';
import ReactNative from 'react-native';
const{
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl,
    ScrollView
} = ReactNative;

import { ACCESS_TOKEN } from '../../constants/api.js';
import { request } from '../../utils/RequestUtil.js';

//RN组件
import RNLoading from './RNLoading.js';

export default class RNScrollView extends Component{
    constructor(props){
        super(props);
        this.state={
            bodyHeight:this.props.bodyHeight,
        }
    }
    componentWillMount(){
        this.cacheResult = {
            nextPage:1,
            items:[],
            newItems:[],
            total:0,
        };
        this.canLoadMore=true
        this.finalLoad = false;
    }

    //获取数据page
    _fetchData(page){
        console.log('请求数据----page------>',page);
        let that = this;
        //1.当数据量不足请求数据
            //1.1远端有数据,合并到数组中
            //1.2没有更多数据
        this.canLoadMore = false;

        setTimeout(() =>
            request('GET',that.props.api,{
                    accessToken: ACCESS_TOKEN,
                    page:page
                })
                .then(rs =>{
                    
                    let items = that.cacheResult.items.slice();

                    if(page !== 0 ){
                        items = items.concat(rs.data);
                        that.cacheResult.nextPage += 1;
                    } else {
                        items = rs.data.concat(items);
                    }

                    that.cacheResult.items = items;
                    that.cacheResult.total = rs.total;

                    that.canLoadMore = true;

                    page !== 0 
                    ?   that.setState({
                            isLoadingTail:false,
                        })
                    :   that.setState({
                            isRrefreshing:false,
                        })
                    
                })
                .catch((error) =>{
                    console.log('_fetchData 异常------------->',error);
                    page !== 0 
                    ?   that.setState({
                            isLoadingTail:false,
                        })
                    :   that.setState({
                            isRrefreshing:false,
                        })
                })
        ,20)

            
    }
    _updateRenderModel(contentOffset){
        let that = this;
        let listItemHeight = this.props.itemHeight;
        //计算 第一个可见行
        let firstVisibleItem = Math.max(0, Math.floor(contentOffset.y / listItemHeight));
        //渲染模型 可视区域量
        let renderModelSize = this.props.itemNum;
        //y轴位置 默认缓存区域1*2 即头部尾部各一个item项
        let nextPosition = (firstVisibleItem ) * listItemHeight;
        //通过计算的位置取数据
        let dataItems = this.cacheResult.items.slice(firstVisibleItem, firstVisibleItem + renderModelSize);
        //渲染新数据模型
        let newRenderDataSource = dataItems.map((rowItem,index) =>{
            return {
                data:rowItem,
                position: nextPosition + index * listItemHeight
            }
        });
        this.cacheResult.newItems = newRenderDataSource;

        //如果滑动的距离与总展示数据相等
        if( (contentOffset.y + this.props.bodyHeight) - this.cacheResult.total*listItemHeight > 0){
            
        }else{
            //如果滑动的距离超过展示数据 再次请求数据
            if( ((contentOffset.y + this.props.bodyHeight) - listItemHeight*this.cacheResult.items.length >0) ){
                // console.log('this.canLoadMore',this.canLoadMore);
                if(this.canLoadMore){
                    // console.log('执行了 拉取数据--------------------------------->');
                    this._fetchData(this.cacheResult.nextPage);
                }
                return false;
            } else{
                // console.log('---------------------更新高度--------------------->');
                this.setState({
                    bodyHeight:nextPosition + renderModelSize * listItemHeight
                })
            }
        }
    }
    _onScroll(e) {
        this._updateRenderModel(e.nativeEvent.contentOffset);
    }
    render(){
        // console.log('数据----2----------》',this.cacheResult.items);
        let ITEM_SIZE =this.props.itemHeight;
        let _renderItem;
        let items = this.cacheResult.newItems.map(renderItem => {
            _renderItem = this.props.renderRow(renderItem);
            const itemStyle = {
                position       : 'absolute',
                height         : ITEM_SIZE,
                left           : 0,
                top            : renderItem.position,
            };
            return(
                <View key={renderItem.data._id} style={itemStyle}>
                    {_renderItem}
                </View>
            )
        });
        return(
            <ScrollView 
                ref='scrollview' 
                scrollEventThrottle={1} 
                onScroll = {(e) =>this._onScroll(e)}>
                <View style ={{height:this.state.bodyHeight,width:width}}>
                    {items}
                </View>
            </ScrollView>
        )
    }
    componentDidMount(){
        this._fetchData(1);
    }
}
const styles = StyleSheet.create({
    
})