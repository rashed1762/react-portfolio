import React from 'react';
import './Bannercomp.css';
import { Typewriter } from 'react-simple-typewriter';
import img3 from '../assests/125.webp';
import img4 from '../assests/245329438_2848689565355987_7222936952074024145_n-removebg-preview.png'

const Bannercomp = () => {
    
    return (
        <div  className='banner container-fluid'>
           <div className="row">
            <div className="col-md-4 end">
                <div className='img-part'>
                <img src={img3} className="img1" alt="" />
                <img src={img4} className="img2" alt="" />
                </div>
                
                
                
            </div>
            <div className="col-md-2">

            </div>
            <div className="col-md-5">
                <div className='banner-info'  data-aos="fade-right">
                <span className='hi'><h1>Hi There</h1></span>
                <h2>
                    I am 
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Rashedul islam', ' a Frontend developer', ' a UI deigner', ' a Freelancer']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                    
                </h2>
              
                <span className='peragraph'><p>i'm a freelance ui designer and frontend developer .i strives to buld immersive and beautiful web application through carefully crafted code and user-cenric design.</p></span>
                <div className='btn-part'>
                <button className='btn-1'>ABOUT ME</button>
                    <a href="Rashed-resume.pdf" download="Rashed-resume.pdf" >
                    <button className='btn-2'>Portfolioi</button>
                    </a>
            

                </div>
                </div>
                
               

            </div>
           </div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave'>
  <path fill="#fff" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        </div>
        

        
    );
};

export default Bannercomp;