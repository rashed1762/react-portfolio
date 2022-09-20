import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactcomp.css';


const Contactcomp = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0upac7', 'template_3v6hllz', form.current, 'oYs0fZ-tmSmHuYr2P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log("Massage Sent");
      });
      e.target.reset();
      
  };

    
    return (
        <div  className='contact'>
            <h1 className='text-center mt-5'>Hire me</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waves'>
  <path fill="#0099ff" fill-opacity="1" d="M0,0L720,288L1440,0L1440,320L720,320L0,320Z"></path>
</svg>
            
            <div className="form container container-fluid mt-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
                

                {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
                    <form className='formstyle' ref={form} onSubmit={sendEmail} action="">
                    <h5>Name</h5>
                    <input className='email' type="text" name="user_name" placeholder='Write Your Name' />
                    <br />
                    <br />
                    <h5>Email</h5>
                    <input className='email' type="text" name="user_email" placeholder='Write Your Email' />
                    <br />
                    <br />
                    <h5>project</h5>
                    <input className='email' type="text" placeholder='email' />
                    <br />
                    <br />
                    <h5>massage</h5>
                
                    <input className='massage' name="message" type="text" placeholder='massage' />
                        <br />
                        <br />
                    <button type="submit" value="Send" className='btn-3'>Send</button>
                    <br />
                    <br />
                    </form>
                  
                </div>
                
            </div>
       
    );
};

export default Contactcomp;