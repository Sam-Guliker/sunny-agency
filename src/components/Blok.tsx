import { ResponsiveImage } from "./lib/ResponsiveImage";

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
    return (
        <section className={`blok-container ${special ? 'special' : ''}`}>
            <ResponsiveImage 
                className={`blok-image ${special ? 'no-padding' : ''}` } 
                src={img} 
                small={small} 
                large={large} 
                alt={img} 
            />
            <div className={`article-container ${special ? 'no-background' : ''} `}>
                <article className={`article  ${color === 'green' ? 'green' : ''} ${color === 'blue' ? 'blue' : ''}`}>
                    <h2 className="heading-02">{title}</h2>
                    <p className="paragraph-01">{paragraph}</p>
                    
                    {readMore && <div className="button-container">
                        <a className="btn">Learn more</a>
                        <div className="stripe"></div>
                    </div>
                    }
                    
                </article>
            </div>
        </section>
    )
}