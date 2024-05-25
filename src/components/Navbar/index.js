import {useState,useContext} from 'react'
import { Link,NavLink,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope,  FaFolder, FaShoppingCart,  FaCog, FaUserCog} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin,FaTimes } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { faBars,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {FaHome,FaBriefcase,FaLaptopCode,FaCode,FaBars,FaTools,FaLightbulb,FaBug,FaReact } from 'react-icons/fa';
import {FaChartPie,FaPhoneAlt,FaInfoCircle,FaBell, FaChartBar, FaHeart, FaWallet, FaSignOutAlt, FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import '../../App.css'

const Navbar=()=>{
  const location = useLocation();
    const [state, setState] = useContext(AppContext);
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
      setState(!state)
    }
    ;

    return(
        <>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-details">
        
          <div className="logo_name">VAAJLABS
  </div>
      {isOpen?(<i className="bx bx-menu" id="btn" onClick={toggleSidebar}> <FaTimes style={{marginLeft:"7px"}}/></i>):(<i className="bx bx-menu" id="btn" onClick={toggleSidebar}> <FaBars style={{marginLeft:"7px"}}/></i>)}   
               </div>
        <ul className="nav-list">
         
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              <i><FaHome color={location.pathname === '/' ? '#45beff' : 'white'}/></i>
              <span className="links_name">Home</span>
            </NavLink>
            <span className="tooltip">Home</span>
          </li>
         
          <li>
            <Link to="/services/service1">
              <i><FaTools color={location.pathname === '/services/service1' ? '#45beff' : 'white'}/></i>
              <span className="links_name">Services</span>
            </Link>
            <span className="tooltip">Services</span>
          </li>
          <li>
            <NavLink to="/products">
              <i><FaLaptopCode color={location.pathname === '/products' ? '#45beff' : 'white'}/></i>
              <span className="links_name">Products</span>
            </NavLink>
            <span className="tooltip">Products</span>
          </li>
  
          <li>
            <NavLink to="/about">
              <i><FaInfoCircle color={location.pathname === '/about' ? '#45beff' : 'white'} className="icon" /></i>
              <span className="links_name">About Us</span>
            </NavLink>
            <span className="tooltip">About Us</span>
          </li>
          <li>
            <NavLink to="/careers">
              <i><FaBriefcase color={location.pathname === '/careers' ? '#45beff' : 'white'} className="icon" /></i>
              <span className="links_name">Careers</span>
            </NavLink>
            <span className="tooltip">Careers</span>
          </li>
          
         
                </ul>
      </div>
      <nav className="nav">
      <NavLink to="/" activeClassName="active-link" className="link">
        <FaHome  color={location.pathname === '/' ? '#45beff' : 'white'}/>
        <span>Home</span>
      </NavLink>
      <NavLink to="/services/service1" activeClassName="active-link" className="link">
      <FaTools color={location.pathname === '/services' ? '#45beff' : 'white'}/>
        <span>Services</span>
      </NavLink>
      <NavLink to="/products" className="link">
      <FaLaptopCode color={location.pathname === '/products' ? '#45beff' : 'white'}/>
        <span>Products</span>
      </NavLink>
      {/* <a to="/profile" className="link">
      <FaUser/>
        <span>Clients</span>
      </a> */}
      <NavLink to="/about" className="link">
      <FaInfoCircle color={location.pathname === '/about' ? '#45beff' : 'white'} className="icon" />
        <span>About Us</span>
      </NavLink>
      <NavLink to="/careers" className="link">
      <FaBriefcase color={location.pathname === '/careers' ? '#45beff' : 'white'} className="icon" />
        <span>Careers</span>
      </NavLink>
      {/* <a to="/profile" className="link">
      <FaPhoneAlt className="icon" />
        <span>Contact Us</span>
      </a> */}
    </nav>
    <div className="social-icons">
  <div   className="icon-link">
<Link to="https://www.linkedin.com/in/director-vaajlabs-a842a0230/" target="_blank"><FaLinkedin  size={40} color={"white"}/></Link>
  </div>
  <div  className="icon-link">
   <Link to="https://www.instagram.com/vaajlabs?igsh=MzRlODBiNWFlZA==" target="_blank"><FaInstagram size={40} color={"white"}/></Link>
  </div>
  <div  className="icon-link">
<Link to="/contact"><FaPhoneAlt color={location.pathname === '/contact' ? 'green' : 'white'} size={30}/></Link>   
  </div>
</div>
      </>
    )
   
}
export default Navbar