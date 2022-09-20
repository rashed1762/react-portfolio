import React from 'react';
import './Projectcmp.css';
import img1 from '../assests/web5.PNG';
import img2 from '../assests/web4.PNG';
import img3 from '../assests/web3.PNG';
import { Card,Button } from 'react-bootstrap';

const Projectcomp = () => {
    return (
    
        <div className='container container-fluid'>
            <h1 className='text-center'>My Projects</h1>
            <div className="row mt-5">
            <div className="col-md-4">
            <Card className='cardstyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='primg1' src={img1} />
      <Card.Body className='prinfo1'>
      <Button className='btnstyle' variant="primary">Live Demo</Button>
      </Card.Body>
    </Card>
    
            </div>
            
            <div className="col-md-4">
            <Card className='cardstyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='primg1' src={img2} />
      <Card.Body className='prinfo1'>
        
        <Button className='btnstyle' variant="primary">Live Demo</Button>
      </Card.Body>
    </Card>
            </div>
           
            <div className="col-md-4">
            <Card className='cardstyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='primg1' src={img3} />
      <Card.Body className='prinfo1'>
        
        <Button className='btnstyle' variant="primary ">Live Demo</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
        </div>
        
    );
};

export default Projectcomp;