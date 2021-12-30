
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
                <a href="https://github.com/Sam-Guliker/sunny-agency" arial-label="about"><p className="paragraph-01">About</p></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency" arial-label="services"><p className="paragraph-01">Services</p></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency" arial-label="projects"><p className="paragraph-01">Projects</p></a>
            </nav>
            <div className="socials">
                <a href="https://github.com/Sam-Guliker/sunny-agency" aria-label="facebook"><img className="img" src={facebook} alt="facebook"/></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency" aria-label="instagram"><img className="img" src={instagram} alt="instagram"/></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency" aria-label="twitter"><img className="img" src={twitter} alt="twitter" /></a>
                <a href="https://github.com/Sam-Guliker/sunny-agency" aria-label="pinterest"><img className="img" src={pinterest} alt="pinterest"/></a>
            </div>
        </footer>
    )      
}