// import React ,{ Component } from 'react';

// import ListBase from './ListBase.js';
// import { View } from '../../index.js';

// const normalizeScrollEvent = e => ({
//     nativeEvent: {
//         contentOffset: {
//             get x() {
//                 return e.nativeEvent.target.scrollLeft;
//             },
//             get y() {
//                 return e.nativeEvent.target.scrollTop;
//             }
//         },
//         contentSize: {
//             get height() {
//                 return e.nativeEvent.target.scrollHeight;
//             },
//             get width() {
//                 return e.nativeEvent.target.scrollWidth;
//             }
//         },
//         layoutMeasurement: {
//             get height() {
//                 return e.nativeEvent.target.offsetHeight;
//             },
//             get width() {
//                 return e.nativeEvent.target.offsetWidth;
//             }
//         }
//     },
//     timeStamp: Date.now()
// });



// class ListView extends Component {
//     state = {
//         loading:true,
//         isRefreshing :false,//是否在下拉刷新
//         isLoadingTail :false,//是否在上拉刷新
//         reload:false,
//         height: this.props.viewHeight,
//         noData:false
//     }

//     static defaultProps = {
//         separatorComponentHeight:0,
//     }

//     componentWillMount(){
//         const { 
//             itemHeight , 
//             separatorComponentHeight, 
//             viewHeight,//可视区域高度
//         } = this.props;

//         this.UNIT_ITEMS_HEIGHT = itemHeight + separatorComponentHeight;//最小单元高度
//         this.RENDER_NUM = Math.ceil(viewHeight/this.UNIT_ITEMS_HEIGHT);//渲染个数

//         console.log('UNIT_ITEMS_HEIGHT----------->',this.UNIT_ITEMS_HEIGHT );
//         console.log('RENDER_NUM----------->',this.RENDER_NUM );

//         this.cacheResult = {
//             nextPage:0,
//             dataList:[],
//             dataSource:[],
//             type:null,
//         }
//         //减少网络请求
//         this.CAN_GET_DATA=true;//可以发送请求 默认可以请求
//         this.LAST_DATA_LENTH=-1;//上一次请求返回数据长度 默认-1
//     }

//     componentDidMount(){
//         this._fetchData(0);
//     }

//     componentWillReceiveProps(nextProps){
//         console.log('componentWillReceiveProps-------->',nextProps);
//         // if(nextProps.params){
//         //     this.params = nextProps.params;
//         // }
//         // this.cacheResult.nextPage=0;
//         // this.cacheResult.dataList=[];
//         // this.CAN_GET_DATA = true;
//         // this._onFetchData(0);
        
//     }
//     componentWillUnmount(){
//         this.timer && clearTimeout(this.timer);   
//     }
//     render() {
//         const {
//             horizontal=false,//当此属性为true的时候，所有的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为false。
//             SeparatorComponent,//渲染的组件
//             style,
//             renderItem,
//             viewHeight,//可视区域高度
//             renderFooter,
//             renderNoData
//         } = this.props;

//         // console.log('this.cacheResult.dataSource.length--------->',this.cacheResult.dataSource.length);
//         if(this.cacheResult.dataSource.length===0){
//             const dataSource = this.cacheResult.dataList.slice(0, this.RENDER_NUM+2 );
//             const __dataSource = dataSource.map((item, index)=>{
//                 return {
//                     data: item,
//                     position: index * this.UNIT_ITEMS_HEIGHT
//                 }
//             });
//             this.cacheResult.dataSource = __dataSource;
//         }
//         const container = {
//             height:viewHeight,
//             width: 100+'%',
//             overflow:'auto',
//             position: 'relative',
            
//         }

//         // console.log('this.cacheResult--------->',this.cacheResult);

//         const Footer = renderFooter && this._onRenderFooter();
//         const NoData = renderNoData && this._onRenderNoData();

//         return(
//             <div style={container} onScroll={this._onScroll}>
//                 <ListBase 
//                     style={style}
//                     dataSource={this.cacheResult.dataSource}
//                     renderRow={this._onRenderRow}
//                     horizontal={horizontal}
//                     itemHeight={this.UNIT_ITEMS_HEIGHT}
//                     SeparatorComponent={SeparatorComponent}
//                     height={this.state.height}
//                     renderFooter={renderFooter ? true:false}
//                 />
//                 {
//                     !this.state.noData
//                     ?  Footer
//                     :  NoData
//                 }
//             </div>
//         )
//     }
//     _fetchData = async page =>{
//         console.log('拉取数据----page------------>', page);
//         console.log('拉取数据----this.cacheResult------------>', this.cacheResult.nextPage);
//         if(this.cacheResult.nextPage >= 3){
//             this.setState({
//                 noData:true
//             })
//             return;
//         }
//         const data = [
//             {title:'1'+page},
//             {title:'2'+page},
//             {title:'3'+page},
//             {title:'4'+page},
//             {title:'5'+page},
//             {title:'6'+page},
//             {title:'7'+page},
//             {title:'8'+page},
//             {title:'9'+page},
//             {title:'10'+page},
//         ];

