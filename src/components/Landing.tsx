import React, { useEffect } from 'react';
import { TweenMax } from "gsap";

import Header from "./Header";
import logo from '../assets/icon-arrow-down.svg'
import { Introduction } from './Introduction';

export function Landing ({title}: {title: string}) {
    const section = React.createRef<HTMLDivElement>()
    const header = React.createRef<HTMLDivElement>()
    const heading = React.createRef<HTMLHeadingElement>()
    const image = React.createRef<HTMLImageElement>()
  
    useEffect(() => { 
      TweenMax.set(header.current, {autoAlpha: 0})
      TweenMax.set(heading.current, {autoAlpha: 0})
      TweenMax.set(image.current, {autoAlpha: 0})
      TweenMax.set(section.current, {overflow: 'hidden'})

      TweenMax.to(header.current, {autoAlpha: 1, delay: 1.2})
      TweenMax.to(heading.current, {autoAlpha: 1, delay: 1.5})
      TweenMax.to(image.current, {autoAlpha: 1, delay: 1.8})
    })
    
    return (
        <div className='section landing-container' ref={section}>
            <Header ref={header}/>
            <h1 ref={heading} className="heading-01">{title}</h1>
            <img ref={image} className='arrow' src={logo} alt='logo' />
          
            <Introduction />
        </div>
    )
}