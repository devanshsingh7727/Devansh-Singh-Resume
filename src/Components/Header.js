import React from "react";
import { motion } from "framer-motion";
function Header(props) {
  if (props.data) {
    var name = props.data.name;
    var occupation = props.data.occupation;
    var description = props.data.description;
    var city = props.data.address.city;
    var networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className='background-container'>
      <header id='home'>
        <nav style={{ backgroundColor: "#6200EE" }} id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <motion.ul
            variants={container}
            initial='hidden'
            animate='show'
            id='nav'
            className='nav'
          >
            <span>
              <motion.li variants={item} className='current'>
                <a className='smoothscroll' href='#home'>
                  Home
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a className='smoothscroll' href='#about'>
                  About
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a className='smoothscroll' href='#portfolio'>
                  Works
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a className='smoothscroll' href='#resume'>
                  Resume
                </a>
              </motion.li>

              <motion.li variants={item}>
                <a className='smoothscroll' href='#testimonials'>
                  Testimonials
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a className='smoothscroll' href='#contact'>
                  Contact
                </a>
              </motion.li>
            </span>
          </motion.ul>
        </nav>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>I'm {name}.</h1>
            <h3>
              I'm a {city} based <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    </div>
  );
}

export default Header;
