type mobileProp = {
    active: boolean
};
export const MobileNav = ({active}: mobileProp) => (
    <nav className={`mobile-navigation ${active ? 'js-is-active' : ''}`}>
        <a className="mobile-navigation__item" href="#">About</a>
        <a className="mobile-navigation__item" href="#">Services</a>
        <a className="mobile-navigation__item" href="#">Projects</a>
        <a className="mobile-navigation__item mobile-navigation--call-to-action" href="#">Contact</a>
    </nav>
)