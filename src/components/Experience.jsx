import './styles/experience.css';
import Typewriter from 'typewriter-effect';

import fjaLogo from '../assets/images/2021-fja-logo-large-square.jpg';
import qualtricsLogo from '../assets/images/qualtrics.png';
import workstreamLogo from '../assets/images/jjfx3lindhva5btfest1.webp';
import cornellLogo from '../assets/images/Cornell_University_Logo.png';

export default function Experience() {
  return (
    <div id="exp-main">
      <Typewriter 
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="about-tw">Experience</span')
              .start();
          }}
        />
      <div className="intern">
        <div className="collapse collapse-plus">
          <input id="company1" type="radio" name="my-accordion-3" checked="checked" /> 
          <div className="collapse-title text-xl font-medium">
            <span style={{fontStyle: 'italic'}}>Currently: </span>Software Engineer I @ FJA-US
          </div>
          <div className="collapse-content bg"> 
            <img src={fjaLogo} className="img"></img>
            <div className="exp-desc">
              <p className="date">
                July 2023 - Current
              </p>
              <p className="">
                Working on core PMRS runtime services team, supporting client project teams horizontally.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input id="company2" type="radio" name="my-accordion-3"/> 
          <div className="collapse-title text-xl font-medium">
            Qualtrics: Software Engineer Intern
          </div>
          <div className="collapse-content bg"> 
            <img src={qualtricsLogo} className="img"></img>
            <div className="exp-desc">
              <p className="date">
                June 2022 - August 2022
              </p>
              <p>
                <span className="tech-stack">Tech stack: </span> AngularJS, Java, TypeScript
              </p>
              <p> 
                Designed and developed customizable email notification settings to enhance usability of the action plan items feature
              </p> 
              <p>
                Analyzed and presented different feature design solutions to address fault tolerance and database overhead issues
              </p>
              <p>
                Tested code rigorously in different staging environments through JUnit and API tests
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input id="company3" type="radio" name="my-accordion-3"/> 
          <div className="collapse-title text-xl font-medium">
            Workstream: Software Engineer Intern
          </div>
          <div className="collapse-content bg"> 
            <img src={workstreamLogo} className="img"></img>
            <div className="exp-desc">
              <p className="date">
                June 2021 - May 2022
              </p>
              <p>
                <span className="tech-stack">Tech stack: </span> ReactJS, Ruby on Rails
              </p>
              <p>Engineered a digital state tax form module by working full stack on the public-facing Employee Onboarding module</p>
              <p>Streamlined sorting functionalities, introduced filter support and data autocompletion, and investigated customer reported issues for 1000+ users</p>
              <p>Collaborated across sub teams and with QA engineers and worked in an Agile development environment</p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input id="company4" type="radio" name="my-accordion-3"/> 
          <div className="collapse-title text-xl font-medium">
            Teaching Assistant
          </div>
          <div className="collapse-content bg"> 
            <img src={cornellLogo} className="img"></img>
            <div className="exp-desc">
              <p className="date">
                January 2022 - May 2023
              </p>
              <p>TA for INFO 2300: Intermediate Web Design and Programming and INFO 3300: Data Driven Web Applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}