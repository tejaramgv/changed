import {useContext} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShieldAlt, FaTasks, FaRoute,FaUsers,FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../AppContext';
import '../../App.css'

const About=()=>{
    AOS.init();
    const [state, setState] = useContext(AppContext);


    return(
<>
<section className={`breadcrumbs ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="200">
  
          <div className="d-flex justify-content-between align-items-center">
            <h2>About Us ~</h2>
           
          </div>
  
        </div>
      </section>
<section className={`why-us section-bg ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div class="container">

        <div class="row"  data-aos="fade-up" date-aos-delay="200">
          <div class="col-lg-6 video-box">
            <img src="./img/logo.png" class="img-fluid" alt=""/>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" target="_blank" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i >  <FaShieldAlt /></i></div>
              <h4 class="title"><a href="">VAAJLABS</a></h4>
              <p class="description">"VAAJLABS stands at the forefront of software development, aiming to provide pioneering solutions that enable enterprises and facilitate the shift towards digital evolution."</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i><FaTasks/></i></div>
              <h4 class="title"><a href="">What We Do</a></h4>
              <p class="description">App Frabication,
cyber Defense,
Product Development,
Software Testing Services,
Web Development,
IT Consulting,
Digital Marketing and Other Services</p>
            </div>

          </div>
        </div>

      </div>
    </section>


    <section className={`why-us section-bg ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
    <div class="container" data-aos="fade-up" date-aos-delay="200">
    <div class="row">
        <div class="col-lg-6 video-box col-order-2 col-order-md-1">
            <img src="./img/aboutus.jpg" class="img-fluid" alt=""/>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center p-5 col-order-2 col-order-md-1">
            <div class="icon-box">
                <div class="icon"><i><FaUsers /></i></div>
                <h4 class="title"><a href="">Our Staff</a></h4>
                <p class="description">Behind Vaaj Labs is a talented team of developers, designers, and digital strategists passionate about technology and driven by results. Our diverse expertise and collaborative spirit enable us to tackle complex projects and deliver outstanding outcomes for our clients.</p>
            </div>
            <div class="icon-box">
                <div class="icon"><i><FaRoute /></i></div>
                <h4 class="title"><a href="">Our Approach</a></h4>
                <p class="description">Our approach is centered around collaboration, creativity, and client satisfaction. We work closely with our clients to understand their goals, challenges, and vision, allowing us to develop customized solutions that exceed expectations.</p>
            </div>
        </div>
    </div>
</div>

    </section>


    <section id="team"  className={`team section ${!state?"home-sectionothers":"home-sectionothers-toggle"}`} >


<div class="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <div class="team-member d-flex align-items-start">
        <div class="pic"><img src="./team/team-1.jpg" class="img-fluid" alt=""/></div>
        <div class="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          <div class="social">
            <a href=""><i><FaTwitter/></i></a>
            <a href=""><i><FaFacebook/></i></a>
            <a href=""><i><FaInstagram/></i></a>
            <a href=""> <i><FaLinkedin/></i> </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
      <div class="team-member d-flex align-items-start">
        <div class="pic"><img src="./team/team-2.jpg" class="img-fluid" alt=""/></div>
        <div class="member-info">
          <h4>Sarah Jhonson</h4>
          <span>Product Manager</span>
          <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
          <div class="social">
          <a href=""><i><FaTwitter/></i></a>
            <a href=""><i><FaFacebook/></i></a>
            <a href=""><i><FaInstagram/></i></a>
            <a href=""> <i><FaLinkedin/></i> </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
      <div class="team-member d-flex align-items-start">
        <div class="pic"><img src="./team/team-3.jpg" class="img-fluid" alt=""/></div>
        <div class="member-info">
          <h4>William Anderson</h4>
          <span>CTO</span>
          <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
          <div class="social">
          <a href=""><i><FaTwitter/></i></a>
            <a href=""><i><FaFacebook/></i></a>
            <a href=""><i><FaInstagram/></i></a>
            <a href=""> <i><FaLinkedin/></i> </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
      <div class="team-member d-flex align-items-start">
        <div class="pic"><img src="./team/team-4.jpg" class="img-fluid" alt=""/></div>
        <div class="member-info">
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
          <div class="social">
          <a href=""><i><FaTwitter/></i></a>
            <a href=""><i><FaFacebook/></i></a>
            <a href=""><i><FaInstagram/></i></a>
            <a href=""> <i><FaLinkedin/></i> </a>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</section>

</>
    )
}
export default About