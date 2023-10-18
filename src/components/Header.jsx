import './styles/header.css';

export default function Header() {
  return (
    <div className="header-main">
      <a className="header-links" href="#about-main">About Me</a>
      <a className="header-links" href="#exp-main">Experience</a>
      {/* <a className="header-links">Connect</a> */}
    </div>
  )
}