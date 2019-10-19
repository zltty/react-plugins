// import React,{ Component } from 'react';

// import './index.css';

// import SwiperItem from './SwiperItem';
// import SwiperDot from './SwiperDot/index.js';

// class Swiper extends Component {
//     canMove=false;

//     state = {
//         direction: null,
//         currentPage:0,
//     }

//     render(){
//         const {
//             height=175,
//             width='100%',
//             backgroundColor='red',
//             direction='horizonal',
//             loop=false,
//             showsPagination=false,
//             autoplay=false,
//             showsButtons=false,
//             speed=1,
//             dot,
//             dotColor='rgba(0,0,0,0.5)',
//             activeDot,
//             activeDotColor='#fff',
//             children,
//             config,
//         } = this.props;

//         const container = {
//             height,
//             backgroundColor,
//         };
//         const count = config.length;

//         const horizontalStyle={
//             left: -100 * this.state.currentPage + "%",
//             transition: 'left 1s',
//             transitionDuration: speed + "s",
//             width: count * 100 + "%",
//             height:height
//         }
//         const verticalStyle={
//             top: -100 * this.state.currentPage + "%",
//             transition: 'top 1s',
//             transitionDuration: speed + "s",
//             height: count * 100 + "%",
//         }
  
//         const itemNodes = config.map((item, idx) => {
//             return (
//                     <SwiperItem 
//                         key={'item' + idx}
//                         item={item} 
//                         count={count} 
//                         height={height}
//                         width={width}
//                         direction={direction} 
//                 />
//             )
//         });
//         const currentPage= this.state.currentPage;
//         // console.log('-this.state.currentPage------->',this.state.currentPage);
//         return(
//             <div 
//                 className="swiper" 
//                 style={ container } 
//                 onTouchStart={ this.handleTouchStart }  
//                 onTouchMove={this.handleTouchMove}  
//                 onTouchEnd={this.handleTouchEnd}
//             >
//                 <ul style={
//                     direction === 'vertical'
//                     ?   verticalStyle
//                     :   horizontalStyle
//                 }>
//                     {itemNodes}
//                 </ul>
//                 {
//                     showsPagination
//                     ?   <SwiperDot 
//                             config={config}
//                             currentPage={currentPage}
//                             direction={direction}/>
//                     :   null
//                 }
//             </div>
//         )
//     }
//     handleTouchStart = e=> {
//         if (e.touches.length !== 1) {
//             return;
//         }
//         this._initiateSwipe(e.touches[0]);
//     }
//     handleTouchEnd = e=>{
//         if(this.canMove){
//             this.canMove = false;
//             this._getSwiperDirection();
//             return;
//         }
//         const { onTouch } = this.props;
        
//         onTouch && onTouch(this.jumPparams);
//     }
//     handleTouchMove = e=> {
//         if (e.touches.length !== 1) {
//             return;
//         }
//         this.canMove = true;
//         const touch = e.touches[0];
//         this._getLastPosition(touch);
//     }
//     //1.初始化swiper
//     _initiateSwipe = touch => {
//         this.jumPparams = {
//             src: touch.target.src,
//             title: touch.target.dataset.title,
//             url: touch.target.dataset.url,
//         }
//         this.initiaPositionX = touch.clientX;
//         this.initiaPositionY = touch.clientY;
//     }
//     //2.结束位置
//     _getLastPosition = touch => {
//         this.lastPositionX = touch.clientX;
//         this.lastPositionY = touch.clientY;
//     }
//     //3.判断滑动方向
//     _getSwiperDirection = () => {
//         const { config } =this.props;
//         const { direction='horizonal' } = this.props;
//         //3.1轮播图的个数不能超出轮播范围 可以左右滑动
//         if(this.state.currentPage < config.length-1 && this.state.currentPage >0 ){
//             if(direction === 'vertical'){
//                 if( this.initiaPositionY - this.lastPositionY >0){
//                     this.setState({
//                         direction:'up',
//                         canMove:true,
//                         currentPage:this.state.currentPage+1
//                     })
//                 }else{
//                     this.setState({
//                         direction:'down',
//                         canMove:true,
//                         currentPage:this.state.currentPage-1
//                     })
//                 }
//                 return;
//             }
//             if( this.initiaPositionX - this.lastPositionX >0){
//                 this.setState({
//                     direction:'left',
//                     canMove:true,
//                     currentPage:this.state.currentPage+1
//                 })
//             }else{
//                 this.setState({
//                     direction:'right',
//                     canMove:true,
//                     currentPage:this.state.currentPage-1
//                 })
//             }
            
//         }
//         //3.2播图的个数已经显示最后一张 只能左滑动
//         if(this.state.currentPage === config.length-1){
//             if( this.initiaPositionX - this.lastPositionX < 0 && direction!=='vertical'){
//                 this.setState({
//                     direction:'left',
//                     canMove:true,
//                     currentPage:this.state.currentPage-1
//                 })
//             }
//             if( this.initiaPositionY - this.lastPositionY < 0 && direction==='vertical'){
//                 this.setState({
//                     direction:'up',
//                     canMove:true,
//                     currentPage:this.state.currentPage-1
//                 })
//             }
//         }
//         //3.3播图的个数已经显示第一一张 只能由右滑动
//         if(this.state.currentPage === 0){
//             if( this.initiaPositionX - this.lastPositionX > 0 && direction!=='vertical'){
//                 this.setState({
//                     direction:'right',
//                     canMove:true,
//                     currentPage:this.state.currentPage+1
//                 })
//             }
//             if( this.initiaPositionY - this.lastPositionY > 0 && direction==='vertical'){
//                 this.setState({
//                     direction:'down',
//                     canMove:true,
//                     currentPage:this.state.currentPage+1
//                 })
//             }
//         }
//     }
    
// }

// module.exports = Swiper;



import React from 'react';

const Swiper = ()=>{
    return(
        <div>Swiper</div>
    )
}

module.exports = Swiper;