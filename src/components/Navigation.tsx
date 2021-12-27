import { useLocomotiveScroll } from 'react-locomotive-scroll'

export function Navigation(){
    const { scroll } = useLocomotiveScroll()

    return (
        <nav data-scroll className="navigation">
            <a data-scroll className="navigation__item" href="#">About</a>
            <a data-scroll className="navigation__item" href="#">Services</a>
            <a data-scroll className="navigation__item" href="#">Projects</a>
            <a data-scroll className="navigation__item navigation__item--call-to-action" href="#">Contact</a>
        </nav>
    )
}