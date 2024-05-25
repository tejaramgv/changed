
import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom' 
import AOS from 'aos';
import { FaBriefcase } from 'react-icons/fa';
import 'aos/dist/aos.css';
import { Container, Typography, Button, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { AppContext } from '../AppContext';

const Careers = () => {
    const [careers,setCareers]=useState([{
        img:"./img/mern.png",
        type:"Internship",
        location:"Remote",
    open:"Open",
    domain:"MERN STACK DEVELOPER",
    content:"A MERN stack developer is responsible for creating full-stack web applications using MongoDB, Express.js, React, and Node.js. They design and implement user interfaces with React for front-end and back-end functionality, ensuring scalability and responsiveness.",
    description:"A MERN stack developer specializes in using MongoDB, Express.js, React, and Node.js to build dynamic web applications. They are responsible for developing, maintaining, and deploying web applications using these technologies. MERN stack developers should have a strong understanding of JavaScript and experience with the MERN stack components.",
    role:"A MERN stack developer is responsible for developing and maintaining web applications using the MongoDB, Express.js, React, and Node.js technologies. They collaborate with other team members to design and implement features, ensuring the application is responsive, efficient, and scalable. MERN stack developers also troubleshodrive sales growth for the companyot and debug issues, optimize performance, and stay updated with the latest trends and technologies in web development."    
},
    {
        img:"./img/fullstack.jpg",
        type:"Internship",
        location:"Remote",
    open:"Open",
    domain:"FULL STACK DEVELOPER",
    content:"A full-stack developer is a professional who possesses expertise in both front-end and back-end development. They are proficient in programming languages such as HTML, CSS, JavaScript for front-end development, and languages like Python, Java, or Ruby for back-end development.",
description:"We are seeking a talented and experienced Full-Stack Developer to join our team. As a Full-Stack Developer, you will be responsible for designing, developing, and maintaining both the front-end and back-end of our web applications. You will collaborate with cross-functional teams to deliver high-quality, scalable solutions that meet our clients' needs.",    
role:"As a Full-Stack Developer, your primary role will be to develop and maintain both the front-end and back-end of web applications. This includes collaborating with designers and product managers to translate requirements into technical specifications and writing clean, efficient code using languages like HTML, CSS, JavaScript, and frameworks such as React, Angular, or Vue.js. You will also be responsible for implementing responsive designs, optimizing databases."
},
    {
        img:"./img/python.jpeg",
        type:"Internship",
        location:"Remote",
    open:"Open",
    domain:"PYTHON DEVELOPER",
    content:"A Python developer is a professional who specializes in using the Python programming language to create software applications, websites, or automation scripts. They are proficient in writing clean, efficient, and maintainable code using Python libraries and frameworks such as Django, Flask, or PyQT. ",
    description:"We are seeking a skilled Python Developer to join our team. As a Python Developer, you will be responsible for designing, implementing, and maintaining Python-based applications and solutions. You will collaborate with cross-functional teams to develop efficient and scalable software solutions that meet our clients' needs.",
    role:"As a Python Developer, your primary role will be to design, develop, and maintain Python-based applications and software solutions. This includes writing clean and efficient code using Python programming language and collaborating with team members to translate business requirements into technical specifications. You will be responsible for conducting thorough testing and debugging to ensure software quality, optimizing application performance and scalability, and integrating data storage solutions such as SQL or NoSQL databases."       
},
    {
        img:"./img/bde.jpeg",
        type:"Full-Time / Part-Time / Internship",
        location:"banglore",
    open:"Open",
    domain:"BUSINESS DEVELOPMENT EXECUTIVE (IT CONSULTING)",
    content:"A Business Development Executive (BDE) is a professional responsible for identifying new business opportunities,drive sales growth for the company and  building client relationships, and expanding company's in market presence.",
    description:" Business Development Executive (BDE) is a professional responsible for identifying new business opportunities, building client relationships, and expanding the company's market presence. They analyze market trends, conduct research on competitors, and develop strategies to increase sales and revenue. BDEs often collaborate with marketing, sales, and product teams to develop effective business plans and promotional campaigns.",
    role:"As a Business Development Executive, your primary responsibility will be to identify new business opportunities and drive sales growth for the company. You will be expected to research and analyze market trends, generate leads, and build strong relationships with potential clients. This role involves developing and implementing effective business development strategies, including sales presentations, negotiations, and follow-ups to secure new contracts and partnerships."       
},
    {
        img:"./img/c.jpeg",
        type:"Internship",
        location:"Remote",
    open:"Open",
    domain:"C# DEVELOPER",
    content:"C# developer is a software professional specializing in using the C# programming language for developing applications, software solutions, and systems. They have a strong understanding of object-oriented programming concepts, .NET framework, and development tools like Visual Studio",
    description:"We are seeking a talented and experienced C# Developer to join our team. As a C# Developer, you will be responsible for designing, developing, and maintaining software applications using the C# programming language and the .NET framework. You will collaborate with cross-functional teams to deliver high-quality, scalable solutions that meet our clients' needs.",
    role:"As a C# Developer, your role will involve designing, developing, and maintaining software applications using the C# programming language and the .NET framework. You will collaborate with cross-functional teams to analyze requirements, implement features, conduct testing, and optimize application performance. Your responsibilities will also include integrating databases, staying updated with industry trends, participating in code reviews, and documenting technical specifications."      
},
    {
        img:"./img/php.jpeg",
        type:"Internship",
    open:"Open",
    location:"Remote",
    domain:"PHP DEVELOPER",
    content:"PHP developer is a professional who specializes in using the PHP programming language to create dynamic websites, web applications, and backend systems. They have a deep understanding of PHP syntax, Symfony, and database management systems such as MySQL or PostgreSQL.",
   
    description:"We are looking for a skilled PHP Developer to join our team. As a PHP Developer, you will be responsible for designing, developing, and maintaining web applications and solutions using PHP programming language. You will collaborate with cross-functional teams to deliver high-quality, scalable solutions that meet our clients' needs.",
    role:"As a PHP Developer, your primary responsibility will be to design, develop, and maintain web applications and solutions using PHP programming language. You will work closely with a team of developers and collaborate with stakeholders to analyze requirements, implement features, and ensure software quality. Your role will also involve integrating databases, optimizing application performance, staying updated with PHP frameworks and industry trends, and participating in code reviews. "    }]
    )
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [selectedCareer, setSelectedCareer] = useState(null); // State to hold the selected career

    AOS.init();
    const [state, setState] = useContext(AppContext);

    // Function to handle opening the modal and setting selected career
    const openModal = (career) => {
        setSelectedCareer(career);
        setShowModal(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className={`breadcrumbs ${!state ? "home-sectionothers" : "home-sectionothers-toggle"}`}>
                <div className="container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="200">
                    <div className="d-flex justify-content-center align-items-center">
                        <h2>Careers</h2>
                    </div>
                </div>
            </section>
            <section id="courses" className={`courses section ${!state ? "home-sectionothers" : "home-sectionothers-toggle"}`}>
                <div className="container">
                    <div className="row">
                        {careers.map(each => (
                            <div key={each.domain} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div style={{ background: "white" }} className="course-item mb-2">
                                    <img style={{ width: "100%",height:"30vh" }} src={each.img} className="img-fluid" alt="" />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-flex-center mb-3">
                                            <p className="category">{each.type}</p>
                                            <p style={{ color: "green" }} className="price">{each.open}</p>
                                        </div>
                                        <h3><a href="course-details.html">{each.domain}</a></h3>
                                        <p className="description">{each.content}</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <a href="" className="trainer-link">{each.location}</a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <Button variant="outlined"
                                                    
                                                    onClick={() => openModal(each)}
                                                >
                                                    View More
                                                </Button>
                                                <Button style={{margin:"0.3rem"}} variant="contained"><Link style={{color:"white"}} to={`/apply/${each.domain}`}>Apply</Link></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Modal */}
            {showModal && selectedCareer && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedCareer.domain} Details</h5>
                               
                            </div>
                            <div className="modal-body">
                                <h4>Description</h4>
                                <p>{selectedCareer.description}</p>
                                <hr/>
                                <h4>Role & Responsibilities</h4>
                                <p>{selectedCareer.role}</p>
                            </div>
                            <div className="modal-footer">
                                <button variant="outlined" type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Careers;
