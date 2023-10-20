import './styles/footer.css';

import linkedinLogo from '../assets/images/icons8-linkedin-50 bl.png';
import githubLogo from '../assets/images/icons8-github-50 bl.png';
import emailLogo from '../assets/images/icons8-email-64 b.png';

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
          <a href="mailto:emilywu51721@gmail.com"><img className="logo" src={emailLogo} /></a> 
          <a href="https://www.linkedin.com/in/emily-wu-698b451b6/"><img className="logo" src={linkedinLogo} /></a>
          <a href="https://github.com/emlywu"><img className="logo" src={githubLogo} /></a>
        </div>
      </nav>
    </footer>
  )
}
