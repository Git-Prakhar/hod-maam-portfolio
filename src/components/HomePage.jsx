import React from 'react'
import acrologo from '../images/acropolis.png'
import simpleInsta from '../images/icons8-instagram.svg'
import simpleLinkedin from '../images/icons8-linkedin.svg'
import simpleTwitter from '../images/icons8-twitter.svg'
import insta from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'

export default function HomePage() {
  window.addEventListener('scroll', ()=>{
    if(scrollY >= 250){
      document.querySelector('.mousey').style.opacity = 0;
    }else{
      document.querySelector('.mousey').style.opacity = 1;
    }
  })
  return (
    <div id='homepage' className='df-col jcc aic'>
      <div id='section-1' className='df jcc aic'>
        <div id="navbar">
          <ul id='main' className='df jcc aic'>
            <li>
              <ul id='left' className='df jcc aic'>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </li>
            <li>
              <div id='logo'>
                <img src={acrologo} />
                <span>Acropolis</span>
              </div>
            </li>
            <li>
              <ul id='right' className='df jcc aic'>
                <li><img src={simpleInsta} alt="" /></li>
                <li><img src={simpleLinkedin} alt="" /></li>
                <li><img src={simpleTwitter} alt="" /></li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='heading'>
          <div id="top">Hello I am,</div>
          <div id='main' className='df-col jcc aic'>
            <div id="mid">Geeta Santhosh</div>
            <div id="bot">Teacher Based in Indore</div>
          </div>
        </div>
        <div className="mousey" onClick={()=>{
          document.querySelector('#section-2').scrollIntoView({behavior: 'smooth'});
        }}>
          <div className="scroller"></div>
          <span>Scroll</span>
        </div>
      </div>
      <div id="section-2" className='df jcc aic'>
        <div id="left" className='df-col jcc'>
          <div id='text' className='df-col jcc'>
            <div id="heading">About Me</div>
            <div id="con">A lifelong learner, Extremely passionate about teaching, Excellent written and verbal communication skills.</div>
          </div>
          <div id='connect' className='df-col jcc'>
            <div id="heading">Connect</div>
            <ul className='df aic'>
              <li><img src={insta} alt="" /></li>
              <li><img src={twitter} alt="" /></li>
              <li><img src={linkedin} alt="" /></li>
            </ul>
          </div>
        </div>
        <div id="right">
          <div id="base" className='df jcc aic'>
            <div id='photo'></div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div id="section-3" className='df-col jcc aic'>
        <h1>Education and Experience</h1>
        <div className='df jcc' id='main'>
          <div id='left' className='df-col jcc aic'>
            <h2>Education</h2>
            <div id='holder1' className='df-col jcc'>
              <div className='df-col jcc' id='card'>
                <div id='head'>Master of Computer Application</div>
                <p>Devi Ahilya Vishwavidyalaya</p>
              </div>
              <div className='df-col jcc' id='card'>
                <div id='head'>Pursuing Ph.D, Computer Science</div>
                <p>Bharathiar University</p>
              </div>
            </div>
          </div>
          <div id="right" className='df-col jcc aic'>
            <h2>Experience</h2>
            <div id="holder1" className='df-col jcc'>
              <div className='df-col jcc' id='card'>
                <div id='head'>Acropolis Institute of Technology and Research</div>
                <p>Current Head Of Department - 17+ years.</p>
              </div>
              <div className='df-col jcc' id='card'>
                <div id='head'>SSN College of Engineering</div>
                <p>Associate Professor MCA Dept. - 13 years 6 mos.</p>
                <p>Asst. Professor MCA Dept. - 6 years 9 mos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div id="section-4" className='df-col jcc aic'>
        <h1>Contact</h1>
        <div className='df jcc' id='main'>
          <div id="left" className='df-col aic'>
            <h2>Socials</h2>
            <ul className='df-col jcc'>
              <li className='df aic'><img src={insta} alt="" /><span>Instagram</span></li>
              <li className='df aic'><img src={twitter} alt="" /><span>Twitter</span></li>
              <li className='df aic'><img src={linkedin} alt="" /><span>LinkedIn</span></li>
            </ul>
          </div>
          <div id="right" className='df-col aic'>
            <h2>Contact</h2>
            <div id='contact' className='df-col jcc'>
              <div>
                <h3>Phone</h3>
                <p>+91 1234567890</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>acro@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <footer className='df jcc aic'>
        <div>©️2024 Acropolis. All Rights Reserved.</div>
        <div>acropolis@gmail.com</div>
      </footer>
    </div>
  )
}
