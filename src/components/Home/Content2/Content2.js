import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content2.css';
import Logo1 from './Logo1.jpg'
import Logo2 from './Logo2.png'
import Logo3 from './Logo3.png'
import Logo4 from './Logo4.png'
import Logo5 from './PwdLogo.jpg'

function BasicExample() {
  return (
    <>
    <div className='content2' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div className='content21'>
        <h2 style={{fontFamily:'lato',fontWeight:'700',fontSize:'32px'}}>Most Notable Clients 👀</h2>
        </div>
        <div className='content22' >
          <div style={{display:'flex',flexDirection:'row',margin:'10px 0px'}}>
          <div className='image21'><img className='Image' src={Logo1} alt='img' style={{margin:'0px 20px',width:'60px',height:'60px'}}/></div>
          <div className='image21'><img className='Image' src={Logo2} alt='img' style={{margin:'0px 20px',width:'113px',height:'60px'}}/></div>
          <div className='image21'><img className='Image' src={Logo3} alt='img' style={{margin:'0px 20px',width:'78px',height:'60px'}}/></div>
          </div>
          <div style={{display:'flex',flexDirection:'row',margin:'10px 0px'}}>
          <div className='image21'><img className='Image' src={Logo4} alt='img' style={{margin:'0px 20px',width:'60px',height:'60px'}}/></div>
          <div className='image21'><img className='Image' src={Logo5} alt='img' style={{margin:'0px 20px',width:'56px',height:'56px'}}/></div>
        </div>
        </div>
    </div>
    </>
  );
}

export default BasicExample;