type BlokProps = {
    special: boolean;
    img: string;
    title: string;
    paragraph: string;
    readMore: boolean;
    color: string;
};

export const Blok = ({readMore, color, special, img, title, paragraph}: BlokProps) => (
    <section className="blok-container">
        <img className={`blok-image ${special ? 'no-padding' : ''}` }src={img} alt={img} />
        <article className={`article ${special ? 'no-background' : ''} ${color === 'green' ? 'green' : ''} ${color === 'blue' ? 'blue' : ''}`}>
            <h2 className="heading-02">{title}</h2>
            <p className="paragraph-01">{paragraph}</p>
            
            {readMore && <div className="button-container">
                <a className="btn">Learn more</a>
                <div className="stripe"></div>
            </div>
            }
            
        </article>
    </section>
)