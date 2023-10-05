import './InfiniteTrails.css';
import Img1 from './IGMC.png'
function Service() {
  return (
<>
<div>
    <div style={{backgroundImage:`url(${Img1})`,height:'500px',width:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
    <div className='Page-Main'>
        <div className='Page-Main-Heading1' style={{fontFamily:'Red Hat Display',fontWeight:'600'}}>Laboratory Information Management System</div>
        <div className='Page-Main-Heading2' style={{fontFamily:'Red Hat Display'}}>Transforming Healthcare with a Laboratory Information Management System for IGMC</div>
        <div className='Page-Main-1'>
            <div className='Page-Main-1-1'>
                <div className='Page-Main-1-1-1' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Project Overview
                <div style={{margin:'10px 0px',fontFamily:'Red Hat Display',fontSize:'18px',fontWeight:'400',textAlign:'justify'}}>We created a [Lab information Management System] for Indira Gandhi Medical College Shimla [Himachal Pradesh], which centralizes the laboratory from collecting patient samples with Barcodes to generating reports from various analyzers and making them available online.</div>
                </div>
            </div>
            <div className='Page-Main-1-2'>
            <div className='Page-Main-1-2-1'>
                <div className='Page-Main-1-2-1-1' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Services
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>Software Development</div>
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
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>2022-Present</div>
                </div>
                </div>
                <div className='Page-Main-1-2-1-2' style={{fontFamily:'Red Hat Display',fontSize:'20px',fontWeight:'600'}}>Time Line
                <div style={{margin:'10px 0px'}}>
                    <div style={{fontSize:'16px',fontWeight:'400',color:'#2961b6'}}>1 Year</div>
                </div>
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

