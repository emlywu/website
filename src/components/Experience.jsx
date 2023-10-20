import './styles/experience.css';
import Typewriter from 'typewriter-effect';

import fjaLogo from '../assets/images/2021-fja-logo-large-square.jpg';
import qualtricsLogo from '../assets/images/qualtrics.png';
import workstreamLogo from '../assets/images/jjfx3lindhva5btfest1.webp';
import cornellLogo from '../assets/images/Cornell_University_Logo.png';

export default function Experience() {
  return (
    <div id="exp-main" className="bg-base-100">
      
      <div className="intern">
      <Typewriter 
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="about-tw">Experience</span')
              .start();
          }}
        />
        <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-accent"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">July 2023 - Present</time>
                <h3 class="text-lg font-semibold">Software Engineer I @ <a className="company" href="https://fja.com/">FJA-US</a></h3>
                <div className="badge badge-primary badge-outline">Java</div>
                <p class="mb-4 text-base font-normal ">Working on core PMRS runtime services team, supporting client project teams horizontally.</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023 - Present</time>
              <h3 class="text-lg font-semibold">Software Engineer Intern @ <a href="https://www.qualtrics.com/" className="company">Qualtrics</a></h3>
              <div className="badge badge-primary badge-outline">AngularJS</div>
              <div className="badge badge-primary badge-outline">Java</div>
              <div className="badge badge-primary badge-outline">TypeScript</div>
              <p>Designed and developed customizable email notification settings to enhance usability of the action plan items feature</p> 
              <p>Analyzed and presented different feature design solutions to address fault tolerance and database overhead issues</p>
              <p>Tested code rigorously in different staging environments through JUnit and API tests</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022 - May 2023</time>
              <h3 class="text-lg font-semibold">Teaching Assistant @ <a href="https://www.cornell.edu/" className="company">Cornell University</a></h3>
              <div className="badge badge-primary badge-outline">ReactJS</div>
              <div className="badge badge-primary badge-outline">PHP</div>
              <div className="badge badge-primary badge-outline">SQLite</div>
              <div className="badge badge-primary badge-outline">JavaScript</div>
              <div className="badge badge-primary badge-outline">d3.js</div>
              <div className="badge badge-primary badge-outline">HTML</div>
              <div className="badge badge-primary badge-outline">CSS</div>
              <p>Supported students in INFO 2300: Intermediate Web Design and Programming (Spring '22, Spring '23) and INFO 3300: Data Driven Web Applications (Fall '22) </p>
              <p>Held office hours, graded assignments, taught weekly discussion sections (INFO 2300), and by mentored student project groups (INFO 3300).</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021 - May 2022</time>
                <h3 class="text-lg font-semibold">Software Engineer Intern @ <a href="https://www.workstream.us/" className="company">Workstream</a></h3>
                <div className="badge badge-primary badge-outline">ReactJS</div>
              <div className="badge badge-primary badge-outline">Ruby on Rails</div>
              <p>Engineered a digital state tax form module on the public-facing Employee Onboarding module</p>
              <p>Streamlined sorting functionalities, introduced filter support and data autocompletion, and investigated customer reported issues for 1000+ users</p>
              <p>Collaborated across sub teams and with QA engineers and worked in an Agile development environment</p>
            </li>
        </ol>

        {/* <div className="collapse collapse-arrow">
          <input id="company1" type="radio" name="my-accordion-2" checked="checked" /> 
          <div className="collapse-title text-xl font-medium">
            <span style={{fontStyle: 'italic'}}>Currently: </span>Software Engineer I @ FJA-US
          </div>
          <div className="collapse-content bg-base-200"> 
            <a href="https://fja.com/"><img src={fjaLogo} className="img" /></a>
              <div className="exp-desc">
                <p className="date">
                  July 2023 - Current
                </p>
                <div className="badge badge-primary badge-outline">Java</div>
                <p className="">
                  Working on core PMRS runtime services team, supporting client project teams horizontally.
                </p>
              </div>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input id="company2" type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Qualtrics: Software Engineer Intern
          </div>
          <div className="collapse-content bg-base-200"> 
            <a href="https://www.qualtrics.com/"><img src={qualtricsLogo} className="img" /></a>
            <div className="exp-desc">
              <p className="date">June 2022 - August 2022</p>
              <div className="badge badge-primary badge-outline">AngularJS</div>
              <div className="badge badge-primary badge-outline">Java</div>
              <div className="badge badge-primary badge-outline">TypeScript</div>
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
        <div className="collapse collapse-arrow">
          <input id="company3" type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Workstream: Software Engineer Intern
          </div>
          <div className="collapse-content  bg-base-200"> 
            <a href="https://www.workstream.us/"><img src={workstreamLogo} className="img"/></a>
            <div className="exp-desc">
              <p className="date">
                June 2021 - May 2022
              </p>
              <div className="badge badge-primary badge-outline">ReactJS</div>
              <div className="badge badge-primary badge-outline">Ruby on Rails</div>
              <p>Engineered a digital state tax form module on the public-facing Employee Onboarding module</p>
              <p>Streamlined sorting functionalities, introduced filter support and data autocompletion, and investigated customer reported issues for 1000+ users</p>
              <p>Collaborated across sub teams and with QA engineers and worked in an Agile development environment</p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input id="company4" type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Teaching Assistant
          </div>
          <div className="collapse-content  bg-base-200"> 
            <a href="https://www.cornell.edu/"><img src={cornellLogo} className="img"/></a>
            <div className="exp-desc">
              <p className="date">
                January 2022 - May 2023
              </p>
              <div className="badge badge-primary badge-outline">PHP</div>
              <div className="badge badge-primary badge-outline">SQLite</div>
              <div className="badge badge-primary badge-outline">JavaScript</div>
              <div className="badge badge-primary badge-outline">d3.js</div>
              <div className="badge badge-primary badge-outline">HTML</div>
              <div className="badge badge-primary badge-outline">CSS</div>
              <p>Supported students in INFO 2300: Intermediate Web Design and Programming (Spring '22, Spring '23) and INFO 3300: Data Driven Web Applications (Fall '22) </p>
              <p>Held office hours, graded assignments, taught weekly discussion sections (INFO 2300), and by mentored student project groups (INFO 3300).</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}