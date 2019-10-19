import React ,{ Component }from 'react';

import Fade from './Fade.js';
import Normal from './Normal.js';
import Slide from './Slide.js';

class Modal extends Component {
    state = {items: ['hello', 'world', 'click', 'me']};
    static displayName='Modal';

    static defaultProps = {
        visible:false,
        transparent:false,
        animationType:'none',
        onRequestClose:()=>{}
    }
    render(){
        const {
            visible,
            transparent,
            animationType,
            onRequestClose,
            children
        } = this.props;
        
        // console.log('animationType---------->',animationType);

        if(animationType==='fade'){
            return(
                <Fade in={visible} enter={200} exit={1000}>
                    {children}
                </Fade>
            )
        }
        if(animationType==='slide') {
            return(
                <Slide in={visible} enter={200} exit={1000}>
                    {children}
                </Slide>
            )  
        }

        return(
            <Normal in={visible} >
                {children}
            </Normal>
        )  
    }
}


module.exports = Modal;