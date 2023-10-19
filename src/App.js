import Typewriter from 'typewriter-effect';

import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

import arrow from './assets/images/icons8-arrow-96.png';
import me from './assets/images/memoji.png';

function App() {
  return (
    <div className="App">
      <div className="hero min-h-screen bg-base-content">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={me} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold bg-accent">Hi, I'm Emily!</h1>
            <p className="py-6 base-100">Software Developer. Cornell University '23 Grad.</p>
            <a href="#about-main" className="arrow-link">
                <img src={arrow} className="arrow" alt="Continue to next section arrow"></img>
            </a>
          </div>
        </div>
      </div>
      <Header />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
