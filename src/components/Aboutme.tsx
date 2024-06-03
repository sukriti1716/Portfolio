import React from 'react'
import Footer from './Footer'

const Aboutme = () => {
  return (
    <>

            <div style={{backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"1rem"}}>
                    <div className="writing" style={{display:"flex",flexDirection:"column",gap:"2rem",padding:"4rem",backgroundColor:"#153448",color:"white",width:"50%",boxShadow:"10px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"}}>
                        <div>
                            <h1><span style={{color:"black",backgroundColor:"#DFF5FF",padding:"0.6rem"}}>About Me</span></h1>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",fontFamily:"sans-serif",fontSize:"1.2rem",width:"100%"}}>
                            <p>I'm a passionate Full Stack Web Developer with a keen 
                            interest in web development and a curiosity to explore various technologies. 
                            I've successfully completed two full stack projects and am always eager to learn and 
                            grow in this ever-evolving field. My drive for innovation and continuous improvement
                            fuels my dedication to creating impactful and efficient web solutions.</p>
                        </div>
                    </div>

                    {/* //next */}
                    <div className="skills" style={{display:"flex",flexDirection:"column",gap:"2rem",padding:"4rem",backgroundColor:"#3C5B6F",color:"white",borderRadius:"10%"}}>
                        <div>
                            <h1><span style={{color:"black",backgroundColor:"#DFF5FF",padding:"0.6rem"}}>Skills</span></h1>
                        </div>
                        <div style={{fontFamily:"sans-serif",fontSize:"1.2rem",gap:"1rem"}}>
                            <ul>
                                <li style={{ marginBottom: "0.5rem" }}>Mern Stack</li>
                                <li style={{ marginBottom: "0.5rem" }}>Javascript,TypeScript</li>
                                <li style={{ marginBottom: "0.5rem" }}>React</li>
                                <li style={{ marginBottom: "0.5rem" }}>MongoDB,PostGre SQL</li>
                                <li style={{ marginBottom: "0.5rem" }}>Amazon Web Services</li>
                                <li style={{ marginBottom: "0.5rem" }}>Java</li>
                                <li style={{ marginBottom: "0.5rem" }}>C++</li>
                                <li style={{ marginBottom: "0.5rem" }}>Git</li>
                                <li style={{ marginBottom: "0.5rem" }}>Baics of Android Development</li>
                            </ul> 
                        </div>
                    </div>
            </div>

            <Footer/>
              
    </>
  )
}

export default Aboutme