import React ,{ Component }from 'react';
import { View , Button} from '../../../index.js';
import Loading from './Loading.js';

const normalizeTouchEvent = e => {
    return e.touches[0];
};

class RefreshControl extends Component {
    static displayName='RefreshControl';

    state = {
        refreshing:false,
    }

    initPosition={clientX:0, clientY:0};//滑动初始位置
    SLIDE_DISTANCE=0;//滑动距离
    SHOW_LOADING_HEIGHT=0;//逐渐显示的loading加载器高度
    isLoading=true; //是否正在下拉
    startLoading=false;//开始加载loading 动画

    SHOW_DISTANCE= 50;

    componentWillReceiveProps(nextProps){
        if(nextProps.refreshing !== this.state.refreshing){
            this.setState({
                refreshing:nextProps.refreshing
            })
        }
    }

    render(){
        const {
            title,
            titleColor,
            tintColor,
            progressBackgroundColor,
            children,
            component,
            horizontal,//暂不支持水平加载
        } = this.props;
        
        const style = {
            title,
            titleColor,
            tintColor,
            progressBackgroundColor,
        }
        return(
            <View 
                style={this.props.style} 
                onTouchMove={this._onTouchMove}
                onTouchStart={this._onTouchStart}
                onTouchEnd={this._onTouchEnd}
            >
                <Loading 
                    style={style} 
                    in={this.state.refreshing} 
                    onTransitionEnd={this._onTransitionEnd} 
                    animating={this.startLoading}
                    height={this.SHOW_LOADING_HEIGHT} 
                    component={component} 
                />
                {children}
            </View>
        )
    }
    //2.默认显示loading
    // 判断是否是下拉
    _isLoading = (e)=> {
        this.SLIDE_DISTANCE = (e.clientY - this.initPosition.clientY);
        const direction = this.SLIDE_DISTANCE > 0 ? true:false;
        return direction;
    }
    // 判断是可以下拉
    _canLoading = (offSet,isLoading)=> {
        if(offSet<=0 && isLoading){
            return true;
        }
        return false;
    }
    //=======================================//
    //2.0 判断是否可以下拉刷新
    _onTouchMove = e=>{
        // console.log('_onTouchStart------------->');
        const { offSet } = this.props;
        const nativeEvent = normalizeTouchEvent(e);
        this.isLoading = this._isLoading(nativeEvent);
        
        if(this._canLoading(offSet, this.isLoading)){
            //显示下拉组件 状态
            //2.0.1 滑动距离小于临界值 临界值是loading组件高度 这里假设50
            //2.0.2 滑动距离大于等于临界值 则显示刷新组件
            if(this.SLIDE_DISTANCE < this.SHOW_DISTANCE){
                this.SHOW_LOADING_HEIGHT = this.SLIDE_DISTANCE;
                this.setState({ refreshing:true })
            }
            
            if(this.SLIDE_DISTANCE >= this.SHOW_DISTANCE){
                this.SHOW_LOADING_HEIGHT = this.SHOW_DISTANCE;
                this.startLoading = true;
                this.setState({ refreshing:true})
            }
        }
        e.stopPropagation();
    }
    //2.1 下拉 显示组件
    _onTouchStart = e=>{
        // console.log('_onTouchStart------------->');
        const nativeEvent = normalizeTouchEvent(e);
        //2.1.1 初始化起点位置
        this.initPosition.clientX = nativeEvent.clientX;
        this.initPosition.clientY = nativeEvent.clientY;

        e.stopPropagation();
    }
    //2.2 下拉结束 执行动画
    _onTouchEnd = e=>{
        // console.log('_onTouchEnd------------->');
        e.stopPropagation();
    }
    //3.过渡动画执行完 执行刷新操作
    _onTransitionEnd = e=> {
        // console.log('_onTransitionEnd------------->');
        const { onRefresh } = this.props;
        //loading转圈
        //3.2 如果 显示完全loading图 那么执行onRefresh
        if(this.startLoading && this.state.refreshing){
            onRefresh && onRefresh();
        } else {
            this.setState({ refreshing:false,})
        }
        this.startLoading = false;
    }
}
module.exports = RefreshControl;