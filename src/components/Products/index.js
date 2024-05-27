import {useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../AppContext'
import {useLocation} from 'react-router-dom'
import { FaQuoteLeft, FaQuoteRight, FaUserAlt, FaShieldAlt  } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { RiPlantLine } from 'react-icons/ri';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'


const Products=()=>{
  const location = useLocation();
  useEffect(() => {
document.title = `VAAJLABS${location.pathname}`;
}, []);
    AOS.init();
    const [state, setState] = useContext(AppContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Add auto-scroll
        autoplaySpeed: 2000, // Set auto-scroll speed in milliseconds
        arrows: false // Remove left and right arrows
      };
      


    return(
        <>
        <div className="breadcrumbs-wrapper">
         <section className={`breadcrumbs ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div classame="container">

        <div className="header-logo">
       
        <h2>Our Products</h2>
        <div className="logo_name"><div className="mark"><Link to="/"><img className="img" src="./img/tech.jpg" alt="" /></Link><span>&#174;</span></div></div>
        </div>

      </div>
    </section></div>
        <section className={`testimonials ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container" data-aos="fade">
          <div className="section-title">
            {/* <h2>Our Products</h2> */}
            <p>VAAJLABS pioneers transformative artificial intelligence and machine learning solutions, empowering businesses of all sizes to achieve greater efficiency and innovation. Explore our comprehensive suite of solutions, meticulously crafted to address the unique needs of your industry.</p>
          </div>
          <Slider {...settings}>
  <div style={{ position: "relative", border: "solid 2px red", width: "100%", height: "50%" }}>
    <center><strong><span>AGRICULTURE POST HARVESTING</span></strong></center>
    <img
      src="./img/harvest.jpg"
      className="img-fluid"
      style={{ width: "100%", height: "40vh", objectFit: "cover" }}
      alt=""
    />
    
  </div>
  <div style={{ position: "relative", border: "solid 2px red", width: "100%", height: "50%" }}>
  <center><strong><span>CONSUMER SERVICE</span></strong></center>
    <img
      src="./img/consumer.jpg"
      className="img-fluid"
      style={{ width: "100%", height: "40vh", objectFit: "cover" }}
      alt=""
    />
   
  </div>
  <div style={{ position: "relative", border: "solid 2px red", width: "100%", height: "50%" }}>
 
  <center><strong><span>AI  & ML BASED THREAT DETECTION SYSTEM</span></strong></center>   <img
      src="./img/ai.png"
      className="img-fluid"
      style={{ width: "100%", height: "40vh", objectFit: "cover" }}
      alt=""
    />
  </div>
  
</Slider>
        </div>
      </section>


      <section className={`why-us section-bg ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div class="container">

        <div class="row"  data-aos="fade-up" date-aos-delay="200">
          <div class="col-lg-6 video-box">
            <img src="./img/harvest.jpg" class="img-fluid" alt=""/>
           
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i><RiPlantLine /></i></div>
              <h4 class="title"><a>AGRICULTURE POST HARVESTING</a></h4>
              <p class="description">Our agricultural post-harvesting solution encompasses a suite of tools and technologies designed to optimize every stage of the post-harvest process. From harvesting to packaging and distribution, our integrated solution ensures efficiency, quality, and sustainability throughout the supply chain. By leveraging advanced sensors, automation, and data analytics, we empower farmers and food producers to minimize losses, reduce costs, and deliver fresh, high-quality produce to consumers worldwide.</p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section className={`why-us section-bg ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div class="container">

        <div class="row"  data-aos="fade-up" date-aos-delay="200">
          <div class="col-lg-6 video-box">
            <img src="./img/consumer.jpg" class="img-fluid" alt=""/>
           
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i><FaUserAlt /></i></div>
              <h4 class="title"><a>CONSUMER SERVICE</a></h4>
              <p class="description">In today's hyper-connected world, exceptional customer service is non-negotiable. Our customer service solution combines intuitive interfaces, intelligent automation, and real-time analytics to deliver seamless and personalized customer experiences across all touchpoints. Whether through chatbots, self-service portals, or live support channels, we enable businesses to anticipate customer needs, resolve issues efficiently, and foster long-term loyalty and advocacy.</p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section className={`why-us section-bg ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div class="container">

        <div class="row"  data-aos="fade-up" date-aos-delay="200">
          <div class="col-lg-6 video-box">
            <img src="./img/ai.png" class="img-fluid" alt=""/>
           
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i>< FaShieldAlt /></i></div>
              <h4 class="title"><a href="">AI & ML THREAT DETECTION SYSTEM</a></h4>
              <p class="description">Cybersecurity threats continue to evolve in sophistication and scale, posing significant risks to businesses of all sizes. Our AI and ML-based threat detection system provides comprehensive protection against cyber threats by continuously monitoring network traffic, analyzing patterns, and detecting anomalies in real-time. Powered by advanced algorithms and deep learning models, our solution delivers unparalleled accuracy and speed in identifying and mitigating cyber threats, ensuring the integrity and security of critical assets and data.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    
      </>
    )
}
export default Products