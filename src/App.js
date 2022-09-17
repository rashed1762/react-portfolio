import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcomp from './components/Navbar/Navcomp';
import Bannercomp from './components/Banner/Bannercomp';
import Aboutcomp from './components/About/Aboutcomp';

function App() {
  return (
    <div className="App">
      <Navcomp></Navcomp>
      <br />
      <Bannercomp></Bannercomp>
      <br />
      <Aboutcomp></Aboutcomp>
    </div>
  );
}

export default App;
