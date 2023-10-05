import './Hamburger.css'
import {Link} from 'react-router-dom';
function NavScrollExample() {
    /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
  <div className='Hamburger' style={{backgroundColor:'white',padding:'5px 0px 0px 30px',margin:'10px 0px'}}>
  <div id="mySidenav" className="sidenav" style={{backgroundColor:'white',color:'black',opacity:'0.955',zIndex:'1000'}}>
  <Link  className="closebtn" onClick={closeNav}>&times;</Link>
  <div onClick={closeNav}><Link to="/home" style={{color:'black',fontSize:'18px'}}>Home</Link></div>
    <div onClick={closeNav}><Link to="/services" style={{color:'black',fontSize:'18px'}}>Services</Link></div>
  <div onClick={closeNav}><Link  to="/projects" style={{color:'black',fontSize:'18px'}}>Projects</Link></div>
  <div onClick={closeNav}><Link  to="/about" style={{color:'black',fontSize:'18px',width:'250px'}}>About Us</Link></div>
</div>

 {/* Use any element to open the sidenav  */}
<button className='Hamburger-button' onClick={openNav} style={{backgroundColor:'transparent',border:'0px'}}>
<div style={{height:'3px',width:'20px',backgroundColor:'black',margin:'3px'}}></div>
<div style={{height:'3px',width:'20px',backgroundColor:'black',margin:'3px'}}></div>
<div style={{height:'3px',width:'20px',backgroundColor:'black',margin:'3px'}}></div>
</button>
</div>
    </>
  );
}

export default NavScrollExample;

