import React from 'react';

import './index.css';

const SwiperItem = ({...props}) =>{
    const { count, item ,height,width, direction} = props;
    
    const verticalStyle={
        width: width,
        height: height
    }
    const horizonalStyle={
        width:100 / count + '%',
        height: height
    }
    return (
        <li className={ direction === 'vertical' ? 'swiper-vertical-item' :'swiper-horizontal-item' } style={ direction === 'vertical' ? verticalStyle : horizonalStyle}>
            <img src={item.src} alt={item.alt} data-url={item.url} data-title={item.title}/>
        </li>
    );
}
export default SwiperItem;