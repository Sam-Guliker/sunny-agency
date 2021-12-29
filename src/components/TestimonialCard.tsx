type TestimonialCardProps = {
    img: string,
    desc: string,
    name: string,
    jobTitle: string,
};

export function TestimonialCard ({img, desc, name, jobTitle}: TestimonialCardProps) {
    return (
    <section className="testimonial-card">
        <article className="container">
            <img className='testimonial-card-img' src={img} alt={img} />
            <p className="paragraph-01 paragraph-01--extra-p-30">{desc}</p>
            <h3 className="heading-03">{name}</h3>
            <p className="paragraph-02">{jobTitle}</p>
        </article>
    </section>
    )
}