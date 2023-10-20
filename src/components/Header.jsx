import './styles/header.css';

export default function Header() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="#">Emily Wu</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about-main">About Me</a></li>
          <li><a href="#exp-main">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}