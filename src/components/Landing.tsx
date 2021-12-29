import {Header} from "./Header";
import logo from '../assets/icon-arrow-down.svg'

export function Landing ({title}: {title: string}) {
    return (
        <div className='section landing-container'>
            <Header />
            <h1 className="heading-01">{title}</h1>
            <img className='arrow' src={logo} alt='logo' />
        </div>
    )
}