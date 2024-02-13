import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function App() {

  function question() {
    document.querySelector('.question').style.display = 'inline';
    document.querySelector('.title').style.display = 'none'
  }

  function click_yes() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.yes-container').style.display = 'inline';
  }

  function click_no() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.no-container').style.display = 'inline';
  }

  function reset() {
    document.querySelector('.title').style.display = 'inline';
    document.querySelector('.no-container').style.display = 'none';
    document.querySelector('.yes-container').style.display = 'none';
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7w1ngyo', 'template_cffzh0q', form.current, {
        publicKey: 'gRBXynDcdG-K0y1Cm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Suggestion sent to Jim! Let's see if he approves...")
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }


  return (
    <>
    <div className="app-container">

      <div className="title">
        <h1>Hello Kim Nguyen <i className="bi bi-emoji-kiss"></i></h1>
        <p>I have a question for you....</p>
        <button onClick={question}>What's the question <i className="bi bi-arrow-right"></i></button>
      </div>

      <div className="question">
        <p>On February 14th, 2024, I was wondering if...</p>
        <h1>you will be my Valentine? <i className="bi bi-emoji-grin"></i></h1>
        <button onClick={click_yes}>Yes <i className="bi bi-heart-fill"></i></button>
        <button onClick={click_no}>No <i className="bi bi-heartbreak-fill"></i></button>
        <h2 className="icons"></h2>
      </div>

      <div className="yes-container">
        <h1>LFG!</h1>
        <h3></h3>
        <p>ok so where the hell do you wanna go eat after work?</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="message" placeholder="enter a place to eat" className="location-input" required/>
            <input type="submit" value="Send" className="submit-btn"/>
          </form>
      </div>

      <div className="no-container">
        <p>FINE IDC!</p>
        <p className="kim-image"></p>
        <button onClick={reset}><i className="bi bi-arrow-left"></i></button>
      </div>

    </div>


    </>
  )
}