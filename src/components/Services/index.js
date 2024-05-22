import {useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../AppContext';
import '../../App.css'

const Services=()=>{
    const [state, setState] = useContext(AppContext);
    return(
    <>
      <section className={`breadcrumbs ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div classame="container">

        <div className="d-flex justify-content-center align-items-center">
          <h2>Our Services</h2>

        </div>

      </div>
    </section>
        <section className={`service-details ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container">
  
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/app.avif" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">App Fabrication</h5>
                  <p className="card-text">There was a two-fold objective behind the founding of Vaaj Labs. We wanted to build a topnotch app development company and secondly, create amazing applications that are game-changing in scope and scale. We are well on our way to achieving both these objectives.</p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/cyber.webp" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Cyber Defense</h5>
                  <p className="card-text">We Conduct VAPT/Security testing as per the scope of work. Based on our findings, a detailed report will be submitted to you for implementing the measures that we suggested. Once the fixes are implemented by your IT personnel, we will initiate another Audit on the above scope.</p>
                  <div className="read-more"></div>
                </div>
              </div>
  
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/service-details-4.jpg" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">IT Consulting</h5>
                  <p className="card-text">In business and engineering, new product development covers the complete process of bringing a new product to market., renewing an existing product or introducing a product in a new market.</p>
                  <div className="read-more"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/product.png" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Product Development</h5>
                  <p className="card-text">Product development is a collaborative and innovative process focused on creating cutting-edge solutions that meet the evolving needs of our clients and customers. We have a dedicated team of skilled professionals, including developers, designers, engineers, and project managers, who work together to conceptualize, design, build, and launch innovative products and services.</p>
                  <div className="read-more"></div>
                </div>
              </div>
</div>
<div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/testing.jpg" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Software Testing Services</h5>
                  <p className="card-text">In our company, software testing services are an integral part of our development process, ensuring that our software products meet the highest standards of quality and reliability. We employ a dedicated team of experienced QA engineers and testers who use industry-leading tools and methodologies to conduct thorough testing across various platforms and devices.</p>
                  <div className="read-more"></div>
                </div>
              </div>
</div>
<div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img src="./img/web.jpg" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Web development encompasses various tasks such as planning, design, front-end and back-end development, database management, testing, deployment, and maintenance. Designing user-centric interfaces, implementing interactive features, and ensuring cross-browser compatibility are crucial aspects of front-end development and Back-end development.</p>
                  <div className="read-more"></div>
                </div>
              </div>
</div>
          </div>
   
        </div>
      </section>
</>
    )

}
export default Services