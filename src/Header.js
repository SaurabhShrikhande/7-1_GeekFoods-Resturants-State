function Header(props){
    return (
        <div  style = {{display:"flex" ,  justifyContent:"space-around", backgroundColor: "Black", position:"fixed", top:"0", width:"100vw", height:"80px"}} >
          <div style = {{display:"flex", color:"white"}}>
            <img style={{width:"50px"}} src= {props.logo} alt="" />
            <h1 style={{marginLeft:"10px"}} >{props.title}</h1>
          </div>

             <div  style = {{display:"flex" , gap:"25px", alignItems:"center", color:"white", textDecoration:"none"}}>
              <a href=".\" style={{textDecoration:"none", fontSize:"20px", color:"white",fontWeight:"bolder"}}>{props.home}</a>
              <a href=".\" style={{textDecoration:"none", fontSize:"20px",  color:"white",fontWeight:"bolder"}}>{props.quote}</a>
              <a href=".\" style={{textDecoration:"none",  fontSize:"20px",  color:"white", fontWeight:"bolder"}}>{props.resturants}</a>
              <a href=".\" style={{textDecoration:"none",  fontSize:"20px", color:"white",fontWeight:"bolder"}}>{props.foods}</a>
              <a href=".\" style={{textDecoration:"none",  fontSize:"20px", color:"white",fontWeight:"bolder"}}>{props.contact}</a>
              </div>
            
            <div style={{display:"flex", alignItems:"center"}}>
              <button style={{backgroundColor:"blue", color:"white", padding:"5px 10px", borderRadius:"8px",  fontSize:"15px", fontWeight:"bolder"}}>Get Started</button>
            </div>

        </div>
    ); 
}

export default Header;