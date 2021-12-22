import Header from "./Header";
import logo from '../assets/icon-arrow-down.svg'


export default function Landing() {
    return (
        <div className='section landing-container'>
            <Header />
            <h1 className="heading-01">We are creatives</h1>
            <img className='arrow' src={logo} alt='logo' />
        </div>
    )
}