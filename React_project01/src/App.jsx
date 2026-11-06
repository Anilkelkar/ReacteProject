 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
 
 

function App() {
  return (
    <Router>
      <Navbar />
       
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    
      <Footer />
            
    </Router>
  );
}

export default App;
