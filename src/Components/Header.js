import React from 'react';
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
  return (
    <div className='background-container'>
      <header id='home'>
        <nav style={{ backgroundColor: '#6200EE' }} id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            {/* <span>
              <a className='smoothscroll' href='#home'>
                <img
                  src='/images/Logonoback.png'
                  style={{ width: '50px', height: '50px' }}
                />
              </a>
            </span> */}

            <span>
              <li className='current'>
                <a className='smoothscroll' href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#portfolio'>
                  Works
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#resume'>
                  Resume
                </a>
              </li>

              <li>
                <a className='smoothscroll' href='#testimonials'>
                  Testimonials
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#contact'>
                  Contact
                </a>
              </li>
            </span>
          </ul>
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
