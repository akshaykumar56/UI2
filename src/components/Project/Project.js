import './Project.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom';

import Img1 from './1.png'
import Img2 from './2.png'
import Img3 from './3.png'
import Img4 from './4.png'
import Img5 from './5.png'
import Img6 from './6.png'
import Img7 from './7.png'
import Img8 from './8.png'



import Img17 from './PWD.png'
import Img18 from './Lab.png'
import Img19 from './RPLCanada.png'
import Img20 from './HIMCO.png'
import {useState} from 'react';
function Service() {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const [name,setName]=useState("1");
  function fun1(){
    setName("1")
  }
  function fun2(){
    setName("2")
  }
  function fun3(){
    setName("3")
  }
  // function fun4(){
  //   setName("4")
  // }
  return (
<>
<div className='main-Projects' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',position:'relative'}}>
    <div className='main-Projects-Inner' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div  className='Our-Projects' style={{fontSize:'40px',fontFamily:'BDSuper',}}>OUR PROJECTS</div>
        <div className='Our-Projects-Text' style={{fontFamily:'lato',fontWeight:'500',textAlign:'center'}}>Over the years we've worked with extraordinary individuals and institiutions to make their digital dream alive.</div>
    </div>
    

    <div className='Projects' style={{display:'flex',flexDirection:'column'}}>
    <div className='Projects-Button-Box' style={{margin:'50px 0px 100px 0px'}}>
    <button  className="button" id="button1" onClick={fun1} style={{fontFamily:'BDSuper',backgroundColor:(name==='1'?'red':'black')}}>Software Development</button>
    <button  className="button" id="button2" onClick={fun2} style={{fontFamily:'BDSuper',backgroundColor:(name==='2'?'red':'black')}}>Web Development</button>
    <button  className="button" id="button3" onClick={fun3} style={{fontFamily:'BDSuper',backgroundColor:(name==='3'?'red':'black')}}>Social Media Management</button>
    {/* <button  className="button" id="button4" onClick={fun4} style={{fontFamily:'BDSuper',backgroundColor:(name==='4'?'red':'black')}}>Content Management</button> */}
    </div>

    <div className='Projects-Images-Main'>
   {(() => {
  switch(name) {
    case "1":   return <div key={1} className='App-Development' responsive={responsive} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img18})`,backgroundSize:'cover',position:'relative'}}>
<div className='Project-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                IGMC
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Streamlined lab operations at Indira Gandhi Medical College Shimla with a barcode-based LIMS for efficient sample tracking and online report access.
                <Link to='/igmc' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
</div>
  </div>;
    
case "2":   return <Carousel key={2} className='Web-Development' responsive={responsive}>
<div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img2})`,backgroundSize:'cover',position:'relative'}}>
<div className='Project-heading' key={21} style={{fontFamily:'BDSuper'}}>
                E-Fruit Hub
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Empowered Himachal Pradesh farmers through Efruit Hub's WordPress site, enabling direct sales and income enhancement, backed by Razorpay and Shiprocket.
                <Link to='/efruit' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
</div>

<div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img20})`,backgroundSize:'cover',position:'relative'}}>
<div className='Project-heading' key={21} style={{fontFamily:'BDSuper'}}>
                HIMCOFED
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Built a dynamic HIMCO website using React and Strapi, combining robust functionality with seamless user experience.
                <Link to='/himcofed' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
</div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img3})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={22} style={{fontFamily:'BDSuper'}}>
                 Infinite Trails
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Elevated Infinite Trails' travel business with a custom WordPress site featuring interactive tour packages and lightning-fast performance.
                <Link to='/infinitetrails' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img4})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={23} style={{fontFamily:'BDSuper'}}>
                 Himachal Darpan Live TV
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Crafted Himachal Darpan Live TV's website from scratch using WordPress and PHP, offering user-friendly access to Himachal Pradesh news.
                <Link to='/himachaldarpan' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img5})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={24} style={{fontFamily:'BDSuper'}}>
                 Pergo
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Empowered PERGO, Shimla's non-profit, with a WordPress-PHP site showcasing their legal work and achievements effectively.
                <Link to='/pergo' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>

        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img6})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={25} style={{fontFamily:'BDSuper'}}>
                 Creative Coaching Classes
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Elevated Creative Coaching Classes with a tailor-made WordPress-PHP site, spotlighting courses and student triumphs brilliantly.
                <Link to='/creativecoaching' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>

        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img7})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={26} style={{fontFamily:'BDSuper'}}>
                 Solitude Inn
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Elevated Solitude Inn's bookings with an elegant website, optimized UI/UX, and lead-generating contact form.
                <Link to='/solitudeinn' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>

        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img8})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={27} style={{fontFamily:'BDSuper'}}>
                Alpine Holiday Home
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Transformed Alpine Holiday Homes' online presence with an elegant website, boosting bookings per query through a sleek UI/UX and lead capture form.
                <Link to='/alpine' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>
  </Carousel>;


case "3":   return <Carousel key={3} className='Social-Media-Management' responsive={responsive}>
<div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img1})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={31} style={{fontFamily:'BDSuper'}}>
                 BJP
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Elevated BJP candidates campaigns with captivating social media content and video editing for Himachal Pradesh elections 2021-2022.
                <Link to='/bjp' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>


        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img17})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={32} style={{fontFamily:'BDSuper'}}>
                PWD
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Boosted HPPWD's social presence, reaching 2.8k organic Facebook followers, delivering vital info during the 2023 Himachal Floods.
                <Link to='/pwd' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img19})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={33}>
                 RPL Canada
                </div>
                <div className='Project-text' style={{fontFamily: 'Montserrat'}}>
                Crafted engaging content for RPL Canada's cricket tournament, Realtors Premiere League, on Facebook and Instagram.
                <Link to='/rpl' style={{textDecoration:'none'}}><div style={{margin:'20px',fontFamily:'BDSuper',color:'red',fontSize:'18px'}}>View</div></Link>
                </div>
        </div>
  </Carousel>;


// case "4":   return <Carousel key={4} className='Content-Management' responsive={responsive}>
// <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img1})`,backgroundSize:'cover',position:'relative'}}>
// <div className='Project-heading' key={41} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
//                  BJP
//                 </div>
//                 <div className='Project-text'>
//                 Are you ready to transform your brilliant app idea into a reality? Look no further!
//                 </div>
// </div>
//         <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img17})`,backgroundSize:'cover',position:'relative'}}>
//         <div className='Project-heading' key={42} style={{fontFamily:'BDSuper'}}>
//                 PWD
//                 </div>
//                 <div className='Project-text'>
//                 Are you ready to transform your brilliant app idea into a reality? Look no further!
//                 </div>
//         </div>
//         <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img19})`,backgroundSize:'cover',position:'relative'}}>
//         <div className='Project-heading' key={43}>
//                 RPL Canada
//                 </div>
//                 <div className='Project-text'>
//                 Are you ready to transform your brilliant app idea into a reality? Look no further!
//                 </div>
//         </div>
//         <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img16})`,backgroundSize:'cover',position:'relative'}}>
//         <div className='Project-heading' key={44}>
//                  Content Creation
//                 </div>
//                 <div className='Project-text'>
//                 Are you ready to transform your brilliant app idea into a reality? Look no further!
//                 </div>
//         </div>
//   </Carousel>;
default:      return <Carousel responsive={responsive}>
<div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img1})`,backgroundSize:'cover',position:'relative'}}>
<div className='Project-heading' key={1}>
                 Content Creation
                </div>
                <div className='Project-text'>
                Are you ready to transform your brilliant app idea into a reality? Look no further!
                <div style={{margin:'20px 20px'}}>View</div>
                </div>
</div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img2})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={2}>
                 Content Creation
                </div>
                <div className='Project-text'>
                Are you ready to transform your brilliant app idea into a reality? Look no further!
                <div style={{margin:'20px 20px'}}>View</div>
                </div>
        </div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img3})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={3}>
                 Content Creation
                </div>
                <div className='Project-text'>
                Are you ready to transform your brilliant app idea into a reality? Look no further!
                <div style={{margin:'20px 20px'}}>View</div>
                </div>
        </div>
        <div className='Project-Box' style={{width:'300px',height:'450px',margin:'10px 50px',backgroundImage:`url(${Img4})`,backgroundSize:'cover',position:'relative'}}>
        <div className='Project-heading' key={4}>
                 Content Creation
                </div>
                <div className='Project-text'>
                Are you ready to transform your brilliant app idea into a reality? Look no further!
                <div style={{margin:'20px 20px'}}>View</div>
                </div>
        </div>
  </Carousel>;
  }
})()}


    </div>
      </div>
</div>
</>
  );
}

export default Service;
