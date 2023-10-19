import './styles/footer.css';

import linkedinLogo from '../assets/images/icons8-linkedin-50.png';
import githubLogo from '../assets/images/icons8-github-50.png';
import emailLogo from '../assets/images/icons8-email-64.png';
// import emailLogo from '../assets/images/icons8-email-100.png';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-accent-content">
      <aside>
        <p className="font-bold">
          Designed & Built by Emily Wu, v1 2023. <br/> — emilywu51721@gmail.com —
        </p> 
        <cite className="text-neutral-focus">Icons by <a target="_blank" href="https://icons8.com">Icons8</a></cite>
      </aside> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* <a><img src={emailLogo} /></a>  */}
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </nav>
    </footer>
    // <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    //   <aside>
    //     <p>Designed & Built by Emily Wu; v1 2023.</p>
    //   </aside>
    // </footer>

  //   <footer className="footer items-center p-4 text-neutral-content">
  //     <aside className="items-center grid-flow-col">
  //       <p>Let's Connect!</p>
  //     </aside> 
  //     <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  //       <cite>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></cite>
  //       <a>
  //         <img className='logo' src={linkedinLogo} />
  //       </a>
  //       <a>
  //         <img className='logo' src={githubLogo} />
  //       </a> 
  //       <a>
  //         <img className='logo' src={emailLogo} />
  //       </a> 
  //     </nav>
  // </footer>
  )
}
