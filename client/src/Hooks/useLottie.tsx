import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';

const Lottie = (data : any, isLoop : boolean = false, imgSize : number) => {
    const DOM = useRef<any>();

    useEffect(()=>{
        lottie.loadAnimation({
            container: DOM.current,
            renderer: 'svg',
            loop: isLoop,
            autoplay : true,
            animationData : data     
        })
    },[])
    
    return {
        ref: DOM,
        style : {
            width : `${imgSize}vw`,
            height : `${imgSize}vh`
        }
    }
}

export default Lottie;