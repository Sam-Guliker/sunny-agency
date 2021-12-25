import {TestimonialCard} from './TestimonialCard'
import emily from '../assets/image-emily.jpg'
import jennie from '../assets/image-jennie.jpg'
import thomas from '../assets/image-thomas.jpg'

export const Testimonials = () => (
    <section className="testimonials-container container">
        <h2 className="heading-02 heading-02--testimonials">Client testimonials</h2>
        <div className="testimonial-wrapper">
            <TestimonialCard img={emily} desc='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name='Emily R.' jobTitle='Marketing Director'/>
            <TestimonialCard img={thomas} desc="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." name='Thomas S.' jobTitle='Chief Operating Officer'/>
            <TestimonialCard img={jennie} desc='Inredible and result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' name='Jennie F.' jobTitle='Business owner'/>
        </div>
    </section>
)