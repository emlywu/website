import '../styles/timeline.css';

export default function Timeline() {
  return (
    // Component adapted from Flowbite https://flowbite.com/docs/components/timeline/
    <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
      <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">July 2023 - Present</time>
          <h3 class="text-lg font-semibold text-lb">Software Engineer I @ <a className="company" target="_blank" rel="noreferrer" href="https://fja.com/">FJA-US</a></h3>
          <div className="badge badge-outline">Java</div>
          <div className="badge badge-outline">Python</div>
          <div className="badge badge-outline">Jenkins</div>
          <p class="mb-4 text-base font-normal ">
            Working on core PMRS runtime services team, supporting client project teams by providing personalized software solutions. 
            Building and maintaining services as we transform our core services into scalable, web-based solutions
          </p>
      </li>
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022 - August 2022</time>
        <h3 class="text-lg font-semibold text-lb">Software Engineer Intern @ <a target="_blank" rel="noreferrer" href="https://www.qualtrics.com/" className="company">Qualtrics</a></h3>
        <div className="badge badge-outline">AngularJS</div>
        <div className="badge badge-outline">Java</div>
        <div className="badge badge-outline">TypeScript</div>
        <p>
          Designed and developed customizable email notification settings to improve the usability of the "Action Plan Items" feature. 
          Iterated through various design solutions to address issues such as fault tolerance of the system and database overhead. 
          This experience taught me how to communicate effectively with my team and gave me my first exposure to software architecture 
          design, deepening my understanding of the end-to-end flow of software development.
        </p>
      </li>
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022 - May 2023</time>
        <h3 class="text-lg font-semibold text-lb">Teaching Assistant @ <a target="_blank" rel="noreferrer" href="https://www.cornell.edu/" className="company">Cornell University</a></h3>
        <div className="badge badge-outline">ReactJS</div>
        <div className="badge badge-outline">PHP</div>
        <div className="badge badge-outline">SQLite</div>
        <div className="badge badge-outline">JavaScript</div>
        <div className="badge badge-outline">d3.js</div>
        <div className="badge badge-outline">HTML</div>
        <div className="badge badge-outline">CSS</div>
        <p>Supported students in INFO 2300: Intermediate Web Design and Programming (Spring '22, Spring '23) and INFO 3300: Data Driven Web Applications (Fall '22) </p>
        <p>Held office hours, graded assignments, taught weekly discussion sections (INFO 2300), and by mentored student project groups (INFO 3300).</p>
      </li>
      <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021 - May 2022</time>
          <h3 class="text-lg font-semibold text-lb">Software Engineer Intern @ <a target="_blank" rel="noreferrer" href="https://www.workstream.us/" className="company">Workstream</a></h3>
          <div className="badge badge-outline">ReactJS</div>
        <div className="badge badge-outline">Ruby on Rails</div>
        <p>Engineered a digital state tax form module and gave me my first experience working with a team in an Agile development environment. 
          Continued part-time with the company at the conclusion of my summer internship, and was able to work closely with product development teams 
          to tackle customer-reported bugs and new feature requests.
        </p>
      </li>
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2020 - November 2021</time>
        <h3 class="text-lg font-semibold text-lb">Project Developer @ <a target="_blank" rel="noreferrer" href="https://www.developforgood.org/" className="company">Develop For Good</a></h3>
        <div className="badge badge-outline">ReactJS</div>
        <div className="badge badge-outline">HTML</div>
        <div className="badge badge-outline">CSS</div>
        <div className="badge badge-outline">Figma</div>
        <p>
          Worked with non-profits Care Live Well Zambia and Warriors and Quiet Waters (WQW) to create React based web apps, with special focus on their accessibility needs. 
          Collaborated with a team of college students, and helped define project goals, establish team structure, and practiced leadership to guide the group's progress. 
        </p>
      </li>
    </ol>
  )
}