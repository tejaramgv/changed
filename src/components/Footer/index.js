import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {FaHome,FaLaptopCode,FaCode,FaBars,FaTools,FaLightbulb,FaBug,FaReact } from 'react-icons/fa';
import {FaChartPie,FaPhoneAlt,FaInfoCircle,FaBell, FaChartBar, FaHeart, FaWallet, FaSignOutAlt, FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import CountUp from 'react-countup';
import { ClipLoader } from 'react-spinners';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { RiProductHuntFill,RiShieldFill } from 'react-icons/ri';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import AOS from 'aos';
import Swiper from 'swiper';
import 'aos/dist/aos.css';
import '../../App.css'
import { AppContext } from '../AppContext';

const Footer=({count})=>{
  const [state,setState]=useState(AppContext)

    useEffect(() => {
        // JavaScript code goes here
        // Ensure you have all necessary dependencies imported
        (function () {
          "use strict";
    
          // Easy selector helper function
          const select = (el, all = false) => {
            el = el.trim();
            if (all) {
              return [...document.querySelectorAll(el)];
            } else {
              return document.querySelector(el);
            }
          };
    
          // Easy event listener function
          const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
              if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener));
              } else {
                selectEl.addEventListener(type, listener);
              }
            }
          };
    
          // Easy on scroll event listener
          const onscroll = (el, listener) => {
            el.addEventListener("scroll", listener);
          };
    
          // Scrolls to an element with header offset
          const scrollto = (el) => {
            let header = select("#header");
            let offset = header.offsetHeight;
    
            if (!header.classList.contains("header-scrolled")) {
              offset -= 1;
            }
    
            let elementPos = select(el).offsetTop;
            window.scrollTo({
              top: elementPos - offset,
              behavior: "smooth",
            });
          };
    
          // Toggle .header-scrolled class to #header when page is scrolled
          let selectHeader = select("#header");
          if (selectHeader) {
            const headerScrolled = () => {
              if (window.scrollY > 100) {
                selectHeader.classList.add("header-scrolled");
              } else {
                selectHeader.classList.remove("header-scrolled");
              }
            };
            window.addEventListener("load", headerScrolled);
            onscroll(document, headerScrolled);
          }
    
          // Back to top button
          let backtotop = select(".back-to-top");
          if (backtotop) {
            const toggleBacktotop = () => {
              if (window.scrollY > 100) {
                backtotop.classList.add("active");
              } else {
                backtotop.classList.remove("active");
              }
            };
            window.addEventListener("load", toggleBacktotop);
            onscroll(document, toggleBacktotop);
          }
    
          // Mobile nav toggle
          on("click", ".mobile-nav-toggle", function (e) {
            select("#navbar").classList.toggle("navbar-mobile");
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
          });
    
          // Mobile nav dropdowns activate
          on("click", ".navbar .dropdown > a", function (e) {
            if (select("#navbar").classList.contains("navbar-mobile")) {
              e.preventDefault();
              this.nextElementSibling.classList.toggle("dropdown-active");
            }
          }, true);
    
          // Scrool with offset on links with a class name .scrollto
          on("click", ".scrollto", function (e) {
            if (select(this.hash)) {
              e.preventDefault();
    
              let navbar = select("#navbar");
              if (navbar.classList.contains("navbar-mobile")) {
                navbar.classList.remove("navbar-mobile");
                let navbarToggle = select(".mobile-nav-toggle");
                navbarToggle.classList.toggle("bi-list");
                navbarToggle.classList.toggle("bi-x");
              }
              scrollto(this.hash);
            }
          }, true);
    
          // Skills animation
          // let skilsContent = select(".skills-content");
          // if (skilsContent) {
          //   new Waypoint({
          //     element: skilsContent,
          //     offset: "80%",
          //     handler: function (direction) {
          //       let progress = select(".progress .progress-bar", true);
          //       progress.forEach((el) => {
          //         el.style.width = el.getAttribute("aria-valuenow") + "%";
          //       });
          //     },
          //   });
          // }
    
          // Testimonials slider
          new Swiper(".testimonials-carousel", {
            speed: 400,
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            },
          });
    
          // Portfolio isotope and filter
          // window.addEventListener("load", () => {
          //   let portfolioContainer = select(".portfolio-container");
          //   if (portfolioContainer) {
          //     let portfolioIsotope = new Isotope(portfolioContainer, {
          //       itemSelector: ".portfolio-wrap",
          //       layoutMode: "fitRows",
          //     });
    
          //     let portfolioFilters = select("#portfolio-flters li", true);
    
          //     on("click", "#portfolio-flters li", function (e) {
          //       e.preventDefault();
          //       portfolioFilters.forEach(function (el) {
          //         el.classList.remove("filter-active");
          //       });
          //       this.classList.add("filter-active");
    
          //       portfolioIsotope.arrange({
          //         filter: this.getAttribute("data-filter"),
          //       });
          //       portfolioIsotope.on("arrangeComplete", function () {
          //         AOS.refresh();
          //       });
          //     }, true);
          //   }
          // });
    
          // Initiate portfolio lightbox
          // const portfolioLightbox = GLightbox({
          //   selector: ".portfolio-lightbox",
          // });
    
          // // Portfolio details slider
          // new Swiper(".portfolio-details-slider", {
          //   speed: 400,
          //   autoplay: {
          //     delay: 5000,
          //     disableOnInteraction: false,
          //   },
          //   pagination: {
          //     el: ".swiper-pagination",
          //     type: "bullets",
          //     clickable: true,
          //   },
          // });
    
          // Animation on scroll
          // window.addEventListener("load", () => {
          //   AOS.init({
          //     duration: 1000,
          //     easing: "ease-in-out",
          //     once: true,
          //     mirror: false,
          //   });
          // });
    
          // // Initiate Pure Counter
          // new PureCounter();
    
        //   // Init Clients swiper sliders
        //   function initClientsSwiper() {
        //     document.querySelectorAll(".clients-swiper").forEach(function (swiper) {
        //       let config = JSON.parse(swiper.querySelector(".swiper-config").innerHTML.trim());
        //       new Swiper(swiper, config);
        //     });
        //   }
        //   window.addEventListener("load", initClientsSwiper);
        })();
      }, []); // Empty dependency array ensures the effect runs only once after initial render
    




    return(
        <><div>
         <footer id="footer"
       >
    
        <div className={`footer-top ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 d-none d-sm-block footer-links">
                {/* <h4>Useful Links</h4>
                <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Products</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Clients</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About Us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Careers</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
            </ul> */}
              </div>
              <div className="col-lg-3  col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link to="/services/service1"> App Fabrication</Link></li>
                <li><Link to="/services/service2"> Cyber Defense </Link> </li>
                <li> <Link to="/services/service3"> IT Consulting</Link></li>
                <li> <Link to="/services/service4">  Product Development </Link></li>
                <li> <Link to="/services/service5"> Software Testing Services </Link></li>
              
                  
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Address</h4>
               <ul>
                <li>Hebbal, Banglore</li>
                <li>INDIA-560089</li>
                <li>services@vaajlabs.com</li>
               </ul>
               <div className="social-links mt-3">
              <a href="https://www.instagram.com/vaajlabs?igsh=MzRlODBiNWFlZA==" target="_blank" className="twitter">    <FaInstagram size={22} color="white" /> </a>
              <a href="https://www.linkedin.com/in/director-vaajlabs-a842a0230/"   target="_blank" className="facebook"><FaLinkedin size={22} color="white"/></a>
            </div>
              </div>
    
            </div>
          </div>
        </div>
        <div className="container">
        <div class="copyright">
    <span>&copy; Copyright <strong><span>VAAJLABS</span></strong>. All Rights Reserved</span>
        <span className="count" style={{color:" #a2cce3"}}>Visitors: {count===0?(<ClipLoader size={10} color={"white"}/>):(count)}</span>   
      </div>
      {/* <div class="credits">
 
     
      </div> */}
          
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"> <FontAwesomeIcon icon={faArrowUp} /></a>
    </div>
    <div className="extra">khded</div>
    </>

    )
}
export default Footer