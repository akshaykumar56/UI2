import './InfiniteTrails.css';
import Img1 from './HimachalDarpan.png'
function Service() {
  return (
<>
<div>
    <div style={{backgroundImage:`url(${Img1})`,height:'500px',width:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
    <div className='Page-Main'>
        <div className='Page-Main-Heading1' style={{fontFamily:'Red Hat Display',fontWeight:'600'}}>Himachal Darpan Live TV</div>
        <div className='Page-Main-Heading2' style={{fontFamily:'Red Hat Display'}}>A Dynamic News Media Website with Blogging functionality and Content moderation</div>
        <div className='Page-Main-1'>
            <div className='Page-Main-1-1'>
                <div className='Page-Main-1-1-1' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Project Overview
                <div style={{margin:'10px 0px',fontFamily:'Red Hat Display',fontSize:'18px',fontWeight:'400',textAlign:'justify'}}>Our website project for Himachal Darpan Live TV has successfully bridged the gap between this news portal and the common people of Himachal Pradesh. Through the website, we've enabled seamless news delivery, strengthening their connection with the local audience and enhancing their outreach.</div>
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
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>2022</div>
                </div>
                </div>
                <div className='Page-Main-1-2-1-2' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Time Line
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>20 Days</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className='Link' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600',height:'20% !important',margin:'0px 10px'}}>
        <a href='https://himachaldarpanlivetv.com/' target='_blank' rel="noreferrer" style={{textDecoration:'none'}}><div className='site-Button' style={{borderRadius:'24px',backgroundColor:'#65c891',display:'flex',justifyContent:'center',alignItems:'center',height:'40px',color:'white'}}>Preview</div></a>
        </div>
    </div>
</div>
</>
  );
}

export default Service;

