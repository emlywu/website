import Typewriter from 'typewriter-effect';

import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="one">
        <Typewriter className="openingText"
          onInit={(typewriter) => {
            typewriter
              .typeString('System.out.println("Hello World!");')
              .pauseFor(1000)
              .deleteChars(15)
              .pauseFor(500)
              .typeString('My name is <span class="s">Emily</span>");')
              .start();
          }}
        />
      </div>
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>

  );
}

export default App;
