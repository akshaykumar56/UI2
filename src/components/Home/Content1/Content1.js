import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content1.css';
import {Link} from 'react-router-dom'
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

        <div className='image1' style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}><div className='image11'><div className='block block1' style={{height:'205.25px',width:'205.25px'}}></div><div className='block block2' style={{height:'242.41px',width:'267.75px'}}></div><div className='block block3' style={{height:'247.48px',width:'299px',boxShadow:'0px 20px 70px 10px #65C891'}}></div></div></div>
    </div>
    </>
  );
}

export default BasicExample;