import './InfiniteTrails.css';
import Img1 from './AlpineHoliday.png'
function Service() {
  return (
<>
<div>
    <div style={{backgroundImage:`url(${Img1})`,height:'500px',width:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
    <div className='Page-Main'>
        <div className='Page-Main-Heading1' style={{fontFamily:'Red Hat Display',fontWeight:'600'}}>Alpine holiday</div>
        <div className='Page-Main-Heading2' style={{fontFamily:'Red Hat Display'}}>Hotel Website with mordern UI aesthetics</div>
        <div className='Page-Main-1'>
            <div className='Page-Main-1-1'>
                <div className='Page-Main-1-1-1' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Project Overview
                <div style={{margin:'10px 0px',fontFamily:'Red Hat Display',fontSize:'18px',fontWeight:'400',textAlign:'justify'}}>Hotel Alpine Holiday Homes recognized the need to enhance its online presence in the competitive hospitality industry. In response, we embarked on a website development project aimed at increasing their visibility and attracting more customers. This project aimed to create a user-friendly and informative website to showcase the hotel's offerings, amenities, and unique features, ultimately driving bookings and revenue growth.</div>
                </div>
            </div>
            <div className='Page-Main-1-2'>
            <div className='Page-Main-1-2-1'>
                <div className='Page-Main-1-2-1-1' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Services
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>Web Development</div>
                </div>
                </div>
                <div className='Page-Main-1-2-1-1' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Sector
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>Technology</div>
                </div>
                </div>
            </div>
            <div className='Page-Main-1-2-1' >
            <div className='Page-Main-1-2-1-2' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Year
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>2023</div>
                </div>
                </div>
                <div className='Page-Main-1-2-1-2' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Time Line
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>14 Days</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className='Link' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600',height:'20% !important',margin:'0px 10px'}}>
        <a href='https://alpineholidayhome.in/' style={{textDecoration:'none'}}><div className='site-Button' style={{borderRadius:'24px',backgroundColor:'#65c891',display:'flex',justifyContent:'center',alignItems:'center',height:'40px',color:'white'}}>Preview</div></a>
        </div>
    </div>
</div>
</>
  );
}

export default Service;


