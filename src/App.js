import memoji from './assets/memoji.png';
import './App.css';
import './styles/text.css';
import Timeline from './components/Timeline';
import SocialsIcons from './components/SocialsIcons';

function App() {
  return (
    <div className="App">
      <div className="intro-container">
        <div className="intro-img-container">
          <img className="intro-img" src={memoji} alt="Memoji of girl smiling, with hands out in a waving motion" />
        </div>
        <div className="intro-text">
          <h2 className="justify-self-center">Hi there, my name is</h2>
          <h1 className="justify-self-center">Emily Wu</h1>
        </div>
        <SocialsIcons />
      </div>
      <div className="info-container">
        <div className="about-me-text">
          <p>
            Hi! I'm a software engineer based in the New York City metropolitan area and a 2023 graduate of Cornell University. 
            I am passionate about building technology that's not just functional, but also intuitive and thoughtful. For 
            me, good code is clean, reusable, and crafted with purpose — whether I'm working on the back-end infrastructure 
            or perfecting the user interface, I'm always thinking about how to make things better for the people 
            who will use them.
          </p>
          <p>
            I've had the chance to work with a variety of companies, where I've learned a lot about solving real-world 
            problems through code. As a developer, I'm meticulous and dedicated to delivering quality work, but I also 
            love learning and experimenting with new technologies. When I'm not coding, you can usually find me solving 
            puzzles (I'm really into the New York Times daily puzzles), reading science-fiction books (ask me about my favorites!), 
            or trying out a new Pilates class to balance out my screen time.
          </p>
          <p>
            I'm always looking for ways to grow as an engineer and collaborate with others who are excited about 
            building meaningful, human-centered tech. Feel free to reach out if you'd like to connect!
          </p>
        </div>
        <div className="timeline">
          <h2 className="text-db font-semibold ">Experience</h2>
          <Timeline />
        </div>
        <div className="notes text-center">
          <p className="text-gray-400 footer-text"> Designed & Built by Emily Wu, v2 2024. </p>
          <p className="text-gray-400 footer-text">All icons from <a className="underline" href="https://icons8.com/" target="_blank" rel="noreferrer">Icons8</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
