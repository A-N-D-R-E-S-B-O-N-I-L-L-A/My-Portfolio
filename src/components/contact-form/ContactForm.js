import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Modal } from '../modal/Modal';
import './ContactForm.css'


export const ContactForm = () => {

  const [showModal, setshowModal] = useState(false);
  const [showLoading, setshowLoading] = useState(false);
  const [showError, setshowError] = useState(false);

  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);

  const form = useRef();

  const isInvalidName = (value) => {
    setInvalidName(false);
    if (value.length < 2) {
      setInvalidName(true);
    }
  }

  const isInvalidEmail = (value) => {
    setInvalidEmail(false);
    if (!value.includes('@') || !value.includes('.')) {
      setInvalidEmail(true);
    }
  }

  const isInvalidMessage = (value) => {
    setInvalidMessage(false);
    if (value.length === 0) {
      setInvalidMessage(true);
    }
  }

  const sendEmail = (e) => {

    e.preventDefault();

    if (e.target[0].value.length < 2 || e.target[1].value.length < 3 || e.target[2].value.length === 0) {
      isInvalidName(e.target[0].value);
      isInvalidEmail(e.target[1].value);
      isInvalidMessage(e.target[2].value);
      return;
    }

    setshowLoading(true);

    emailjs.sendForm('service_ljreywj', 'template_12scdup', form.current, 'BDIxeZDcmcXTCdO5z')
      .then((result) => {
        
        setshowLoading(false)
        setshowModal(true);

        setTimeout(() => {
          setshowModal(false);
        }, 2200);

      }, (error) => {

          setshowLoading(false);
          setshowError(true);

          setTimeout(() => {
            setshowError(false);
          }, 2200);
          
      });

  }

  return (

        <form id='contact-form' ref={form} onSubmit={sendEmail}>
          <h3>Contact me</h3>

          <input className={(invalidName ? 'invalid' : '')} type='text' placeholder='Name' name='name' onChange={(e)=>isInvalidName(e.target.value)}/>
          {
            invalidName && <span className='invalid-message'>The name must contain at least 2 characters</span>
          }
          
          <input className={(invalidEmail ? 'invalid' : '')} type='email' placeholder='Email' name='email' onChange={(e)=>isInvalidEmail(e.target.value)}/>
          {
            invalidEmail && <span className='invalid-message'>The email is invalid</span>
          }

          <textarea className={(invalidMessage ? 'invalid' : '')} rows="8" placeholder='Message' name='message' onChange={(e)=>isInvalidMessage(e.target.value)}></textarea>
          {
            invalidMessage && <span className='invalid-message'>The message must not be empty</span>
          }

          <button type='submit' className='send-button'>Send message</button>
 
 
          {
            showError && <Modal text={'There was an error, please try again'} resp={false} />
          }

          {
            showModal && <Modal text={'Message sent'} resp={true} />
          }

          {
            showLoading && <Modal text={'Sending...'} resp={true} />
          }
          

        </form>

        

  )
}
