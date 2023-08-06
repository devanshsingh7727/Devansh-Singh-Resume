import axios from 'axios';
import React, { useState } from 'react';

function Contact(props) {
  const [data, setdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loader, setloader] = useState(false);
  const reset = () => {
    setdata({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  const SendMail = () => {
    setloader(true);
    axios
      .post('/api/form', data)
      .then((res) => {
        console.log(res.data);
        reset();
        setloader(false);
        alert('mail send');
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };
  console.log(data);
  if (props.data) {
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
    var message = props.data.contactmessage;
  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className='ten columns'>
          <p className='lead'>{message}</p>
        </div>
      </div>

      <div className='row'>
        <div className='eight columns'>
          <form>
            <fieldset>
              <div>
                <label>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  value={data.name}
                  size='35'
                  name='name'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>

              <div>
                <label>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  value={data.email}
                  size='35'
                  name='email'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  // onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input
                  type='text'
                  value={data.subject}
                  size='35'
                  name='subject'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  // onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  cols='50'
                  rows='15'
                  value={data.message}
                  name='message'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                ></textarea>
              </div>

              <div>
                <button
                  className='submit'
                  type='button'
                  onClick={() => {
                    SendMail();
                  }}
                >
                  Submit
                </button>
              </div>
              {loader && (
                <span>
                  <img alt='' src='images/loader.gif' />
                </span>
              )}
            </fieldset>
          </form>
        </div>

        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact'>
            <h4>Address and Phone</h4>
            <p className='address'>
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
