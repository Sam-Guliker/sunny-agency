import { useLocomotiveScroll } from 'react-locomotive-scroll'

type TestimonialCardProps = {
    img: string,
    desc: string,
    name: string,
    jobTitle: string,
};

export function TestimonialCard ({img, desc, name, jobTitle}: TestimonialCardProps) {
    const { scroll } = useLocomotiveScroll()
    
    return (
    <section data-scroll className="testimonial-card">
        <article data-scroll className="container">
            <img data-scroll className='testimonial-card-img' src={img} alt={img} />
            <p data-scroll className="paragraph-01 paragraph-01--extra-p-30">{desc}</p>
            <h3 data-scroll className="heading-03">{name}</h3>
            <p data-scroll className="paragraph-02">{jobTitle}</p>
        </article>
    </section>
    )
}