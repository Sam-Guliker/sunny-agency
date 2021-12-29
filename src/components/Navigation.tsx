export function Navigation(){
    return (
        <nav data-section className="navigation">
            <a data-scroll className="navigation__item" href="#">About</a>
            <a data-scroll className="navigation__item" href="#">Services</a>
            <a data-scroll className="navigation__item" href="#">Projects</a>
            <a data-scroll className="navigation__item navigation__item--call-to-action" href="#">Contact</a>
        </nav>
    )
}