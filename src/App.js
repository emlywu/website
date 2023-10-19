import Typewriter from 'typewriter-effect';

import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
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
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary"><a href="#about-main">Get Started</a></button>
          </div>
        </div>
      </div>
      {/* <div className="one">
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
      </div> */}
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>

  );
}

export default App;
