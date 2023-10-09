import './FooterDetail.css';
import {Link} from 'react-router-dom'
import Img1 from './logo 1 1.png'
function Service() {
return (
<>
<div className='Footer-Details' >
   <div className='Box Box1'>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <img src={Img1} alt='Silicon'/>
        <h4 style={{color:'rgb(101, 200, 145)',display:'flex',justifyContent:'center',alignItems:'flex-end',margin:'0px 10px',height:'42px'}}>Silicon Garage</h4>
    </div>
        <h6 style={{margin:'10px 0px'}}>Email: garagesilicon@gmail.com</h6>
   </div>
   <div className='Box Box2'>
    <h3>Services</h3>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/services' style={{textDecoration:'none',color:'black'}}><h6>Software Development</h6></Link>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/services' style={{textDecoration:'none',color:'black'}}><h6>Web Development</h6></Link>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/services' style={{textDecoration:'none',color:'black'}}><h6>Social Media Management</h6></Link>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/services' style={{textDecoration:'none',color:'black'}}><h6>Content Creation</h6></Link>
   </div>
   <div className='Box Box3'>
    <h3>Support</h3>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/contact' style={{textDecoration:'none',color:'black'}}><h6>Contact Us</h6></Link>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/privacy' style={{textDecoration:'none',color:'black'}}><h6>Privacy Policy</h6></Link>
   </div>
   <div className='Box Box4'>
   <h3>Quick Links</h3>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/home' style={{textDecoration:'none',color:'black'}}><h6>Home</h6></Link>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/services' style={{textDecoration:'none',color:'black'}}><h6>Services</h6></Link>
    <Link onClick={()=>{window.scroll(0,0)}}  to='/projects' style={{textDecoration:'none',color:'black'}}><h6>Projects</h6></Link>
   </div>
</div>
</>
  );
}

export default Service;
