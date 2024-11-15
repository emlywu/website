import '../styles/socials.css';
import email from '../assets/icons8-email-64.png';
import linkedin from '../assets/icons8-linkedin-50.png';
import github from '../assets/icons8-github-50.png';
import goodreads from '../assets/icons8-goodreads-50.png'

export default function SocialsIcons() {
  return (
    <div className="socials">
      {/* Email icon by https://icons8.com" Icons8 */}
      <a target="_blank" href="mailto:emilywu51721@gmail.com" rel="noreferrer"><img className="icon" src={email} alt="Email icon"/></a>
      {/* Linkedin icon by https://icons8.com" Icons8 */}
      <a target="_blank" href="https://www.linkedin.com/in/emily-wu-698b451b6/" rel="noreferrer"><img className="icon" src={linkedin} alt="LinkedIn icon"/></a>
      {/* Github icon by https://icons8.com" Icons8 */}
      <a target="_blank" href="https://github.com/emlywu" rel="noreferrer"><img className="icon" src={github} alt="GitHub icon"/></a>
      {/* Goodreads icon by https://icons8.com" Icons8 */}
      <a target="_blank" href="https://www.goodreads.com/user/show/174136766-emily" rel="noreferrer"><img className="icon" src={goodreads} alt="Goodreads icon"/></a>
    </div>
  )
}