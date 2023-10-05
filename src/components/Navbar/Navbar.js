import './Navbar.css'
import Img from './logo 1 1.png';
import {NavLink,Link} from 'react-router-dom'
import Hamberger from '../Hamburger/Hamburger'
function BasicExample() {
  return (
    <div className='Navbar' style={{backgroundColor:'white'}}>
      <div className='container1' style={{width:'100%'}}>
       <div ><Link to='/home'><img src={Img} alt='img' className='logo'/></Link></div>
      <div className='Links'>
      <NavLink className='nav-links1' to="/home" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink>
      <NavLink className='nav-links1' to="/services" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Services</NavLink>
      <NavLink className='nav-links1' to="/projects" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Projects</NavLink>
      <NavLink className='nav-links1' to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>About Us</NavLink>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <NavLink to="/contact" style={{textDecoration:'none',color:'white'}}><div className='contact' style={{backgroundColor:'#65C891',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>Contact Us</div></NavLink>
      <Hamberger/>
      </div>
        </div>
        
    </div>
  );
}

export default BasicExample;