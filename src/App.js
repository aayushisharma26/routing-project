import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Header from './component/Header';
// import Footer from "./component/Footer";
import Login from "./Login";
import Register from "./Register";


function App() {
  return (
    // <><Register/></>
    // <Login/>
    
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      
      <Routes>
      <Route  exact path="/" element={<Register />} />
      <   Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Home />} />
        {/* <Route  exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;