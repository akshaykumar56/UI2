import './Footer.css'
import "../Home/fonts/BDSupperBold.ttf"
import Img from './Vector.png'
import Img2 from './Vector2.png'
import Img3 from './Fiverr.png'
function Service() {
  return (
<>
<div className='Footer' style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',margin:'100px 0px 0px 0px',borderTop:'2px solid #252331',padding:'5px 0px'}}>
<div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}><div><a href='https://www.facebook.com/garagesilicon'><img className='Image1' src={Img} alt='img1' /></a></div><div><a href='https://www.instagram.com/silicongarage/?img_index=1'><img className='Image2' src={Img2} alt='img1' /></a></div><div style={{margin:'0px 3px'}}><a href='https://www.fiverr.com/sillicongarage'><img className='Image2' src={Img3} alt='img1' /></a></div></div>
    <div className='Footer-Text' style={{fontFamily:'Lato'}}>All Rights Reserved Silicon Garage 2023</div>
    <div className='Footer-Text' style={{fontFamily:'Lato'}}>Privacy Policy</div>
</div>
</>
  );
}

export default Service;