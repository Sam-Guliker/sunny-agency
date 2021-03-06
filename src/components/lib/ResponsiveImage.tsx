// Mobile first image component.
type ImagePops = {
    small: string,
    large: string
    className: string,
    src: string,
    alt: string,
};

export function ResponsiveImage ({small, large, className, alt}: ImagePops) {
    return (
        <img 
            className={className} 
            src={small} 
            srcSet={`${small} 750w, ${large} 720w`} 
            alt={alt}
        />
    )
} 