import React , { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { View ,StyleSheet } from '../../../index.js';


class Slide extends Component {
    state = {
        reload:false,
        transform:'translatex(-50%) translateY(200%)'
    }
    display = false;

    render(){
        const { 
            children, 
            duration =500, 
            enter=duration, 
            exit=duration,
            in:inProp
        } = this.props;

        if(inProp){
            this.display = 'block';
        }
        const __slide = this._onRenderSlide(children);
        return(
            <CSSTransition
                in={inProp}
                timeout={{
                    enter:enter,
                    exit:exit
                }}
                classNames='fade'
                onEnter={this._onEnter}
                onEntered={this._onEntered}
                onExit={this._onExit}
                onExiting={this._onExiting}
                onExited={this._onExited}
            >
                <View style={[styles.container,{display:this.display ? 'block' : 'none'}]}>
                    {__slide}
                </View>
            </CSSTransition>
        )
    }
    
    _onRenderSlide = (children)=>{
        return (
            <View style={[styles.slideComponent, {transform: this.state.transform}]}>
                {children}
            </View>
        )
    }
    _onEnter = ()=> {
        this.setState({
            transform:'translatex(-50%) translateY(200%)'
        }) 
    }
    _onEntered = ()=> {
        this.setState({
            transform:'translatex(-50%) translateY(-50%)'
        }) 
    }
    _onExit = ()=> {
        this.setState({
            transform:'translatex(-50%) translateY(200%)'
        }) 
    }
    _onExited = ()=> {
        this.display = false;
        this.setState({
            reload:!this.state.reload
        })
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black',
    },
    slide:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'red'
    },
    slideComponent:{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transitionProperty: 'transform',
        transitionDuration: '0.25s',
    }
})


export default Slide;