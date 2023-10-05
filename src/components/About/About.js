import './About.css'
import "../Home/fonts/BDSupperBold.ttf"
import Img1 from './1.png'
import Img2 from './2.png'
import Img3 from './3.png'
import Logo1 from './Logo1.jpg'
import Logo2 from './Logo2.png'
import Logo3 from './Logo3.png'
import Logo4 from './Logo4.png'
import Logo5 from './PwdLogo.jpg'
import Team1 from './Rajesh.png'
import Team2 from './Jatin.png'
import Team3 from './Rahul.png'
import Team4 from './Indu.png'
import Team5 from './Ajit.png'
import Team6 from './Akshay.png'
function Service() {
  return (
<>
<div className='About-Us' style={{display:'flex',flexDirection:'column',justifyCont4ent:'center',alignItems:'center',position:'relative'}}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'20px 10px'}}>
        <div  className='About' style={{fontSize:'40px',fontFamily:'BDSuper'}}>About Us</div>
        <div style={{fontSize:'32px',fontFamily:'lato',fontWeight:'500',textAlign:'center'}}>You can always count on us during your journey</div>
    </div>

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',margin:'40px 0px'}}>
      <div className='About-Box' style={{padding:'0px 50px'}}>
        <div className='About-Box-1' style={{borderRadius:'21px',background:`url(${Img1})`,margin:'0px 20px',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
        <div className='About-Box-2' style={{margin:'0px 20px'}}>
          <div className='About-Box-2-inner1' style={{borderRadius:'21px',background:`url(${Img2})`,height:'300px',margin:'20px 0px',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
          <div className='About-Box-2-inner2' style={{borderRadius:'21px',background:`url(${Img3})`,height:'300px',margin:'20px 0px',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
        </div>
      </div>
    </div>
</div>

<div className='About-content2' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div className='About-content21'>
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

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'80px 10px 20px 0px'}}>
        <div  className='About' style={{fontSize:'40px',fontFamily:'BDSuper'}}>Our Team</div>
        <div style={{fontSize:'32px',fontFamily:'lato',fontWeight:'500',textAlign:'center'}}>Those Who Transform Dedication Into Tangible Results</div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",width:'100%',margin:'50px 0px'}}>
          <div className='Team-Box-1'>
            <div className='Team-Box-1-1'>
            <div className='Team-Box About-team-box-1' style={{width:'250px',height:'250px',margin:'10px 10px',backgroundImage:`url(${Team1})`,backgroundSize:'cover',position:'relative',borderRadius:'5px'}}>
            <div className='Team-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                Rajesh Kumar Vaish
                </div>
                <div className='Team-text' style={{fontFamily: 'Montserrat'}}>
                Hardware Engineer 
                </div>
            </div>
            <div className='Team-Box About-team-box-1' style={{width:'250px',height:'250px',margin:'10px 10px',backgroundImage:`url(${Team2})`,backgroundSize:'cover',position:'relative',borderRadius:'5px'}}>
            <div className='Team-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                Jatin Sharma
                </div>
                <div className='Team-text' style={{fontFamily: 'Montserrat'}}>
                Software Developer 
                </div>
            </div>
            </div>

            <div className='Team-Box-1-2'>
            <div className='Team-Box About-team-box-1' style={{width:'250px',height:'250px',margin:'10px 10px',backgroundImage:`url(${Team3})`,backgroundSize:'cover',position:'relative',borderRadius:'5px'}}>
            <div className='Team-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                Rahul Bhardwaj
                </div>
                <div className='Team-text' style={{fontFamily: 'Montserrat'}}>
                UI/UX Designer 
                </div>
            </div>

            <div className='Team-Box About-team-box-1' style={{width:'250px',height:'250px',margin:'10px 10px',backgroundImage:`url(${Team4})`,backgroundSize:'cover',position:'relative',borderRadius:'5px'}}>
            <div className='Team-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                Indu Thakur
                </div>
                <div className='Team-text' style={{fontFamily: 'Montserrat'}}>
                Software Developer Intern 
                </div>
            </div>
            </div>  
          </div>

          <div className='Team-Box-2'>
          <div className='Team-Box About-team-box-1' style={{width:'250px',height:'250px',margin:'10px 10px',backgroundImage:`url(${Team5})`,backgroundSize:'cover',position:'relative',borderRadius:'5px'}}>
            <div className='Team-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                Ajit Kumar
                </div>
                <div className='Team-text' style={{fontFamily: 'Montserrat'}}>
                Field Engineer 
                </div>
            </div>
            <div className='Team-Box About-team-box-1' style={{width:'250px',height:'250px',margin:'10px 10px',backgroundImage:`url(${Team6})`,backgroundSize:'cover',position:'relative',borderRadius:'5px'}}>
            <div className='Team-heading' key={11} style={{fontWeight:'800',fontFamily:'BDSuper'}}>
                Akshay Kumar
                </div>
                <div className='Team-text' style={{fontFamily: 'Montserrat'}}>
                MERN Developer 
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</>
  );
}

export default Service;