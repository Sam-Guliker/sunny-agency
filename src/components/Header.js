import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header className='header container'>
            <img className='logo' src={logo} alt='logo' />
            <a href='#'>
                <div className="menu">
                        <div className='stripe stripe-1'></div>
                        <div className='stripe stripe-2'></div>
                        <div className='stripe stripe-3'></div>
                </div>
            </a>

        </header>
    )
}
