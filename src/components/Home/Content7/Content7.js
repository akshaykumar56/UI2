import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card'

import Sunil from './Sunil.jpeg'
import Nikhil from './Nikhil.jpeg'
import Abhishek from './Abhishek.jpeg'
import Vikalp from './Vikalp.jpeg'
import Hitesh from './Hitesh.jpeg'
import Deepak from './Deepak.jpeg'
function BasicExample() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  return (
   
    <>
    <div className='content7 animation' style={{display:'flex',flexDirection:'column',fontFamily:'lato',fontSize:'32px'}} >
    <div className='curated' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'30px 0'}}>Testimonials ⭐</div>
    <Carousel responsive={responsive} style={{width:'100%',display:'block'}}>
  <div style={{height:'520px'}}><Card Logo={Sunil} text={"Silicon Garage exceeded my expectations with their website for Solitude Inn. Friendly, great communication, and on-time delivery!"} name={'Sunil Thakur'} owner={'Owner Solutude Inn'}/></div>
  <div style={{height:'520px'}}><Card Logo={Nikhil} text={"Silicon Garage delivered an exceptional website for Infinite Trails. They're friendly, communicate well, and meet deadlines. Thanks to their work, our customer base has grown significantly. Highly recommended!"} name={'Nikhil Thakur'} owner={'Business Head Infinite Trails'}/></div>
  <div style={{height:'520px'}}><Card Logo={Abhishek}  text={"Silicon Garage's website for E-fruit Hub has been a game-changer. Their friendly, timely, and effective work has boosted our marketplace connecting Himachal Pradesh growers with consumers."} name={'Abhishek Verma'} owner={'Owner E-Fruit Hub'}/></div>
  <div style={{height:'520px'}}><Card Logo={Vikalp} text={"Silicon Garage's website for Himachal Darpan Live TV has been a game-changer. Their friendly, punctual, and effective work has helped us reach and inform the people of Himachal Pradesh."} name={'Vikalp Singh'} owner={'Bureau Chief Himachal Darpan'}/></div>
  <div style={{height:'520px'}}><Card Logo={Hitesh} text={"Silicon Garage created our Coaching Center's website, Creative Coaching Classes. They're friendly, punctual, and excellent communicators. The site has expanded our student base and highlighted our achievements."} name={'Hitesh Chauhan'} owner={'Owner Creative Coaching Classes'}/></div>
  <div style={{height:'520px'}}><Card Logo={Deepak} text={"Silicon Garage crafted a website for Hotel Alpine Holiday Homes that exceeded our expectations. The website has significantly expanded our customer base "} name={'Deepak Kanwar'} owner={'Owner Alpine Holiday'}/></div>
  </Carousel>
    </div>
    </>
  );
}

export default BasicExample;

