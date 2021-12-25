import {Header} from "./Header";
import logo from '../assets/icon-arrow-down.svg'

export const Landing = ({title}: {title: string}) => (
    <div className='section landing-container'>
        <Header />
        <h1 className="heading-01">{title}</h1>
        <img className='arrow' src={logo} alt='logo' />
    </div>
)