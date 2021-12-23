import logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'

export default function Header() {
    return (
        <header className='header container'>
            <img className='logo' src={logo} alt='logo' />
            <a href='#'>
                <img className='menu' src={menu} alt='logo' />
            </a>

        </header>
    )
}