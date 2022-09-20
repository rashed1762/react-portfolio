import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcomp from './components/Navbar/Navcomp';
import Bannercomp from './components/Banner/Bannercomp';
import Aboutcomp from './components/About/Aboutcomp';
import Projectcomp from './components/Projects/Projectcomp';
import Projectcomp2 from './components/Project2/Projectcomp2';
import Contactcomp from './components/Contact/Contactcomp';
import Fottercomp from './components/Footer/Fottercomp';
import {useState,useEffect} from 'react';
import BarLoader from "react-spinners/BarLoader";



function App() {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])
  
  return (
    <div className="App">
      {
        loading?
        
        <BarLoader className='bar' color="#d6364d" loading={loading}  size={10} />
       
        :
        <div>
          <Navcomp></Navcomp>
      <br />
      <Bannercomp></Bannercomp>
      <br />
      <Aboutcomp></Aboutcomp>
      <Projectcomp></Projectcomp>
      <Projectcomp2></Projectcomp2>
      <Contactcomp></Contactcomp>
      <Fottercomp></Fottercomp>
        </div>
        
      }
      
  
      
      
    </div>
   
  );
}

export default App;
