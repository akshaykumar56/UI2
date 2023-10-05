import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from './icon_05.png'
import Logo2 from './icon_12.png'
import Logo3 from './icon_14.png'
import './content4.css'
function BasicExample() {

  return (
    <>
    <div className='content4 animation' style={{borderCollapse:'collapse',border:'2px solid transparent',borderRadius:'30px'}}>
        <div className='services' style={{backgroundColor:'#505050',color:'white',padding:'30px 40px'}}><h1>Our<br/>Services 🙌</h1>
        </div>
        <div className='actualServices' style={{backgroundColor:'#252331',color:'white'}}>
            <div className='service1' style={{padding:'10px 10px'}}><div className='logo'><img src={Logo1} alt='img' style={{margin:'10px 0px'}}></img></div><h5>App<br/> Development</h5><p>Our app development services deliver innovative and customized solutions that will elevate your brand and streamline your business operations.</p></div>
            <div className='service1' style={{padding:'10px 10px'}}><div className='logo'><img src={Logo2} alt='img' style={{margin:'10px 0px'}}></img></div><h5>Web<br/> Development</h5><p>Our web development services offer tailored solutions that create engaging user experiences and drive your business growth.</p></div>
            <div className='service1' style={{padding:'10px 10px'}}><div className='logo'><img src={Logo3} alt='img' style={{margin:'10px 0px'}}></img></div><h5>Social Media<br/>Management</h5><p>Our social media management services help you build and maintain a strong online presence, engaging with your audience and driving conversions.</p></div>
            <div className='service1 hover' style={{padding:'10px 10px'}}><div className='logo '><img src={Logo3} alt='img' style={{margin:'10px 0px'}}></img></div><h5>SEO & Digital<br/>Marketing</h5><p>Our SEO and digital marketing services improve your website's visibility, drive traffic, and maximize conversions through effective strategies and tactics.</p></div> 
        </div>
    </div>
    </>
  );
}


export default BasicExample; 