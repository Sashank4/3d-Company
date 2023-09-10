import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Product from './routes/Product'
function App() {
  return (
    <div className='App'>

    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/product" element = {<Product/>}/>
      <Route path="/services" element = {<Service/>}/>
      <Route path="/contact" element = {<Contact/>}/>
    </Routes>
    
    
    </div>
  );
}

export default App;
