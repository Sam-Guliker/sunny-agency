import useWindowSize from '../components/lib/Resizer'
import {Navigation} from '../components/Navigation'
import {MobileNav} from '../components/MobileNav'

import { gsap } from "gsap";
import { useRef } from 'react';

import logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'


export const Header = () => {
    const size:any = useWindowSize();
    const tabletSize = 768
    // const mobileNav = useRef<HTMLElement | undefined>(undefined);


    return (
        <>
            <header className='header container'>
                <img className='logo' src={logo} alt='logo' />
                
                { size.width < tabletSize && <a href='#'>
                        <img className='menu' src={menu} alt='logo' />
                    </a>
                }

                { size.width > tabletSize && <Navigation /> }
                
            </header>

            { size.width < tabletSize && <MobileNav />}
        </>
    )
}