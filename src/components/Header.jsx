import './styles/header.css';

export default function Header() {
  return (
    // <div className="header-main">
    //   <a className="header-links" href="#about-main">About Me</a>
    //   <a className="header-links" href="#exp-main">Experience</a>
    //   {/* <a className="header-links">Connect</a> */}
    // </div>
    // <div className="navbar bg-base-content header-main">
    //   <div className="flex-1">
    //     <p>Emily Wu</p>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal px-1">
    //       <li><a className="header-links" href="#about-main">About Me</a></li>
    //       <li><a className="header-links" href="#exp-main">Experience</a></li>
    //     </ul>
    //   </div>
    // </div>
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Emily Wu</a>
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