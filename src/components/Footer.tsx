
import logo from '../assets/footer-logo.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'

import { useLocomotiveScroll } from 'react-locomotive-scroll'

export function Footer() {
    const { scroll } = useLocomotiveScroll()

    return (
        <footer data-scroll-section className="footer-container container">
            <img data-scroll className="logo" src={logo} alt={logo} />
            <nav data-scroll className="footer-nav">
                <a data-scroll href="#"><p className="paragraph-01">About</p></a>
                <a data-scroll href="#"><p className="paragraph-01">Services</p></a>
                <a data-scroll href="#"><p className="paragraph-01">Projects</p></a>
            </nav>
            <div data-scroll className="socials">
                <a data-scroll href="#"><img className="img" src={facebook} /></a>
                <a data-scroll href="#"><img className="img" src={instagram} /></a>
                <a data-scroll href="#"><img className="img" src={pinterest} /></a>
                <a data-scroll href="#"><img className="img" src={twitter} /></a>
            </div>
        </footer>
    )      
}