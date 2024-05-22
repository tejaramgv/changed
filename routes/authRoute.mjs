    // import express from 'express';
    // import nodemailer from 'nodemailer';
    // import bodyParser from 'body-parser'
    // import {feedbackController,contactController,countController} from '../controllers/authController.mjs'
    // const app=express()

    // const router=express.Router()
    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'gvtejeshreddy111@gmail.com',
    //     pass: 'dnjy uubm kynd dxbj ', 
    //   },
    // });
    // router.post('/feedback',feedbackController)
    // router.post('/contact',contactController)
    // router.put('/countupdate',countController)

    // router.post('/apply',async (req, res) => {
    //     const { name, email, phoneno, resume } = req.body;
    
    //     // Send email with resume content as attachment
    //     try {
    //       await transporter.sendMail({
    //         from: 'gvtejeshreddy111@gmail.com',
    //         to: 'gvtejeshreddy111@gmail.com',
    //         subject: 'Application Submission',
    //         text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneno}\n\nPlease find attached my resume.`,
    //         attachments: [
    //           {
    //             filename: 'resume.pdf', // Change the filename as needed
    //             content: resume, // Use the resume content directly from the request
    //           },
    //         ],
    //       });
    //       console.log('Email sent successfully');
    //       res.status(200).json({ message: 'Email sent successfully' });
    //     } catch (error) {
    //       console.error('Error sending email:', error);
    //       res.status(500).json({ error: 'Error sending email' });
    //     }
    //   });
    
    
    



    // export default router;

    // import express from 'express';
    // import nodemailer from 'nodemailer';
    // import bodyParser from 'body-parser';
    // import fileUpload from 'express-fileupload';

    // const app = express();
    // const router = express.Router();

    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());
    // app.use(fileUpload());

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'gvtejeshreddy111@gmail.com',
    //       pass: 'dnjy uubm kynd dxbj ', 
    //     },
    //   });

    // router.post('/apply', async (req, res) => {
    //   const { name, email, phoneno } = req.body;
    //   console.log(name);
    //   const resume = req.files.resume; // Access resume file from req.files object
    // console.log(resume);
    //   if (!resume) {
    //     return res.status(400).json({ success: false, error: 'Resume file is required' });
    //   }

    //   // Send email with resume content as attachment
    //   try {
    //     await transporter.sendMail({
    //       from: 'gvtejeshreddy111@gmail.com',
    //       to: 'gvtejeshreddy111@gmail.com',
    //       subject: 'Application Submission',
    //       text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneno}\n\nPlease find attached my resume.`,
    //       attachments: [
    //         {
    //           filename: resume.name, // Use the original filename for the attachment
    //           content: resume.data, // Use the resume data from the file
    //         },
    //       ],
    //     });
    //     console.log('Email sent successfully');
    //     res.status(200).json({ success: true, message: 'Email sent successfully' });
    //   } catch (error) {
    //     console.error('Error sending email:', error);
    //     res.status(500).json({ success: false, error: 'Error sending email' });
    //   }
    // });

    // export default router;



    import express from 'express';
    import multer from 'multer';
    import nodemailer from 'nodemailer';
    import {feedbackController,contactController,countController,appliedController,applyController} from '../controllers/authController.mjs'

    const app = express();

    const router = express.Router();
    // Multer setup
    router.post('/feedback',feedbackController)
    router.post('/contact',contactController)
    router.put('/countupdate',countController)
    router.post('/applied',appliedController)
    router.post('/add',applyController)
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'careers.vaajlabs@gmail.com',
        pass: 'wtcj lqcc uzpz yihn ', 
        },
    });

    // Route to handle email sending
    router.post('/apply', upload.single('resume'), async (req, res) => {
    const {jobname,firstname,lastname,middlename,email,phoneno,selectedCountry,state,city,pincode,address,degree,fieldOfStudy
    ,institutionname,location,graduationyear,gpa} = req.body;
    const { originalname, buffer } = req.file;

    const mailOptions = {
        from: 'careers.vaajlabs@gmail.com',
        to: ['careers@vaajlabs.com','careers.vaajlabs@gmail.com'],
        subject: 'Job Application',
        text: `
        Application For: ${jobname}
        
        Personal Details:
        Name: ${firstname} ${middlename} ${lastname}
        Email: ${email}
        Phone: ${phoneno}
        
        Address:
        Country: ${selectedCountry}
        State: ${state}
        City: ${city}
        Pincode: ${pincode}
        Address: ${address}
        
        Education:
        Degree/Certificate: ${degree}
        Field of Study/Major: ${fieldOfStudy}
        Institution Name: ${institutionname}
        Location: ${location}
        Graduation Year: ${graduationyear}
        GPA: ${gpa}
        
        Find the Resume in Below Attachment:
        `,
        
        attachments: [{ filename: originalname, content: buffer }],
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({success:true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({success:false, error: 'An error occurred while sending email' });
    }
    });


    router.post('/send-otp',async(req,res)=>{
        const{generatedotp,mail}=req.body
        console.log(generatedotp)
        console.log(mail)
        const mailOptions = {
            from: 'careers.vaajlabs@gmail.com',
            to: mail,
            subject: 'Verification OTP',
            text: `Dear User,\n\nYour One-Time Password (OTP) for accessing Vaaj Labs's services is: ${generatedotp}.\n\n
            \n\nThank you,\nVaaj Labs Team`
          };
          
    
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({success:true, message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({success:false, error: 'An error occurred while sending email' });
        }



    })


    export default router;