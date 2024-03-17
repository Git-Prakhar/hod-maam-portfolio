import React, { useEffect, useState } from 'react'
import acrologo from '../images/acropolis.png'
import simpleInsta from '../images/icons8-instagram.svg'
import simpleLinkedin from '../images/icons8-linkedin.svg'
import simpleTwitter from '../images/icons8-twitter.svg'
import insta from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import { motion } from 'framer-motion'

export default function HomePage() {
  window.addEventListener('scroll', () => {
    if (scrollY >= 250) {
      document.querySelector('.mousey').style.opacity = 0;
    } else {
      document.querySelector('.mousey').style.opacity = 1;
    }
  })

  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }

  const jumpIn = {
    initial: {
      y: -20
    },
    animate: {
      y: 0
    }
    ,
    viewport: {
      margin: '0px 0px -100px 0px'
    }
  }

  const blackOut = {
    initial: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: 'var(--black)'
    },
    transition: {
      duration: 0.5
    },
    inView: {
      width: 0
    },
    viewport: {
      margin: '0px 0px -600px 0px'
    }
  }

  const [mobile, setMobile] = useState(false);

  document.title = 'Geeta Santhosh'

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 960);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='homepage' className='df-col jcc aic'>
      <motion.div id='section-1' className='df jcc aic'
        variants={fadeIn}
        initial='initial'
        animate='animate'
        transition={{
          duration: 1
        }}
      >
        <div id="navbar">
          <ul id='main' className='df jcc aic'>
            <li>
              <ul id='left' className='df jcc aic'>
                <motion.a href='#section-2'
                  variants={jumpIn}
                  initial='initial'
                  animate='animate'
                  transition={{
                    delay: 0
                  }}
                >Portfolio</motion.a>
                <motion.a href='#section-4'
                  variants={jumpIn}
                  initial='initial'
                  animate='animate'
                  transition={{
                    delay: 0.1
                  }}
                >Contact</motion.a>
              </ul>
            </li>
            <li>
              <motion.div
                variants={jumpIn}
                initial='initial'
                animate='animate'
                transition={{
                  delay: 0.2
                }} id='logo'>
                <img src={acrologo} />
                <span>Acropolis</span>
              </motion.div>
            </li>
            <li>
              <ul id='right' className='df jcc aic'>
                <motion.li
                  variants={jumpIn}
                  initial='initial'
                  animate='animate'
                  transition={{
                    delay: 0.3
                  }}
                ><img src={simpleInsta} alt="" /></motion.li>
                <motion.li
                  variants={jumpIn}
                  initial='initial'
                  animate='animate'
                  transition={{
                    delay: 0.4
                  }}
                ><img src={simpleLinkedin} alt="" /></motion.li>
                <motion.li
                  variants={jumpIn}
                  initial='initial'
                  animate='animate'
                  transition={{
                    delay: 0.5
                  }}
                ><img src={simpleTwitter} alt="" /></motion.li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='heading'>
          <motion.div id="top"
            initial={{ x: -60 }}
            animate={{ x: -40 }}
            transition={{ delay: 0.1 }}
          >Hello I am,</motion.div>
          <div id='main' className='df-col jcc aic'>
            <motion.div id="mid"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >Geeta Santhosh</motion.div>
            <motion.div id="bot"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 }}
            >Teacher Based in Indore</motion.div>
          </div>
        </div>
        <div className="mousey" onClick={() => {
          document.querySelector('#section-2').scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="scroller"></div>
          <span>Scroll</span>
        </div>
      </motion.div>
      <motion.div id="section-2" className={`${mobile ? 'df-col' : 'df'} jcc aic`} style={{ flexDirection: mobile ? 'column-reverse' : '' }}
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        viewport={{
          margin: "-200px 0px -400px 0px"
        }}
      >
        <motion.div id="left" className='df-col jcc'
          initial={{ x: -50 }}
          whileInView={{
            x: 0
          }}
          viewport={{
            margin: "0px 0px -250px 0px",
          }}
        >
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
        </motion.div>
        <motion.div id="right"
          initial={{ x: 50 }}
          whileInView={{
            x: 0
          }}
          viewport={{
            margin: "0px 0px -350px 0px",
          }}
        >
          <div id="base" className='df jcc aic'>
            <div id='photo'></div>
          </div>
        </motion.div>
      </motion.div>
      <div className='line'></div>
      <div id="section-3" className='df-col jcc aic'>
        <h1
        ><motion.div
          variants={blackOut}
          initial='initial'
          transition='transition'
          whileInView='inView'
          viewport='viewport'
        ></motion.div>Education and Experience</h1>
        <div className={`df jcc`} id='main'>
          <div id='left' className='df-col jcc aic'>
            <h2><motion.div
              variants={blackOut}
              initial='initial'
              transition='transition'
              whileInView='inView'
              viewport='viewport'
            ></motion.div>Education</h2>
            <div id='holder1' className='df-col jcc'>
              <motion.div
                variants={blackOut}
                initial='initial'
                transition='transition'
                whileInView='inView'
                viewport='viewport'
              ></motion.div>
              <div className={`df-col jcc ${mobile?'aic':''}`} id='card'>
                <div id='head'>Master of Computer Application</div>
                <p>Devi Ahilya Vishwavidyalaya</p>
              </div>
              <div className={`df-col jcc ${mobile?'aic':''}`} id='card'>
                <div id='head'>Pursuing Ph.D, Computer Science</div>
                <p>Bharathiar University</p>
              </div>
            </div>
          </div>
          <div id="right" className='df-col jcc aic'>
            <h2><motion.div
              variants={blackOut}
              initial='initial'
              transition='transition'
              whileInView='inView'
              viewport='viewport'
            ></motion.div>Experience</h2>
            <div id="holder1" className='df-col jcc'>
              <motion.div
                variants={blackOut}
                initial='initial'
                transition='transition'
                whileInView='inView'
                viewport='viewport'
              ></motion.div>
              <div className={`df-col jcc ${mobile?'aic':''}`} id='card'>
                <div id='head'>Acropolis Institute of Technology and Research</div>
                <p>Current Head Of Department - 17+ years.</p>
              </div>
              <div className={`df-col jcc ${mobile?'aic':''}`} id='card'>
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
        <h1
        >Contact</h1>
        <div className='df jcc' id='main'>
          <div id="left" className='df-col aic'>
            <h2>Socials</h2>
            <ul className='df-col jcc'>
              <motion.li variants={jumpIn}
                initial='initial'
                whileInView='animate'
                transition={{ delay: 0.1 }}
                viewport='viewport' className='df aic'><img src={insta} alt="" /><span>Instagram</span></motion.li>
              <motion.li variants={jumpIn}
                initial='initial'
                whileInView='animate'
                transition={{ delay: 0.2 }}
                viewport='viewport' className='df aic'><img src={twitter} alt="" /><span>Twitter</span></motion.li>
              <motion.li variants={jumpIn}
                initial='initial'
                whileInView='animate'
                transition={{ delay: 0.3 }}
                viewport='viewport' className='df aic'><img src={linkedin} alt="" /><span>LinkedIn</span></motion.li>
            </ul>
          </div>
          <div id="right" className='df-col aic'>
            <h2>Contact</h2>
            <div id='contact' className='df-col jcc'>
              <motion.div variants={jumpIn}
                initial='initial'
                whileInView='animate'
                transition={{ delay: 0.1 }}
                viewport='viewport'>

                <h3>Phone</h3>
                <p>+91 1234567890</p>
              </motion.div>
              <motion.div variants={jumpIn}
                initial='initial'
                whileInView='animate'
                transition={{ delay: 0.2 }}
                viewport='viewport'>

                <h3>Email</h3>
                <p>acro@gmail.com</p>
              </motion.div>
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
