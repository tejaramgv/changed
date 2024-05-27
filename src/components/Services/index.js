import {useState,useContext} from 'react'
import React, { useEffect } from 'react';
import { useParams,useLocation,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../AppContext';
import '../../App.css'

const Services=(props)=>{
    const [state, setState] = useContext(AppContext);
    const { serviceId } = useParams();
    const location = useLocation();
      useEffect(() => {
    document.title = `VAAJLABS${location.pathname}`;
  }, []);
// alert(serviceId)
    useEffect(() => {
      if (serviceId) {
        // alert(serviceId)
        const serviceElement = document.getElementById(serviceId);
        if (serviceElement) {
          serviceElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [serviceId]);
  
    return(
    <>
      <div className="breadcrumbs-wrapper">
         <section className={`breadcrumbs ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div classame="container">

        <div className="header-logo">
       
        <h2>Our Services</h2>
        <div className="logo_name"><div className="mark"><Link to="/"><img className="img" src={serviceId?"/img/tech.jpg":"./img/tech.jpg "} alt="" /></Link><span>&#174;</span></div></div>
        </div>

      </div>
    </section></div>
        <section className={`service-details ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container">
  
          <div className="row justify-content-center">
            <div id="service1" className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="/img/app.avif" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">App Fabrication</h5>
                  <p className="card-text">There was a two-fold objective behind the founding of VAAJLABS. We wanted to build a topnotch app development company and secondly, create amazing applications that are game-changing in scope and scale. We are well on our way to achieving both these objectives.</p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div id="service2" className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="/img/cyber.webp" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Cyber Defense</h5>
                  <p className="card-text">We Conduct VAPT/Security testing as per the scope of work. Based on our findings, a detailed report will be submitted to you for implementing the measures that we suggested. Once the fixes are implemented by your IT personnel.</p>
                  <div className="read-more"></div>
                </div>
              </div>
  
            </div>
            <div  id="service3" className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="/img/service-details-4.jpg" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">IT Consulting</h5>
                  <p className="card-text">Our comprehensive IT consulting services encompass strategic planning, system integration, and innovative solutions to drive your business forward.</p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div id="service4" className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="/img/product.png" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Product Development</h5>
                  <p className="card-text">Product development is a collaborative and innovative process focused on creating cutting-edge solutions that meet the evolving needs of our clients and customers. We have a dedicated team of skilled professionals.</p>
                  <div className="read-more"></div>
                </div>
              </div>
</div>
<div id="service5" className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="/img/testing.jpg" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Software Testing Services</h5>
                  <p className="card-text">In our company, software testing services are an integral part of our development process, ensuring that our software products meet the highest standards of quality and reliability.</p>
                  <div className="read-more"></div>
                </div>
              </div>
</div>
{/* <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/web.jpg" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Web development encompasses various tasks such as planning, design, front-end and back-end development, database management, testing, deployment, and maintenance.</p>
                  <div className="read-more"></div>
                </div>
              </div>
</div> */}
          </div>
   
        </div>
      </section>
</>
    )

}
export default Services