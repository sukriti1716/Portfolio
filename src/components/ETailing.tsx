import { Button } from "@mui/material"
import Footer from "./Footer"

const ETailing = () => {
    return (
      <>
          <div style={{backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"1rem"}}>
              <div className="img">
                  <img src="E-Tailingpic.jpeg" alt="" height={"300rem"} width={"500rem"} style={{borderRadius:"10%",border:"1px solid black", animation: "scaleInOut 3s ease-in-out infinite",objectFit:"cover"}}/>
              </div>
              <div className="content" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem",backgroundColor:"#3C5B6F",padding:"2rem",borderRadius:"10%",color:"white"}}>
                  <div>
                      <span><h2 style={{color:"black",backgroundColor:"#DFF5FF",padding:"0.6rem"}}>TECHNOLOGIES USED AND FEATURES</h2></span>
                  </div>
                  <div style={{fontFamily:"sans-serif",fontSize:"1.2rem",gap:"1rem"}}>
                      <ul>
                          <li style={{ marginBottom: "0.5rem" }}>NodeJS</li>
                          <li style={{ marginBottom: "0.5rem" }}>EJS</li>
                          <li style={{ marginBottom: "0.5rem" }}>Session & Cookies</li>
                          <li style={{ marginBottom: "0.5rem" }}>MongoDB</li>
                          <li style={{ marginBottom: "0.5rem" }}>Validation & Authentication</li>
                          <li style={{ marginBottom: "0.5rem" }}>Hosted on AWS</li>
                      </ul> 
                  </div>
                  <div className="buttons" style={{display:"flex",justifyContent:"space-between",gap:"2rem",flexDirection:"row"}}>
                      <Button variant="contained">Source Code</Button>
                      <Button variant="contained">Open</Button>
                  </div>
              </div>
          </div>
  
          <Footer/>
      </>
    )
  }
  
  export default ETailing