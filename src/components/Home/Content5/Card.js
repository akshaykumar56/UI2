// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './content5.css'
function BasicExample(props) {
  return (
    <Card style={{height:'500px',width:'auto',position:'relative',margin:'0px 40px',borderRadius:'30px',border:'0px'}}>
      <div className='Image' style={{position:'absolute',top:'34%',left:'16%',zIndex:'4'}}><img src={props.Logo} alt='img' style={{height:'61px',width:'62px'}}/></div>
      <Card.Img  style={{background:'black',height:'200px',width:'100%',borderTopRightRadius:'30px',borderTopLeftRadius:'30px'}} />
      <Card.Body style={{color:'white',borderBottomRightRadius:'30px',borderBottomLeftRadius:'30px',position:'relative'}}>
        <Card.Title style={{margin:'30px 0px',fontSize:'28px'}}>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Text>
          <div>Technology Used</div>
          <div className='Technology' style={{display:'flex',flexDirection:'row',margin:'10px 0px'}}>
          <div className='Img mx-2 my-1'>{props.Img1?<img src={props.Img1} alt='img' style={{height:'32px',width:'32px'}}/>:''}</div>
            <div className='Img mx-2 my-1'>{props.Img2?<img src={props.Img2} alt='img' style={{height:'32px',width:'32px'}}/>:''}</div>
            <div className='Img mx-2 my-1'>{props.Img3?<img src={props.Img3} alt='img' style={{height:'32px',width:'32px'}}/>:''}</div>
            <div className='Img mx-2 my-1'>{props.Img4?<img src={props.Img4} alt='img' style={{height:'32px',width:'32px'}}/>:''}</div>
          </div>
        </Card.Text >
        {/* <a href="/" style={{textDecoration:'none',display:'flex',alignItems:'flex-end',justifyContent:'flex-end',color:'#4FC7EC',marginTop:'40px'}}>Read More</a> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;