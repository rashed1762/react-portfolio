import React from 'react';
import './Bannercomp.css';
import { Typewriter } from 'react-simple-typewriter';
import img3 from '../assests/125.webp';
import img4 from '../assests/245329438_2848689565355987_7222936952074024145_n-removebg-preview.png'





const Bannercomp = () => {
    

    return (
        <div className='banner container-fluid'>
           <div className="row mt-5">
            <div className="col-md-4 end">
                <div className='img-part'>
                <img src={img3} className="img1" alt="" />
                <img src={img4} className="img2" alt="" />
                </div>
                
                
                
            </div>
            <div className="col-md-2">

            </div>
            <div className="col-md-5">
                <div className='banner-info'>
                <h1>Hi There</h1>
                <h2>
                    I am 
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Rashedul islam', ' a Frontend developer', ' a UI deigner', ' a Freelancer']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                    
                </h2>
              
                
                <p>i'm a freelance ui designer and frontend developer .i strives to buld immersive and beautiful web application through carefully crafted code and user-cenric design.</p>
                <div>
                <button>More about me</button>
                <button>Portfolioi</button>
                </div>
                </div>
                
               

            </div>
           </div>
           
            
        </div>

        
    );
};

export default Bannercomp;