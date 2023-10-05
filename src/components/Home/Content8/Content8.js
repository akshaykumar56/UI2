import './Content8.css';

function App() {


  return (
    <section className='animation' style={{display:'flex',margin:'30px 0px',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       <div className='curated my-3' style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'32px'}}>Let's Work Together 🤝</div>
    <form className='form' method="post" action="http://localhost:4002/addData"  style={{width:'80vw',height:'auto',margin:'20px',padding:'30px 40px',borderRadius:'15px'}}>
      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'32px',fontFamily:'Bebas Neue',color:'white'}}>
        Name
        <input type='text' id='name' name='name' style={{margin:'10px 0px',borderRadius:'10px'}}/>
      </label>


      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'32px',fontFamily:'Bebas Neue',color:'white'}}>
        Email
        <input type='email' id='email' name='email' style={{margin:'10px 0px',borderRadius:'10px'}}/>
      </label>


      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'32px',fontFamily:'Bebas Neue',color:'white'}}>
        Contact No.
        <input type='text' id='contact' name='contact' style={{margin:'10px 0px',borderRadius:'10px'}}/>
      </label>

      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'32px',fontFamily:'Bebas Neue',color:'white'}}>
        Contacting For

      <div style={{display:'flex',flexDirection:'row',margin:'15px 0px'}}>
    <div className="button" style={{backgroundColor:'#65c891',color:'white',borderRadius:'5px'}}>
  <input type="radio" id="a25" name="contactfor" value='App Developer' />
  <label className="btn btn-default" for="a25" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>App Dev</label>
</div>
<div className="button" style={{backgroundColor:'#2986F3',color:'white',borderRadius:'5px'}}>
  <input type="radio" id="a50" name="contactfor" value='Web Developer'/>
  <label className="btn btn-default" for="a50" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Web Dev</label>
</div>
<div className="button" style={{backgroundColor:'#EB28A9',color:'white',borderRadius:'5px'}}>
  <input type="radio" id="a75" name="contactfor" value='Graphic Designing'/>
  <label className="btn btn-default" for="a75" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Graphic Designing</label>
</div>
<div className="button" style={{backgroundColor:'#62d7ed',color:'white',borderRadius:'5px'}}>
  <input type="radio" id="a100" name="contactfor" value='Digital Marketing'/>
  <label className="btn btn-default" for="a100" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Digital Marketing</label>
</div>
        </div>
      </label>
 <button type='submit' style={{width:'200px',border:'2px solid purple',borderRadius:'5px',background:'transparent',margin:"40px 30px",fontSize:'32px',fontFamily:'Bebas Neue',color:'purple'}}>Submit</button>
    </form>
    </section>
  );
}

export default App;