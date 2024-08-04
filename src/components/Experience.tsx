import Footer from "./Footer"

const Experience = () => {
  return (
    <>
        <div style={{backgroundColor:"#DFF5FF",height:"90dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <div className="maindiv" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%",height:"100%"}}>
                <div className="Content" style={{backgroundColor:"#153448",padding:"2rem",margin:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",flexDirection:"column",width:"80%"}}>
                    <div className="heading" style={{color:"white"}}>
                        <h1>WORK EXPERIENCE</h1>
                    </div>
                    <div className="workex" style={{backgroundColor:"lightblue",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",height:"100%"}}>
                        <div className="one" style={{backgroundColor:"#3C5B6F",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column",color:"white",border:"1px solid white",fontSize:"1.1rem"}}>
                            <h2 style={{textAlign:"center"}}>MERN Stack Intern At National Informatics Centre</h2>
                            <h3>Duration: 01/05/24-14/06/24</h3>
                            <div className="contentdone">
                                <ul>
                                    <li>Worked on the e-Jagriti Platform</li>
                                    <li>Authentication,Authorization & validation</li>
                                    <li>React Router Authorization</li>
                                    <li>Outlets</li>
                                    <li>JWT Authentication</li>
                                    <li>GeoLocation addition</li>
                                    <li>Handling Multi Session</li>
                                </ul>
                            </div>
                        </div>
                        <div className="two" style={{backgroundColor:"#3C5B6F",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column",color:"white",border:"1px solid white",fontSize:"1.1rem"}}>
                            <h2 style={{textAlign:"center"}}>Android Developer Intern at Diginique Techlabs</h2>
                            <h3>Duration : 12/06/23-26/07/23</h3>
                            <div className="contentdone">
                                <ul>
                                    <li>Basic Calculator app development</li>
                                    <li>Implicit and Explicit Intent</li>
                                    <li>Different Views</li>
                                    <li>Constraint and Linear Layout</li>
                                    <li>LifeCycle implementation</li>
                                    <li>Creating APK</li>
                                    <li>Installing apk and running app on phone</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        <Footer/>
    
    </>
  )
}

export default Experience