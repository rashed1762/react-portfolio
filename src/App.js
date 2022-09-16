import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcomp from './components/Navbar/Navcomp';
import Bannercomp from './components/Banner/Bannercomp';

function App() {
  return (
    <div className="App">
      <Navcomp></Navcomp>
      <br />
      <Bannercomp></Bannercomp>
    </div>
  );
}

export default App;