//         this.timer = setTimeout(()=>{
//             const dataList = this.cacheResult.dataList.slice();
//             this.cacheResult.nextPage += 1;
//             this.cacheResult.dataList = dataList.concat(data);


//             this.setState({
//                 reload:!this.state.reload
//             })
//         },500);
//         // page !== 0 
//         // ?   this.setState({isLoadingTail:false})
//         // :   this.setState({isRefreshing:false,loading:false})

//     }
//     _onRenderNoData = ()=>{
//         const styles = {
//             height:this.UNIT_ITEMS_HEIGHT,
//         }
//         const RenderNoData = this.props.renderNoData;
//         if(!this.CAN_GET_DATA){
//             return(
//                 <View style={styles}>
//                     <RenderNoData />
//                 </View>
//             )
//         }   
//     }
//     _onRenderFooter = ()=>{
//         const styles = {
//             height:this.UNIT_ITEMS_HEIGHT,
//         }
//         const RenderFooter = this.props.renderFooter;
//         if(!this.CAN_GET_DATA){
//             return(
//                 <View style={styles}>
//                     <RenderFooter />
//                 </View>
//             )
//         }
//     }
//     //1.渲染row
//     _onRenderRow = (item,index)=>{
//         return this.props.renderItem && this.props.renderItem(item);
//     }
//     //2.滚动事件
//     _onScroll = e=>{
//         const event = normalizeScrollEvent(e);
//         this._updateRenderModel( event );
//         const offSetY = event.nativeEvent.contentOffset.y;
//         const scrollHeight = event.nativeEvent.contentSize.height;

//         console.log('offSetY-------------->',offSetY);
//         console.log('scrollHeight-------------->',scrollHeight);
//         console.log('offSetY + this.RENDER_NUM*this.UNIT_ITEMS_HEIGHT-------------->',offSetY + this.RENDER_NUM*this.UNIT_ITEMS_HEIGHT);
//         //1.滚动位置
//         //1.2 to end
//         //滑动距离+显示高度 >= scrollHeight 即滑动到底部
//         if(offSetY + this.RENDER_NUM*this.UNIT_ITEMS_HEIGHT  >= scrollHeight){
//             this._onScrollToEnd();
//         }

//     }
//     //3.更新视图
//     _updateRenderModel = (event)=> {
//         const contentOffset = event.nativeEvent.contentOffset.y;
//         console.log('更新视图--contentOffset----->',contentOffset);
//         //3.1 计算 区域动态显示item索引
//         const firstVisibleIndex = Math.max(0, Math.floor(contentOffset / this.UNIT_ITEMS_HEIGHT));
//         //3.2 滑动时显示第一个item的位置
//         const firstVisiblePosition = firstVisibleIndex * this.UNIT_ITEMS_HEIGHT ;
//         //3.3 通过索引动态取值
//         const dataList = this.cacheResult.dataList.slice(firstVisibleIndex, firstVisibleIndex + this.RENDER_NUM);;
//         //3.4 根据取值渲染 视图
//         const dataSource = dataList.map((item, index)=>{
//             return {
//                 data: item,
//                 position: firstVisiblePosition + index * this.UNIT_ITEMS_HEIGHT
//             }
//         });
//         //3.5 需要渲染的数据赋值给 this.cacheResult.dataSource
//         this.cacheResult.dataSource = dataSource;
//         //3.6 如果滑动的距离超过当前缓存数组总数高度 发起请求
//         const totalHeight = this.cacheResult.dataList.length * this.UNIT_ITEMS_HEIGHT;
//         console.log('totalHeight-------------->',totalHeight);
//         console.log('contentOffset + this.props.height-------------->',contentOffset + this.props.viewHeight);
//         if((contentOffset + this.props.viewHeight ) - totalHeight > 0){
//             //3.6.1 新的网络请求 
//             //3.6.2 等待数据返回
//             return;
//         }
//         //3.7 滑动未超出 动态变换item位置
//         console.log('firstVisiblePosition + this.RENDER_NUM * this.UNIT_ITEMS_HEIGHT--------->',firstVisiblePosition + this.RENDER_NUM * this.UNIT_ITEMS_HEIGHT);
//         this.setState({
//             height: firstVisiblePosition + this.RENDER_NUM * this.UNIT_ITEMS_HEIGHT
//         })
//     }
//     //4.onScrollToEnd,//滚动到视图底部
//     _onScrollToEnd = ()=> {
//         console.log('已经到底部-------------->');
//         this.CAN_GET_DATA = false;
//         //网络请求
//         if(1===1){//满足网络请求条件
//             this._fetchData(this.cacheResult.nextPage);
//         }
//     }
// }
// module.exports = ListView;


import React ,{ Component } from 'react';

const ListView = ()=>{
    return(
        <div>ListView</div>
    )
}

module.exports = ListView;