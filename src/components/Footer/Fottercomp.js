import React from 'react';
import './Footercomp.css';






const Fottercomp = () => {
    return (
        <div className=' text-center footer container-fluid'>

            <div className="row mt-5">
                <hr />
                <div className="col-md-4 mt-5">
                   <span className='rashed'><h1>RASHED</h1></span> 
                  <span className='rash'><h3>FRONTEND DEVELOPER</h3></span>  
                </div>
                <div className="col-md-4 mt-5">
                    <h4>link</h4>
                    <div>
                    <a className='links' href="/home">Home</a>
                    <br />
                    <a className='links' href="/about">About</a>
                    <br />
                    <a className='links' href="/Projects">Projects</a>
                    <br />
                    <a className='links' href="/contact">Contact</a>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                <h4>contact</h4>
                <div className='d-flex'>
                <b><h5>Email:</h5></b> <p> Rashed54islam@gmail.com</p>
                </div>
                <div className='d-flex'>
                <b><h5>Phone:</h5></b> <p>01314540002</p>
                </div>
                <div className='d-flex'>
                <b><h5>Adress:</h5></b> <p> kewatkhali (moyner mor),Mymensingh</p>
                </div>
                <div>

                </div>
               
                </div>
            </div>
            
        </div>
    );
};

export default Fottercomp;