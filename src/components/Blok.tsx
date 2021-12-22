type BlokProps = {
    img: string;
    title: string;
    paragraph: string;
};

export const Blok = ({img, title, paragraph}: BlokProps) => (
    <section className="blok-container">
        <img className="blok-image"src={img} />
        <article className="article">
            <h2 className="heading-02">{title}</h2>
            <p className="paragraph-01">{paragraph}</p>
            <div className="button-container">
                <a className="btn">Learn more</a>
                <div className="stripe"></div>
            </div>
        </article>
    </section>
)