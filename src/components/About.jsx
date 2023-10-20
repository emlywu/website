import './styles/about.css';
import Typewriter from 'typewriter-effect';
import me from '../assets/images/10.png';

export default function About() {
  return (
    <div id="about-main" className="bg-base-100">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={me} alt="Emily smiling next to Ezra Cornell statue" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <Typewriter className="about-tw"
              onInit={(typewriter) => {
              typewriter
                .typeString('<span class="about-tw">I am...</span')
                .start();
              }}
            /><br />
            <p>I am a recent graduate from Cornell University, where I majored in <span className="emphasis">Computer Science and minored in Data Science.</span></p><br />
            <p>I am passionate about building usable, human-centered tech (though I've grappled with definitions of what I believe constitutes usability).</p><br />
            <p>I am a New Jersey native, based in the New York Metropolitan Area, and a big fan of puzzles of all kind! I've always thought coding was like solving a puzzle — something highly logical, yet may require creative solutions. Some of my favorite puzzles are 
            The Washington Post's <a className="puzzle emphasis" href="https://www.washingtonpost.com/crossword-puzzles/daily/">The Daily Crossword</a>, The New York Times' 
            <a className="puzzle emphasis" href="https://www.nytimes.com/games/connections"> Connections,</a> and Nonograms.</p><br />
          </div>
        </div>
      </div>
    </div>
  )
}