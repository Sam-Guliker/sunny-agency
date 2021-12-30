
import logo from '../assets/footer-logo.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'

export function Footer() {
    return (
        <footer className="footer-container container">
            <img className="logo" src={logo} alt={logo} />
            <nav className="footer-nav">
                <a href="https://github.com/Sam-Guliker/sunny-agency"><p className="paragraph-01">About</p></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency"><p className="paragraph-01">Services</p></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency"><p className="paragraph-01">Projects</p></a>
            </nav>
            <div className="socials">
                <a href="https://github.com/Sam-Guliker/sunny-agency"><img className="img" src={facebook} /></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency"><img className="img" src={instagram} /></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency"><img className="img" src={twitter} /></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency"><img className="img" src={pinterest} /></a>
            </div>
        </footer>
    )      
}