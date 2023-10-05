
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content6.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const style = {
  componentName: {},
  col: {},
  countup: {},
};

class App extends Component {
  state = {
    didViewCountUp: false
  };


  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({didViewCountUp: true});
    }
  }

  render() {
    return (
      <div className='content-counter'>
      <div className={style.componentName} >
        <VisibilitySensor onChange={this.onVisibilityChange} offset={{
          top:
            5
        }} delayedCall>


<div className='Content6 animation' style={{display:'flex',flexDirection:'column'}}>
       <div className='title' style={{display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'lato',fontSize:"32px",fontWeight:'700'}}>See our records 📜</div>
     <div className='content'>
        <div className='Content61'>
        <div className='Content612 box61' style={{display:'flex',flexDirection:'column'}}><div style={{color:'white',padding:'15px 30px',fontSize:'32px',fontFamily:'BDSuper'}}>Clients<br/><br/></div>
     {/* <CountUp style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'96px',padding:"0px 0px",fontFamily:'Bungee Shade'}} className="account-balance" start={1} end={15} duration={5} useEasing={true} useGrouping={true} separator=" " decimals={0} decimal="," prefix="" suffix="+" /> */}
     <CountUp style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'96px',padding:"0px 0px",fontFamily:'Bungee Shade'}} className={style.countup} duration={5} useEasing={true} useGrouping={true} separator=" " decimals={0} decimal="," prefix="" suffix="+" end={this.state.didViewCountUp ? 15 : 0}
                    />
   </div>
   </div>

  <div className='Content61'>
   <div className='Content612 box62' style={{display:'flex',flexDirection:'column'}}><div style={{color:'white',padding:'15px 30px',fontSize:'32px',fontFamily:'BDSuper'}}>Projects<br/><br/></div>
     {/* <CountUp style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'96px',padding:"0px 0px",fontFamily:'Bungee Shade'}} className="account-balance" start={1} end={45} duration={5} useEasing={true} useGrouping={true} separator=" " decimals={0} decimal="," prefix="" suffix="+" /> */}
     <CountUp style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'96px',padding:"0px 0px",fontFamily:'Bungee Shade'}} className={style.countup} duration={5} useEasing={true} useGrouping={true} separator=" " decimals={0} decimal="," prefix="" suffix="+" end={this.state.didViewCountUp ? 45 : 0}
                    />
   </div>
  </div>

   <div className='Content61'>
   <div className='Content612 box63' style={{display:'flex',flexDirection:'column'}}><div style={{color:'white',padding:'15px 30px',fontSize:'32px',fontFamily:'BDSuper'}}>Clients<br/>Recommending</div>
     {/* <CountUp style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'96px',padding:"0px 0px",fontFamily:'Bungee Shade'}} className="account-balance" start={1} end={95} duration={5} useEasing={true} useGrouping={true} separator=" " decimals={0} decimal="," prefix="" suffix="+"/> */}
     <CountUp style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'96px',padding:"0px 0px",fontFamily:'Bungee Shade'}} className={style.countup} duration={5} useEasing={true} useGrouping={true} separator=" " decimals={0} decimal="," prefix="" suffix="%" end={this.state.didViewCountUp ? 95 : 0}
                    />
   </div>
   </div>
  </div>


    
    </div>
        </VisibilitySensor>
      </div>
      </div>
      
      )



  }
}

export default App;
