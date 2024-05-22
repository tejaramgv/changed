
import {useState,useEffect,createContext} from 'react'
import axios from 'axios'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import Services from './components/Services';
import { AppProvider } from './components/AppContext';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import Careers from './components/Careers';
import Apply from './components/Apply'
import RouteTransition from './components/RouteTransition'
import ScrollToTopOnRouteChange from './components/ ScrollToTopOnRouteChange'
import NotFound from './components/NotFound';
import './App.css';
import './loader.css'

function App() {
  const [count,setCount]=useState(0);


  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.put("http://localhost:8081/api/v1/auth/countupdate/");
        console.log(res.data.message);
        setCount(res.data.message);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchCount(); // Call fetchCount inside useEffect

  }, []); // Empty dependency array to run once on mount
  
  

  return (
    <div>
  {count===0?(  <div class="center">
         <div class="ring"></div>
        <img src="../img/logo.png" height="200vh"/>
      </div>):(  <BrowserRouter>
    <div className="main">
      <AppProvider>
      <ScrollToTopOnRouteChange />
  <Navbar/>
  <Routes>
 <Route path="/" element={<RouteTransition><Home/></RouteTransition>}/>
 <Route path="/services" element={<RouteTransition><Services/></RouteTransition>}/>
 <Route path="/contact" element={<RouteTransition><Contact/></RouteTransition>}/>
 <Route path="/about" element={<RouteTransition><About/></RouteTransition>}/>
 <Route path="/products" element={<RouteTransition><Products/></RouteTransition>}/>
 <Route path="/careers" element={<RouteTransition><Careers/></RouteTransition>}/>
 <Route path="/apply/:jobname" element={<RouteTransition><Apply/></RouteTransition>}/>
 <Route path="*" element={<NotFound/>}/>

 {/* <Route path="/career1" element={<Careercard/>}/> */}
 </Routes>

     <Footer count={count}/>
     </AppProvider>
    </div>
    </BrowserRouter>)}
    </div>
  );
  
}

export default App;
