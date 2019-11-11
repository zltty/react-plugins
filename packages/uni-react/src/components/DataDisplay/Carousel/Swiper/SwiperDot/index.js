import React from 'react';

import './index.css';

const SwiperDot = ({...props})=> {
    const {
        config,
        currentPage,
        direction
    } = props;
    
    return (
        <div className={
            direction==='vertical'
            ?   'verticalDotContainer dotContainer'
            :   'dotContainer'
        }>
            {
                config.map((it,i) => {
                    return(
                        <div key={i} className={ i === currentPage ? 'dot active-dot' : 'dot'} />
                    )
                })
            }
        </div>
    )
}
export default SwiperDot;