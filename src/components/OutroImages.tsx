import milk from '../assets/mobile/image-gallery-milkbottles.jpg'
import orangeTwo from '../assets/mobile/image-gallery-orange.jpg'
import cone from '../assets/mobile/image-gallery-cone.jpg'
import cubes from '../assets/mobile/image-gallery-sugar-cubes.jpg'

export function OutroImages(){
    return (    
        <section data-scroll-section className="outro-images-container">
            <img data-scroll className="image" src={milk} alt={milk} />
            <img data-scroll className="image" src={orangeTwo} alt={orangeTwo} />
            <img data-scroll className="image" src={cone} alt={cone} />
            <img data-scroll className="image" src={cubes} alt={cubes} />
        </section>
    )
}
