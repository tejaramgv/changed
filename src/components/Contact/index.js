import {useState,useContext} from 'react'
import { FaMapMarkerAlt,FaEnvelope } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import axios from 'axios'
import { ClipLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import { AppContext } from '../AppContext';

const Contact=()=>{
    AOS.init();
    const [state, setState] = useContext(AppContext);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneno,setPhone]=useState("")
    const [feedback,setFeedback]=useState("")
    const [submit,setSubmit]=useState(false)
    const [submitted,setSubmitted]=useState(false)
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const checked=()=>setIsCaptchaVerified(true)
    const nAme=(e)=>setName(e.target.value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[^\s@]+)?$/;

    const eMail=(e)=>{setEmail(e.target.value)
    
      setIsValidEmail(emailRegex.test(email));
    }
    const check=(e)=>{
      if(e.key==="Enter"){setEmail(e.target.value)
   

      setIsValidEmail(emailRegex.test(email));}
    }
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

    const pHone = (e) => {
      const input = e.target.value.replace(/\D/g, '');
      if (input.length <= 10) {
        setPhone(input);
        setIsValidPhoneNumber(true);
      } else {
        setIsValidPhoneNumber(false);
      }
    };
    const fEed=(e)=>setFeedback(e.target.value)

    const handleSubmit=async()=>{
        if(name.length<3){
         toast.error('name is too short!');
         return;
        }
        if(!isValidEmail){
          toast.error('Enter valid mail');
          return;
        }
        if(!email){
         toast.error('Enter valid mail');
         return;
        }
        if(phoneno.length<10 || phoneno.length>10){
         toast.error('Enter valid mobile number');
         return;
        }
        if(!feedback){
         toast.error('Enter message');
         return;
        }
        if(!isCaptchaVerified){
          toast.error('Please Complete Captcha')
          return;
         }
        setSubmit(true)
        setEmail("")
        setName("")
        setPhone("")
        setFeedback("")
        try {
         const res = await axios.post(`http://localhost:8081/api/v1/auth/contact`, { name, email,phoneno,feedback });
         console.log(res);
   
         if (res.data.success) {
            toast.success(res.data.message);
          setSubmit(false);
         } else {
           console.log('fail');
   
           setSubmit(false)
           toast.error(res.data.message);
         }
       } catch (error) {
         console.error(error);
         setSubmit(false)
         toast.error('Something went wrong!');
       }
     }
    
    



    return(
        <>
        <Toaster/>
       <section className={`breadcrumbs ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="200">
  
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contact US --</h2>
           
          </div>
  
        </div>
      </section>
      <section className={`contact ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="200">
  
          <div className="row">
  
            <div className="col-lg-6">
  
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i><FaMapMarkerAlt /></i>
                    <h3>Our Address</h3>
                    <p>Hebbal, Banglore</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="info-box">
                    <i ><FaEnvelope /></i>
                    <h3>Email Us</h3>
                    <p>services@vaajlabs.com</p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="info-box">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                  </div>
                </div> */}
              </div>
  
            </div>
  
            <div className="col-lg-6">
              <div className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required
                     onChange={nAme} value={name} />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required
                         value={email}
                         onKeyUp={check}
                         onChange={eMail} />
                          {!isValidEmail && <span className="validemail" style={{ color: 'red' }}>Please enter a valid email address.</span>}
                  </div>
                </div>
                <div className="form-group mt-3">
                <input
        type="text"
        className='form-control'
        id="phone"
        placeholder="Enter Mobile Number"
        value={phoneno}
        onChange={pHone}
        maxLength={10} // Limit input to 10 characters
        style={{ borderColor: isValidPhoneNumber ? 'initial' : 'red' }}
      />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" value={feedback} onChange={fEed}  name="message" rows="5" placeholder="Message" required></textarea>
                </div>
              
               
                <ReCAPTCHA style={{marginTop:"1%"}}
          sitekey="6Lcewa4pAAAAAAU17wtRvHROv0COVcLCFircmr4z"
          onChange={checked}
       
        />
                <div className="text-center">
                {submit?<ClipLoader color="green"  size={17} />: <button style={{margin:"2%"}} type="submit" onClick={handleSubmit} >
          Send Message
        </button>}
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
  
   
      <section className={`map ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
        <div className="container p-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8892219012364!2d77.59663121417456!3d12.971598490855911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c23e7c61%3A0xf8df3e5ca916a7c1!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sbg!4v1621588845381!5m2!1sen!2sbg" width="1000" height="250" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div>
      </section>
      </>

    )
}
export default Contact