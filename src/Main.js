function Main(){

    return(<div >
     <div style={{minHeight:"100vh", backgroundImage:"url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" , display:"flex", alignItems:"center", justifyContent:"center"}}>

       <div style={{textAlign:"center", width:"30vw", marginRight:"25vw"}}>
        <h1>Let us find your</h1>
        <h1 style={{color:"red"}}>Forever Food.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div>
            <button style={{marginRight:"20px", backgroundColor:"red", border:"none", color:"white", padding:"10px 20px"}}>Search Now</button>
            <button style={{backgroundColor:"white", border:"none", color:"red", padding:"10px 20px"}}>Know More</button>
        </div>
        </div>  
    </div>
         
         <div style={{padding:"80px 20px", display:"flex", overflowX:"hidden"}}>
           <div style={{width:"50vw"}}>
            <img style={{width:"55vw", height:"80vh", padding:"40px 0px"}} src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
            </div>
            <div style={{width:"50vw" , zIndex:"-1"}}>
                <div style={{width:"55vw", backgroundColor:"#f7f7f7", height:"90vh"}}>
                    <div style={{padding:"75px 10vw"}}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta</p>
                    <button style={{backgroundColor:"blue", border:"none", color:"white", padding:"10px 40px", borderRadius:"5px"}}>Get In Touch</button>
                    </div>
                </div>

            </div>
        </div>
        </div>)
}

export default Main;