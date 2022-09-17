import React from 'react';
import './Aboutcomp.css';
import img1 from '../assests/rashed2.jpg';
import img2 from '../assests/rashed4.png';
import img3 from '../assests/rashed2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProgressBar from 'react-bootstrap/ProgressBar';



const Aboutcomp = () => {

    const html = 100;
    const css = 95;
    const Bootstrap = 70;
    const Tailwindcss = 30;
    const MaterualUI = 30;
    const JavaScript = 45;
    const React = 70;
    const IT = 90;
    ;



    return (
        <div className='about container-fluid'>
            <h1>About me</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <div className='about-info'>
                    <p>i am rashedul islam.i am graduate at computer science and engineering from daffodil international university. </p>
                    </div>
                
                <div>
                    <br />
                    <br />
                <Tabs>
    <TabList className="tab">
      <Tab >
        Personal Details
        </Tab>
      <Tab>
        Education
        </Tab>
      <Tab>
        Skill
        </Tab>
      <Tab>
        Experiance
        </Tab>
      
    </TabList>

    <TabPanel >
      <h6 className='personal'>
        <div>
        <p>First Name: Rashedul</p>
            <p>Last Name : Islam</p>
            <p>Birth Date: 3 auguest 1998</p>
            <p>Nationality:English</p>
            <p>Address:Mymenisngh</p>
        </div>

        <div className='personal-2'>
            <p>Freelance: Available</p>
            <p>Language : Bangla,English</p>
            <p>Phone:01314540002</p>
            <p>Email:Rashed54islam@gmail.com</p>
            <p>Address:Mymenisngh</p>
        </div>
            

        </h6>
    </TabPanel>
    <TabPanel>
      <div className="row">
        <div className="col-md-3 ">
            <div className='text-start'>
            <h3 >Secondary(SSC)</h3>
           <p><b>Institute</b> : K.B High school</p>
           <p> <b>Passing year</b>:2014</p>
            <p><b> Gpa</b>:5.00</p>
            <p><b>Depertment</b>:science</p>
            
            </div>
            
            
            
            
        </div>
        <div className="col-md-1 colum1"> 

        </div>
        <div className="col-md-3">
            <div className='text-start'> 
            <h3>Higher Secondary(HSC)</h3>
       <p><b>Institute:</b> Noterdame colledge</p> 
        <p><b>Passing year</b>:2016</p>
        <p><b>Gpa</b>:4.58</p>
        <p><b>Depertment</b>:science</p>
        
            </div>
        

        </div>
        <div className="col-md-1 colum1">

        </div>
        <div className="col-md-4">

            <div className='text-start'>
            <h4>
            Bachelor Of Science(BSC)

        </h4>
        <h3>secondary(hsc)</h3>
       <p><b>Institute:</b> Daffodil International University</p> 
        <p><b>Graduation</b>:2021</p>
        <p><b>CGpa</b>:3.04</p>
        <p><b>Depertment</b>:Computer Science and Engineering</p>
            </div>
        


        </div>
      </div>
    </TabPanel>
    <TabPanel>
        <div>
        <h6>HTML5</h6>
    <ProgressBar striped variant="success" now={html} label={`${html}%`} />;
        </div>
        <div>
        <h6>CSS3</h6>
    <ProgressBar striped variant="info" now={css} label={`${css}%`} />;
        </div>
        <div>
        <h6>BootsTrap5</h6>
    <ProgressBar striped variant="warning" now={Bootstrap} label={`${Bootstrap}%`} />;
        </div>
        <div>
        <h6>TailwindCss</h6>
    <ProgressBar  striped variant="danger" now={Tailwindcss} label={`${Tailwindcss}%`} />;
        </div>
        <div>
        <h6>MaterialUI</h6>
    <ProgressBar now={MaterualUI} label={`${MaterualUI}%`} />;
        </div>
        <div>
        <h6>JavaScript</h6>
    <ProgressBar now={JavaScript} label={`${JavaScript}%`} />;
        </div>
        <div>
        <h6>ReactJS</h6>
    <ProgressBar now={React} label={`${css}%`} />;
        </div>
        <div>
        <h6>IT Managmen System</h6>
    <ProgressBar now={React} label={`${IT}%`} />;
        </div>
    
        
        

      
    </TabPanel>
    <TabPanel>
      <h2>
        Any content 4
        </h2>
    </TabPanel>
  </Tabs>
                </div>
      
                </div>
                <div className="col-md-6">
                <img className='img2-about' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Aboutcomp;