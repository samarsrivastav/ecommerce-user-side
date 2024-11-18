import { FooterComponent } from "./components/Footer";
import { Home } from "./components/Home";
import { NavbarComponent } from "./components/Navbar";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Product } from "./components/Product";
import { useState } from "react";
import { getAbout } from "./data/aboutApi";
import { About } from "./components/About";
import { Erorr } from "./components/Erorr";
import { Contact } from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const [about,setAbout]=useState([])
  useState(()=>{
    const fetchData=async()=>{
      const response=await getAbout()
      if(response.status==200){
        setAbout(response.data.result)
      }
    }
    fetchData()
  })
  return (
    <div className="">
      <Router>
        <NavbarComponent about={about}/>
        <Routes>
          <Route path="/" element={<Home about={about}/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/about" element={<About about={about}/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<Erorr/>}></Route>
        </Routes>
        <FooterComponent about={about}/>
      </Router>

    </div>
  );
}

export default App;
