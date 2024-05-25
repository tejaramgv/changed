

import React, { useState, useEffect,useContext } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {FaHome,FaLaptopCode,FaCode,FaBars,FaTools,FaLightbulb,FaBug,FaReact } from 'react-icons/fa';
import {FaChartPie,FaTimes,FaPhoneAlt,FaInfoCircle,FaBell, FaChartBar, FaHeart, FaWallet, FaSignOutAlt, FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import CountUp from 'react-countup';
 // Import icons from react-icons
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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppContext } from '../AppContext';
import Swiper from 'swiper';
import '../../App.css'

const Home=()=>
    {
        const [state, setState] = useContext(AppContext);
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    AOS.init();
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
              offset -= 0.2;
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

<>
        <section className={`${!state?"home-section":"home-section home-section-toggle"}`}>
        <div className="text">
        <div className="animation">
    <div className="tag-list">
      <div className="loop-slider" style={{ "--duration": "15951ms", "--direction": "normal" }}>
        <div className="inner">
          <div className="tag"><span>#</span> App Development</div>
          <div className="tag"><span>#</span> Cyber Defense</div>
          <div className="tag"><span>#</span>IT Consulting</div>
          <div className="tag"><span>#</span> Product Development</div>
          <div className="tag"><span>#</span>Software Testing Services</div>
      
        </div>
      </div>
      <div className="loop-slider" style={{ "--duration": "15936ms", "--direction": "normal" }}>
        <div className="inner">
          <div className="tag"><span>#</span>IT Consulting</div>
          <div className="tag"><span>#</span>Product Development</div>
          <div className="tag"><span>#</span>Software Testing Services </div>
          <div className="tag"><span>#</span> App Development</div>
          <div className="tag"><span>#</span>Cyber Defense</div>
        </div>
      </div>
      <div className="fade"></div>
    </div>
    <div className="logo-container">
    <img className="mobile-logo" src="./img/logo.png" alt=""/>
  </div>
  <div  style={{marginTop:"-20px",background:"rgba(0, 0, 0, 0.75)",borderRadius:"20px 20px 0 0"}}><h4 style={{color:"white",padding:"10px",fontFamily:"sans-serif",fontStyle:"-moz-initial"}}>Providing technical needs to customers-Application Development & Cyber Security Solutions</h4>
  </div></div>
  <div className="logo-container1">
    <img className="logo" src="./img/logo.png" alt=""/>
  </div>
  </div>
      </section>
    
        <main id="main">
          <section className={`services ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
            <div className="container">
            <div className="section-title">
               <h2 style={{fontWeight:"bolder",color:"#06334a"}}>Services</h2>
              
              </div>
              <div className="row justify-content-center">
  
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
              <div className="icon-box icon-box-pink">
                <div className="icon"> <FaCode color={"pink"} style={{fontSize:"40px"}} /> </div>
                <h4 className="title" style={{color:"rgb(161, 51, 69)",fontWeight:"bolder"}}>App Fabrication</h4>
                <p className="description">There was a two-fold objective behind the founding of Vaaj Labs. We wanted to build a topnotch app development company and secondly, create amazing applications that are game-changing in scope and scale. We are well on our way to achieving both these objectives.</p>
              </div>
            </div> 
  
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box icon-box-cyan">
                <div className="icon"><RiShieldFill color="cyan" style={{fontSize:"40px"}} /></div>
                <h4 className="title" style={{color:"cyan",fontWeight:"bolder"}}>Cyber Defense</h4>
                <p className="description">We Conduct VAPT/Security testing as per the scope of work. Based on our findings, a detailed report will be submitted to you for implementing the measures that we suggested. Once the fixes are implemented by your IT personnel, we will initiate another Audit on the above scope.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box icon-box-green">
                <div className="icon"> <FaTools size={30} color="green" /></div>
                <h4 className="title" style={{color:"green",fontWeight:"bolder"}}>IT Consulting</h4>
                <p className="description">Our comprehensive IT consulting services encompass strategic planning, system integration, and innovative solutions to drive your business forward.</p>
              </div>
            </div>
           
  
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box icon-box-blue">
                <div className="icon"><FaLightbulb size={30} color="blue" /></div>
                <h4 className="title" style={{color:"blue",fontWeight:"bolder"}}>Product Development</h4>
                <p className="description">In our company, product development is a collaborative and innovative process focused on creating cutting-edge solutions that meet the evolving needs of our clients and customers.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box icon-box-red">
                <div className="icon"> <FaBug size={30} color="red" /></div>
                <h4 className="title" style={{color:"red",fontWeight:"bolder"}}>Software Testing Services</h4>
                <p className="description">In our company, software testing services are an integral part of our development process, ensuring that our software products meet the highest standards of quality and reliability.</p>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box icon-box-blue">
                <div className="icon"><FaReact size={30} color="#61DAFB" /></div>
                <h4 className="title" style={{color:"skyblue",fontWeight:"bolder"}}>Web Development Activites</h4>
                <p className="description">Web development encompasses various tasks such as planning, design, front-end and back-end development, database management, testing, deployment, and maintenance.</p>
              </div>
            </div>  */}
              </div>
            </div>
          </section>
  
  
          <section className={`about ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container">
  
          <div className="row">
            <div className="col-lg-6" data-aos="fadeup"  data-aos-delay="100">
              <img src="./img/homeabout.jpg" class="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fadeup"  data-aos-delay="100">
              <h3 style={{background:"#e6fdfc",padding:"10px",color:"#034d72"}}>VAAJLABS Leading Digital Transformation with Cutting-Edge Technology.</h3>
              <p className="fst-italic">
              Vaaj Labs is a trailblazing software development company dedicated to delivering innovative solutions that empower businesses and drive digital transformation. 
              </p>
              <ul>
                <li><IoCheckmarkCircleOutline color="skyblue" style={{ fontSize: '22px', fontWeight: 'bold' }}  /> App Frabication</li>
                <li><IoCheckmarkCircleOutline style={{ fontSize: '22px', fontWeight: 'bold' }} color="skyblue" /> cyber Defense</li>
                <li><IoCheckmarkCircleOutline style={{ fontSize: '22px', fontWeight: 'bold' }} color="skyblue" /> Product Development</li>
                <li><IoCheckmarkCircleOutline style={{ fontSize: '22px', fontWeight: 'bold' }} color="skyblue" /> Software Testing Services</li>
                <li><IoCheckmarkCircleOutline style={{ fontSize: '22px', fontWeight: 'bold' }} color="skyblue" /> IT Consulting</li>
  
  
  
               
              </ul>
              {/* <p>
              Behind Vaaj Labs is a talented team of developers, designers, and digital strategists passionate about technology and driven by results. 
              </p> */}
            </div>
          </div>
  
        </div>
      </section>
      {/* <section className={`facts section-bg ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container">
          <div className="row counters" data-aos="fadeup"  data-aos-delay="100">
            <div className="col-lg-3 col-6 text-center">
              <CountUp start={0} end={232} duration={10} />
              <p>Clients</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <CountUp start={0} end={521} duration={10} />
              <p>Projects</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <CountUp start={0} end={1463} duration={10} />
              <p>Hours Of Support</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <CountUp start={0} end={15} duration={10} />
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section> */}
  
      {/* <section className={`testimonials ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container" data-aos="fade">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <Slider {...settings}>
            <div className="testimonial-item">
              <img src="./img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <FaQuoteLeft className="quote-icon-left" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight className="quote-icon-right" />
              </p>
            </div>
            <div className="testimonial-item">
              <img src="./img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
              <h3>Walter White</h3>
              <h4>Chemist</h4>
              <p>
                <FaQuoteLeft className="quote-icon-left" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <FaQuoteRight className="quote-icon-right" />
              </p>
            </div>
            <div className="testimonial-item" data-aos="fadeup">
              <img src="./img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
              <h3>Jesse Pinkman</h3>
              <h4>Assistant</h4>
              <p>
                <FaQuoteLeft className="quote-icon-left" />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <FaQuoteRight className="quote-icon-right" />
              </p>
            </div>
          </Slider>
        </div>
      </section> */}
        
        </main>
        <div style={{background:"#F1E4E0",paddingBottom:"2%"}} className={`${!state?"home-sectionothers":"home-sectionothers-toggle"}`}> 
        <div className='container' data-aos="fadeup" data-aos-delay="200" >
        <div className="section-title">
               <h2 className="p-4" style={{fontWeight:"bolder",color:"#06334a"}}>Our Valued Clients</h2>
              
              </div>
          <div className="row justify-content-around">
            <div className="col-3 col-md-3 col-xl-3 my-2" >
              <img src="./mines.png" alt='' className="img-fluid"/>
            </div>
            <div className="col-3 col-md-3 col-xl-3 my-2">
              <img src="./defence.png" alt=""  className="img-fluid"/>
            </div>
            <div  className="col-3 col-md-3 col-xl-3 my-2">
             <center><img  src="./venkat.png" alt=""  className="img-fluid"/>
          </center>  </div>
          </div>
       
</div>
        </div>
        
        </>
    )
}
export default Home