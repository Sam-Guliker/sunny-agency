import { ResponsiveImage } from "./lib/ResponsiveImage";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

type BlokProps = {
    special: boolean;
    img: string;
    title: string;
    paragraph: string;
    readMore: boolean;
    color: string;
    small: string,
    large: string,
};

export function Blok ({readMore, color, special, img, title, paragraph, small, large}: BlokProps) {
    const { scroll } = useLocomotiveScroll()

    return (
        <section data-scroll-section className={`blok-container ${special ? 'special' : ''}`}>
            <ResponsiveImage 
                className={`blok-image ${special ? 'no-padding' : ''}` } 
                src={img} 
                small={small} 
                large={large} 
                alt={img} 
            />
            <div data-scroll className={`article-container ${special ? 'no-background' : ''} `}>
                <article data-scroll className={`article  ${color === 'green' ? 'green' : ''} ${color === 'blue' ? 'blue' : ''}`}>
                    <h2 data-scroll className="heading-02">{title}</h2>
                    <p data-scroll className="paragraph-01">{paragraph}</p>
                    
                    {readMore && <div data-scroll className="button-container">
                        <a data-scroll className="btn">Learn more</a>
                        <div data-scroll className="stripe"></div>
                    </div>
                    }
                    
                </article>
            </div>
        </section>
    )
}