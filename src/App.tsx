import React, { useEffect, useRef } from "react";

// Components
import {Landing} from './components/Landing';
import {Blok} from './components/Blok';
import {Testimonials} from './components/Testimonials';
import {OutroImages} from './components/OutroImages';
import { Footer } from './components/Footer';

// Images
// mobile
import egg from './assets/mobile/image-transform.jpg'
import redGlass from './assets/mobile/image-stand-out.jpg'
import cherry from './assets/mobile/image-graphic-design.jpg'
import orange from './assets/mobile/image-photography.jpg'

import eggBig from './assets/desktop/image-transform.jpg'
import redGlassBig from './assets/desktop/image-stand-out.jpg'
import cherryBig from './assets/desktop/image-graphic-design.jpg'
import orangeBig from './assets/desktop/image-photography.jpg'


function App() {
  return (
    <div className="App">
      <Landing title="we are creatives" />
      <main>
        <Blok 
          special={false} 
          img={egg} 
          small={egg}
          large={eggBig}
          title={'Transform your brand'} 
          paragraph={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clinets through compelling visuals that do most of the markting for you'}
          readMore={true}
          color={'standard'}
        />
        <Blok 
          special={false} 
          img={redGlass} 
          small={redGlass}
          large={redGlassBig}
          title={'Stand out to the right audience'} 
          paragraph={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places.'}
          readMore={true}
          color={'standard'}
        />
        <Blok 
          special={true} 
          img={cherry} 
          small={cherry}
          large={cherryBig}
          title={'Graphic Design'} 
          paragraph={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client\'s attention'}
          color={'green'}
          readMore={false}
        />
        <Blok 
          special={true} 
          img={orange} 
          small={orange}
          large={orangeBig}
          title={'Photography'} 
          paragraph={'Increase your credibility by getting most stunning, high-quality photos that improve your business image.'}
          color={'blue'}
          readMore={false}
        />
        <Testimonials/>
        <OutroImages />
        <Footer />
      </main>
    </div>
  );
}

export default App;