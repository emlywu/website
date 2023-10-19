import './styles/contact.css';

import linkedinLogo from '../assets/images/icons8-linkedin-50.png';
import githubLogo from '../assets/images/icons8-github-50.png';
import emailLogo from '../assets/images/icons8-email-100.png';

export default function Contact() {
  return (
    <div id="contact" className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Let's get in touch!</h1>
          <p className="contact-txt">Always happy to chat about my experiences or if you have any new opportunities for me. Excited to try and learn new things.</p>
          <button class="btn"><a href="mailto:emilywu51721@gmail.com">Say Hi!</a></button>
            {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul> */}

        </div>
      </div>
  </div>
  )
}
