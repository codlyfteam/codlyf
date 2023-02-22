
import './App.css';
import Navbar2 from './component/Navbar2';

import Menu from './component/Menu';
import Award from './component/Award';
import Project from './component/Project';
import Pricing from './component/Pricing';
import Talk from './component/Talk';
import Client from './component/Client';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
      
        <Navbar2/>
       <Menu/>
       <Award/>
       <Project/>
       <Pricing/>
       <Talk/>
       <Client/>
       <Footer/>
       
      
    </div>
  );
}

export default App;
