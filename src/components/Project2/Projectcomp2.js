import React from 'react';
import img4 from '../assests/web2.PNG';
import img5 from '../assests/web6.PNG';
import img6 from '../assests/web1.PNG';
import { Card,Button } from 'react-bootstrap';

const Projectcomp2 = () => {
    return (
        <div>
            <div className='container container-fluid'>
            <div className="row mt-5">
            <div className="col-md-4">
            <Card className='cardstyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='primg1' src={img4} />
      <Card.Body className='prinfo1'>
      <Button className='btnstyle' variant="primary">Live Demo</Button>
      </Card.Body>
    </Card>
    
            </div>
            
            <div className="col-md-4">
            <Card className='cardstyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='primg1' src={img5} />
      <Card.Body className='prinfo1'>
        
        <Button className='btnstyle' variant="primary">Live Demo</Button>
      </Card.Body>
    </Card>
            </div>
           
            <div className="col-md-4">
            <Card className='cardstyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='primg1' src={img6} />
      <Card.Body className='prinfo1'>
        
        <Button className='btnstyle' variant="primary ">Live Demo</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
        </div>

        </div>
    );
};

export default Projectcomp2;