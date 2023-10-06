import './Service.scss'
import "../Home/fonts/BDSupperBold.ttf"
import Img1 from './1.png'
import Img2 from './2.png'
import Img3 from './3.png'
import Img4 from './4.png'
import Tech1 from './html.png'
import Tech2 from './Css.png'
import Tech3 from './Javascript.png'
import Tech4 from './React.png'
import Tech5 from './Python.png'
import Tech6 from './Pr.png'
import Tech7 from './Ps.png'
import Tech8 from './node.png'
import Tech9 from './Express.png'
import Tech10 from './strapi.png'
import Tech11 from './mongo.png'
import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom'

function Service() {
  return (
<>
<div className='Main-Service' style={{display:'flex',flexDirection:'column',justifyCont4ent:'center',alignItems:'center',position:'relative'}}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'20px 10px'}}>
        <div  className='our-services' style={{fontSize:'40px',fontFamily:'BDSuper',}}>OUR SERVICES</div>
        <div style={{fontSize:'32px',fontFamily:'lato',fontWeight:'500',textAlign:'center'}}>Giving Your Business Some Great Ideas</div>
    </div>
    <div className='images' style={{width:'100%',padding:'0px 40px',margin:'50px 0px'}} >
        <div className='Cards-Service'>
            
            <div className='Box' style={{backgroundImage: `url(${Img1})`,backgroundSize:'cover',height:'370px',borderRadius:'15px',position:'relative'}}>
                <div className='heading'>
                 App Development
                </div>
                <div className='text' key={1} style={{fontFamily: 'Montserrat'}}>
                Are you ready to transform your brilliant app idea into a reality? Look no further! We are your trusted partner in app development that drive success.
                </div>
            </div>


            <div className='Box' style={{backgroundImage: `url(${Img2})`,backgroundSize:'cover',height:'370px',borderRadius:'15px',position:'relative'}}>
            <div className='heading'>
                 Web Development
                </div>
                <div className='text' key={1} style={{fontFamily: 'Montserrat'}}>
                In today's digital age, your website is often the first impression your audience has of your business. Make it count with our top-notch web development services.
                </div>

            </div>


            <div className='Box' style={{backgroundImage: `url(${Img3})`,backgroundSize:'cover',height:'370px',borderRadius:'15px',position:'relative'}}>

            <div className='heading' key={1} style={{fontFamily: 'Montserrat'}}>
                 Content Creation
                </div>
                <div className='text' style={{fontFamily: 'Montserrat'}}>
                In a world inundated with content, making yours stand out is crucial. Our content creation services are designed to tell your story effectively and captivate your audience.
                </div>

            </div>


        </div>
        <div className='images-2' >
            <div className='Box1' style={{backgroundImage: `url(${Img4})`,backgroundSize:'cover',height:'370px',borderRadius:'15px',position:'relative'}}>
            <div className='heading'>
            Social Media Management
            </div>
                <div className='text' style={{fontFamily: 'Montserrat'}}>
                In the ever-evolving world of social media, managing your online presence effectively can be a game-changer. We are your trusted partner in social media management.
                </div>
            </div>

            <div className='Service-Project' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',color:'white',backgroundColor:'#252331',height:'370px',borderRadius:'15px'}}>
            <div className='Service-Project-Heading' >
            Have a project in mind? 🙌
            </div>
                <div className='Service-Project-Text' >
                Transform your vision into reality with our cutting-edge services. Whether it's software development, design, or innovation, ping us, and let's bring your ideas to life!
                </div>

            <Link to='/contact' style={{color:'white',textDecoration:'none'}}><div className='Service-Project-Button' style={{margin:'20px 0px',borderRadius:"20px",padding:'10px 20px',backgroundColor:'#65C891'}}>
               Request a Project
                </div></Link>
            </div>

            
        </div>
    </div>
</div>



<div style={{margin:'100px 10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
    <div  className='our-services' style={{fontSize:'40px',fontFamily:'BDSuper',textAlign:'center'}}>Technology We Work With</div>
     <div style={{display:"flex",justifyContent:'center',fontSize:'25px',fontWeight:'600',textAlign:'center'}}> We Embrece Cutting Edge Technologies</div>
    </div>
  

 </div>


<div style={{margin:'0px 0px 100px 0px'}}>
 <Marquee>
 <div className="ticker__item" key={1}><img src={Tech1} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={2}><img src={Tech2} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={3}><img src={Tech3} alt='tech1' style={{height:'150px',width:'200px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={4}><img src={Tech4} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
 <div className="ticker__item" key={5}><img src={Tech5} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={6}><img src={Tech6} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={7}><img src={Tech7} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={8}><img src={Tech8} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={9}><img src={Tech9} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  <div className="ticker__item" key={10}><img src={Tech10} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
 <div className="ticker__item" key={11}><img src={Tech11} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px'}}/></div>
  </Marquee>
  </div>
</>
  );
}

export default Service;