import React from 'react'
import Hero1 from '../images/hero1.png';
function hero() {
    return (
        <div style={{paddingTop:"60px"}} className="container">
            <div className="container" style={{paddingTop:"50px"}} >
                <div className=" m-auto">
                    <img style={{width:"100%"}} src={Hero1}/>
                    <h1 style={{textAlign:"center" ,fontSize:"50px",padding:"20px 10px 20px 10px",fontFamily:"Abril Fatface"}}>A few words about this blog platform, Ghost, and how this site was made</h1>
                    
                </div>
                <div className="col-md-10 m-auto">
                <p className="m-auto" style={{textAlign:"center", borderBottom:"2px solid black",fontFamily:"Slabo 27px"}}>Why ghost (& Figma) instead of mediam, wordpress or other platform?</p>
                </div>
            </div>
        </div>
    )
}

export default hero
