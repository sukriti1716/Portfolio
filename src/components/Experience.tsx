import Footer from "./Footer"

const Experience = () => {
  return (
    <>
        <div style={{backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"1rem"}}>
            <div className="content" style={{backgroundColor:"#153448",padding:"2rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",flexDirection:"column"}}>
                <div className="heading" style={{color:"white"}}>
                    <h1>WORK EXPERIENCE</h1>
                </div>
                <div className="workex" style={{backgroundColor:"lightblue",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"row"}}>
                    <div className="one" style={{backgroundColor:"#3C5B6F",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column",color:"white",border:"1px solid white",fontSize:"1.1rem"}}>
                        <h2>React Intern At National Informatics Centre</h2>
                        <h3>Duration: 01/05/24-14/06/24</h3>
                        <div className="contentdone">
                            <ul>
                                <li>Worked on the e-Jagriti Platform</li>
                                <li>Authentication,Authorization & validation</li>
                                <li>React Router Authorization</li>
                                <li>Outlets</li>
                                <li>JWT Authentication</li>
                                <li>GeoLoation addition</li>
                            </ul>
                        </div>
                    </div>
                    <div className="two" style={{backgroundColor:"#3C5B6F",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column",color:"white",border:"1px solid white",fontSize:"1.1rem"}}>
                        <h2>Android Developer Intern at Diginique Techlabs</h2>
                        <h3>Duration : 12/06/23-26/07/23</h3>
                        <div className="contentdone">
                            <ul>
                                <li>Basic Calculator app development</li>
                                <li>Implicit and Explicit Intent</li>
                                <li>Different Views</li>
                                <li>Constraint and Linear Layout</li>
                                <li>Creating APK</li>
                                <li>Installing apk and running app on phone</li>
                            </ul>
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