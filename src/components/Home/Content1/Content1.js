import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content1.css';
import {Link} from 'react-router-dom'
import Img1 from './Img1.svg'
import Img2 from './Img2.svg'
import Img3 from './Img3.svg'
import Img4 from './Img4.svg'
function BasicExample() {
  return (
    <>
    <div className='content1'>
        <div className='text1' >
        <div className='text11'><div className='text111' >Transforming your ideas into digital reality</div>
        <div className='text11' style={{margin:'10px 0px',fontFamily:'lato'}}>We specialize in crafting tailored apps and websites that cater to your unique business needs.</div>
        <div className='button-home' style={{display:'flex',flexDirection:'row',width:'600px',justifyContent:'flex-start'}}>
            <Link to='/services' style={{color:'white',textDecoration:'none'}}><div className='button1-home' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'60px',borderRadius:'10px',backgroundColor:'#65C891',margin:'30px 30px 0px 0px',fontFamily: 'Montserrat'}}>Services</div></Link>
            <Link to='/projects' style={{color:'white',textDecoration:'none'}}><div className='button1-home' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'60px',borderRadius:'10px',backgroundColor:'#3CCDE9',margin:'30px 0px 0px 0px',fontFamily: 'Montserrat'}}>Projects</div></Link>
            </div> 
        </div>
        </div>

      <div className='image1' style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
      <div id="mainDiv">
    <div id="boxDiv">
        <div id="front" style={{backgroundImage:`url(${Img1})`}}></div>
        <div id="back" style={{backgroundImage:`url(${Img2})`}}></div>
        <div id="left" style={{backgroundImage:`url(${Img3})`}}></div>
        <div id="right" style={{backgroundImage:`url(${Img4})`}}></div>
        <div id="top" style={{backgroundImage:`url(${Img4})`}}></div>
        <div id="bottom" style={{backgroundImage:`url(${Img4})`}}></div>
        
        <div className="shadow"></div>
    </div>
</div>
<div style={{height:'100px'}}>
  </div>    

      </div>
    </div>
    </>
  );
}

export default BasicExample;