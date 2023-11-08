import './App.css';
import AnimationComponent from './components/AnimationComponent';
import AudioPerformance from './components/AudioPerfomance';
import Footer from './components/Footer';
import Image from './components/Image';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <AnimationComponent/>   
    <AudioPerformance/>
    <Image/>
    <Footer/>
    </div>
  );
}

export default App;
