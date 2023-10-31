import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Header from './component/Header';
// import Footer from "./component/Footer";
import Login from "./Login";
import Register from "./Register";




function App() {
  return (
    <BrowserRouter>   
      <Routes>
      <Route  exact path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


      </Routes>
      {/* <Footer/> */}


    </BrowserRouter>
    
  );
}

export default App;