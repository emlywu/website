import './styles/about.css';
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <div id="about-main">
      <div className="about-tw">
        <Typewriter 
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="about-tw">I am...</span')
              .start();
          }}
        />
      </div>
      <div className="text">
        <div className="about-img"></div>
        <div className="about-txt">
          <p>I am a recent graduate from Cornell University, where I majored in Computer Science and minored in Data Science.</p>
          <p> I'm a big fan of puzzles, and I've always 
          thought coding was like putting together a puzzle — something highly logical, but may require creative solutions. Some other puzzles I like are</p>
        </div>
      </div>
    </div>
  )
}