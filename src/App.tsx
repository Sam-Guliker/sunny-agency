import {Landing} from './components/Landing';
import {Blok} from './components/Blok';
import egg from './assets/mobile/image-transform.jpg'

function App() {
  return (
    <div className="App">
      <Landing title={'we are creatives'} />
      <main>
        <Blok img={egg} title={'Transform your brand'} paragraph={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clinets through compelling visuals that do most of the markting for you'}/>
      </main>
    </div>
  );
}

export default App;
