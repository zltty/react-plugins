import React,{ Component } from 'react';
import { View ,StyleSheet } from '../../../index.js';

import createDOMElement from '../../../modules/createDOMElement';

class Image extends Component {
    static displayName = 'Image';

    static getSize(uri, success, failure) {
        // ImageLoader.getSize(uri, success, failure);
    }
    static prefetch(uri) {
        // return ImageLoader.prefetch(uri);
    }

    static resizeMode = '';

    render() {
        // console.log('img----------->',this.props);
        const {
            children,
            source,
            alt
        } = this.props;


        const src = this._resolveUri(source);
        if(src ==='svgLabel'){
            return (
                <View style={styles.container}>
                    {source}
                </View>
            )
        }
        const imageStyle = {
            alt,
            src: src 
        }
        const isShowImage = this._isShowImage(source,imageStyle);

        return (
            <View style={styles.container}>
                {isShowImage}
            </View>
        )
    }

    //1.处理图片源
    _resolveUri = (source)=> {
        //1.1. 判断是否是svg图
        const isSvg = this._isSvg(source);
        
        let uri;
        if(isSvg === -1 ){
            //1.2. uri 与 base64
            uri = source && ( typeof source ==='object') ? `${source.uri}` : source || ''; 
            return uri;
        }
        if(isSvg === 0) {//svg标签
            return 'svgLabel';
        }

        return source;
    }
    //2.是否显示图片
    _isShowImage = (source , props)=>{
        const showImage = source 
        ?   createDOMElement('img',{
                alt: props.alt || '',
                src: props.src,
                style: [styles.img]
            })
        :   null
        return showImage;    
    }
    //3.判断是否是svg图
    _isSvg = (uri)=>{
        const svgDataUriReg = /^data:image\/svg\+xml;/;
        //svg 标签
        if(uri.type === 'svg'){
            return 0;
        }
        //svg图
        if(svgDataUriReg.test(uri)){
            return 1;
        }
        return -1;
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: 0
    },
    img: {
        height: '100%',
        width: '100%',
        zIndex: -1
    },
    center: {
        backgroundSize: 'auto',
        backgroundPosition: 'center'
    },
    contain: {
        backgroundSize: 'contain'
    },
    cover: {
        backgroundSize: 'cover'
    },
    none: {
        backgroundSize: 'auto'
    },
    repeat: {
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat'
    },
    stretch: {
        backgroundSize: '100% 100%'
    }
})

module.exports = Image;