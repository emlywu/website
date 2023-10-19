import './styles/about.css';
import Typewriter from 'typewriter-effect';
import me from '../assets/images/10.png';

export default function About() {
  return (
    <div id="about-main" className="bg-base-100">
      
      <div className="text">
      
        <img className="about-img" src={me}/>
        <div className="about-txt">
        <Typewriter className="about-tw"
          onInit={(typewriter) => {
          typewriter
            .typeString('<span class="about-tw">I am...</span')
            .start();
          }}
        />
        <p>A recent graduate from Cornell University, where I majored in <span className="emphasis">Computer Science and minored in Data Science.</span></p>
        <p>A New Jersey native, based in the New York Metropolitan Area</p>
        <p>A big fan of puzzles! I've always thought coding was like solving a puzzle — something highly logical, yet may require creative solutions. Some of my favorite puzzles are 
        The Washington Post's <a className="puzzle" href="https://www.washingtonpost.com/crossword-puzzles/daily/">The Daily Crossword</a>, The New York Times' 
        <a className="puzzle" href="https://www.nytimes.com/games/connections"> Connections,</a> and Nonograms.</p>
        </div>
      </div>
    </div>
  )
}