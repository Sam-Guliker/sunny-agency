import {Header} from "./Header";
import logo from '../assets/icon-arrow-down.svg'

import { useLocomotiveScroll } from 'react-locomotive-scroll'

export function Landing ({title}: {title: string}) {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className='section landing-container'>
            <Header />
            <h1 data-scroll className="heading-01">{title}</h1>
            <img data-scroll className='arrow' src={logo} alt='logo' />
        </div>
    )
}