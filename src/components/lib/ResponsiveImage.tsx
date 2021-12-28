// Mobile first image component.
import { useLocomotiveScroll } from 'react-locomotive-scroll'

type ImagePops = {
    small: string,
    medium: string,
    large: string
    className: string,
    src: string,
    alt: string,
};

export function ResponsiveImage ({small, medium, large, className, alt}: ImagePops) {
    const { scroll } = useLocomotiveScroll()

    return (
        <img 
            data-scroll 
            className={className} 
            src={small} 
            srcSet={`${small} 750w, ${large} 720w`} 
            sizes="(max-width: 600) 750px, 720px"
            alt={alt}
            
        />
    )
} 