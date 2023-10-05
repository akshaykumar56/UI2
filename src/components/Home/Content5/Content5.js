import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from './Card'
import Logo1 from './Logo1.png'
import Logo2 from './Logo2.png'
import Logo3 from './Logo3.png'
import Logo4 from './Logo4.png'
import Logo5 from './Logo5.png'
import Logo6 from './Alpine.png'

import HTML from './html.png'
import Css from './Css.png'
import Javas from './Javascript.png'
import Pr from './Pr.png'
import Ps from './Ps.png'
import Python from './Python.png'
import React1 from './React.png'

import Wordpress from './Wordpress.png'

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
    <div className='content5 animation' style={{display:'flex',flexDirection:'column'}} >
    <div className='curated my-3' style={{display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'lato',fontSize:'32px'}}>Curated Projects 🔨</div>
    <Carousel responsive={responsive} style={{width:'100%',display:'block'}}>
  <div style={{height:'600px'}}><Card Logo={Logo1} Img1={Python} Img2={HTML} Img3={Css} Img4={Javas} title={'IGMC'} text={'UI / App Development'}/></div>
  <div style={{height:'600px'}}><Card Logo={Logo3} Img1={Ps} Img2={React1} Img3={HTML} Img4={Css} title={'Election Commesion'} text={'Web Development'}/></div>
  <div style={{height:'600px'}}><Card Logo={Logo2} Img1={Ps} Img2={Pr} title={'BJP'} text={'Graphic Designing / SMM'}/></div>
  <div style={{height:'600px'}}><Card Logo={Logo4} Img1={Wordpress} title={'Solitude Inn'} text={'Web Development'}/></div>
  <div style={{height:'600px'}}><Card Logo={Logo5} Img1={Wordpress}  title={'Infinite Trails'} text={'Web Development'}/></div>
  <div style={{height:'600px'}}><Card Logo={Logo6} Img1={Wordpress}  title={'Alpine Holiday'} text={'Web Development2'}/></div>
  </Carousel>
    </div>
    </>
  );
}

export default BasicExample;

