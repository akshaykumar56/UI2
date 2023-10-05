// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Content7.css'
function BasicExample(props) {
  return (
    <Card style={{height:'500px',width:'auto',position:'relative',margin:'0px 40px',borderRadius:'15px',border:'0px'}}>
      <div className='Image' style={{position:'absolute',top:'22%',left:'16%',zIndex:'4'}}><img src={props.Logo} alt='img' style={{height:'70px',width:'70px',borderRadius:'50%'}}/></div>
      <Card.Img  style={{background:'black',height:'130px',width:'100%',borderTopRightRadius:'15px',borderTopLeftRadius:'15px'}} />
      <Card.Body style={{color:'white',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px',position:'relative',margin:'20px 0px',background:'black',height:'300px'}}>
        <Card.Title style={{margin:'30px 0px',fontSize:'28px'}}>{props.title}</Card.Title>
        <Card.Text style={{fontFamily:'Red Hat Display',fontSize:'16px',fontWeight:'300'}}>
       {props.text}
        </Card.Text>
          
        <Card.Text style={{fontFamily:"'Red Hat Display', sans-serif",fontSize:'15px',lineHeight:'10px',fontWeight:'200',fontStyle:'italic'}}>
        <h5 style={{fontSize:'20px',fontFamily:'Red Hat Display',fontWeight:'600',fontStyle:'normal'}}>{props.name}</h5>
         {props.owner}
        </Card.Text >
      </Card.Body>
    </Card>
  );
}

export default BasicExample;