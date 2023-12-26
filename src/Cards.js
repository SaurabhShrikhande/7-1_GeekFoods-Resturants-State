function Cards(props){
    return (
    <div style={{backgroundColor:"black",textAlign: "center",  color:"white" , padding:"20px", margin:"120px 100px", borderRadius:"20px"}} >
      <h3 style={{fontSize:"30px"}}>{props.cmt}</h3>
       <p>{props.author}</p>
    </div>)
}


export default Cards;
