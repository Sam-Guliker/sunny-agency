// Mobile first image component.
type ImagePops = {
    small: string,
    medium: string,
    large: string
    className: string,
    src: string,
    alt: string,
};

export const ResponsiveImage = ({small, medium, large, className, alt}: ImagePops) => (
    <img className={className} src={small} srcSet={`${small} 300vw, ${medium} 768w, ${large} 1280w`} alt={alt}/>
)