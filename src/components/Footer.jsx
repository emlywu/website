import './styles/footer.css';

import linkedinLogo from '../assets/images/icons8-linkedin-50.png';
import githubLogo from '../assets/images/icons8-github-50.png';
import emailLogo from '../assets/images/icons8-email-64.png';

export default function Footer() {
  return (
    <footer className="footer items-center p-4 text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Let's Connect!</p>
      </aside> 
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <cite>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></cite>
        <a>
          <img className='logo' src={linkedinLogo} />
        </a>
        <a>
          <img className='logo' src={githubLogo} />
        </a> 
        <a>
          <img className='logo' src={emailLogo} />
        </a> 
      </nav>
  </footer>
  )
}
