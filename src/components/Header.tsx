import { useRef } from 'react';

import {Navigation} from '../components/Navigation'
import {MobileNav} from '../components/MobileNav'

import logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'

import useWindowSize from '../components/lib/Resizer'

export function Header () {
    const mobileNavPanel = useRef(null)

    const size:any = useWindowSize();
    const tabletSize = 768

    const onClickMenuHandler = (e:any) => {
        if(size > tabletSize) return
        else { 
            
        } 
    }

    return (
        <>
            <header className='header container'>
                <img className='logo' src={logo} alt='logo' />
                
                { size.width < tabletSize && <a href='#' onClick={onClickMenuHandler} ref={mobileNavPanel} >
                        <img className='menu' src={menu} alt='menu' />
                    </a>
                }

                { size.width > tabletSize && <Navigation /> }
                
            </header>

            { size.width < tabletSize && <MobileNav />}
        </>
    )
}