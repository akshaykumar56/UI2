import './Contact.css'
import "../Home/fonts/BDSupperBold.ttf"
import {useRef} from 'react'
import Swal from 'sweetalert2'
import Img from './Vector.png'
import Img2 from './Vector2.png'
import Img3 from './Fiverr.png'
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
function Contact() {
  const Alert = () => {
    Swal.fire({
      title: "Your message is sent successfully!",
      icon: "success",
      confirmButtonText: "Okay"
    })
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lb5skql', 'template_s5678', form.current, '62nD4k1jHU0majk5T')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
<>
<div className='Contact' >
 <div className='Contact-Heading-1' style={{width:'100%'}}>Contact Us</div>
 <div className='Contact-Heading-2' style={{width:'100%',fontFamily:'BDSuper',color:'grey'}}>Have a Project?</div>
 <div className='Contact-Box'>
 <div className='Contact-Box-1'>
    <div>
        <div className='Contact-Box-11' style={{fontFamily:'Montserrat'}}>
            What can we do for you?
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div className='Contact-Button'>

        <div className="button" >
        <input type="radio" id="a25" name="contactfor" value='Software Development' />
        <label className="btn btn-default" htmlFor="a25" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Software Development</label>
        </div>

        <div className="button">
        <input type="radio" id="a50" name="contactfor" value='Web Development' />
        <label className="btn btn-default" htmlFor="a50" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Web Development</label>
        </div>

        <div className="button">
        <input type="radio" id="a75" name="contactfor" value='Contect Creation' />
        <label className="btn btn-default" htmlFor="a75" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Content Creation</label>
        </div>

        <div className="button">
        <input type="radio" id="a100" name="contactfor" value='Other' />
        <label className="btn btn-default" htmlFor="a100" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Other</label>
        </div>
        </div>
        <div className='contact-input1'>
        <TextField type='text' className='contact-input1-input' id="Your-Name" label="Your Name" name='from_name' variant="standard"  style={{margin:'20px 20px 0px 0px'}}/>
        <TextField type='email' className='contact-input1-input' id="Your-Email" label="Your Email" name='from_email' variant="standard"  style={{margin:'20px 20px 0px 0px'}}/>
        </div>
        <div className='contact-input2'>
        <TextField type='text' id="Project-Details" label="Project Details" variant="standard" name='message' style={{margin:'20px 20px 0px 0px',width:'98%'}}/>
        </div>
        <div>
            <button type='submit' onClick={Alert} className='Contact-Submit-Button' style={{margin:'30px 0px 0px 0px',border:'none',fontSize:'20px',backgroundColor:'transparent',fontFamily:'BDSuper'}}>Send Request</button>
            <input type="reset" defaultValue="Reset" placeholder='Reset' style={{backgroundColor:'transparent',color:'black',fontFamily:'BDSuper',fontSize:'20px',margin:'0px 0px 0px 100px',border:'0'}}/>
        </div>
        
        </form>
    </div>
 </div>
 <div className='Contact-Box-2'>
    <div style={{fontFamily:'BDSuper'}}>Tell us about your vision: which challenges are you facing? What are your goals and expectations? What would success look like and how much are you planning to get there?</div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}><div><a href='https://www.facebook.com/garagesilicon' target='_blank' rel="noreferrer"><img className='Image1' src={Img} alt='img1' /></a></div><div><a href='https://www.instagram.com/silicongarage/?img_index=1' target='_blank' rel="noreferrer"><img className='Image2' src={Img2} alt='img1' /></a></div><div style={{margin:'0px 3px'}}><a href='https://www.fiverr.com/sillicongarage' target='_blank' rel="noreferrer"><img className='Image2' src={Img3} alt='img1' /></a></div></div>
 </div>
  </div>
  </div>
</>
  );
}

export default Contact;