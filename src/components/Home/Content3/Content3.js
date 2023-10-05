import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content3.css';
import Image1 from './Rectangle 13.png'
import Image3 from './Image1.png'
import Image2 from './speaker.png'
function BasicExample() {
  return (
    <>
    <div className='content3 animation'>
   <div className='image3' style={{position:'relative',padding:'20px 50px'}}><div className='image31'><img src={Image1} alt='img' style={{height:'100%',width:'78%',margin:'0px 20px',position:'absolute',zIndex:'1'}}/><img src={Image3} alt='img' style={{height:'100%',position:'absolute',width:'80%',margin:'0px 20px',zIndex:'0',right:'20%'}}/></div></div>
   <div className='right' style={{display:'flex',flexDirection:'column'}}> 
   <div className='speaker'><img src={Image2} alt='img' style={{height:'100px',width:'100px',margin:'0px 20px'}}/></div>
   <div className='text3' style={{height:'auto',fontFamily:'BDSuper',fontSize:'34px'}}>We're a 💻📱💡 agency that <div className='gradient' style={{display:'inline',color:'white',fontSize:'34px'}}>focuses on</div> creating 👀👌 products that <div className='gradient' style={{display:'inline',color:'white',fontSize:'34px'}}>drive 🚀</div> businesses forward.<br/><br/>
   We work with clients <div className='gradient' style={{display:'inline',color:'white',fontSize:'34px'}}>around </div>the 🌍 to build software and apps that help them <div  style={{border:'2px solid red',display:'inline',borderRadius:'70%',padding:'0 8px 0 0'}}><div style={{border:'2px solid red',display:'inline',borderRadius:'70%'}}>succeed</div></div> faster.</div>
   </div>
   </div>
    </>
  );
}

export default BasicExample; 