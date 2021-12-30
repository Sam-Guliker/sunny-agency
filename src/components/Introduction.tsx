import React, { useEffect } from 'react';
import { TweenMax, Power3 } from "gsap";

export function Introduction() {
    const container = React.createRef<HTMLDivElement>()
    const background = React.createRef<HTMLImageElement>()
  
    useEffect(() => { 
      TweenMax.to(container.current, {top: '0', Ease: Power3, duration: 0.6})
      TweenMax.to(container.current, {autoAlpha: 0, delay: 1})
      TweenMax.to(background.current, {autoAlpha: 0, delay: 0.8})
    })
  
    return (
        <>
            <div className='introduction-container' ref={container}></div>
            <div className="background" ref={background}></div>
        </>
    )
}