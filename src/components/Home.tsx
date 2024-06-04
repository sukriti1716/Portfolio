import { Button } from "@mui/material"
import Footer from "./Footer"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
        <div style={{backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"1rem"}}>
            <div className="writing" style={{display:"flex",flexDirection:"column",gap:"2rem",padding:"2rem",backgroundColor:"#3C5B6F",color:"white", animation: "scaleInOut 3s ease-in-out infinite" }}>
                <div>
                    <h1>Hi ,I'm Sukriti Bhatia</h1>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",fontFamily:"sans-serif",fontSize:"1.1rem",width:"90%"}}>
                    <p>I'm a Full Stack Developer specializing in React and Node.js.</p>
                    <p>Explore my projects and feel free to contact me for collaboration or inquiries!</p> 
                </div>
                <div>
                    <Link to="/contact"><Button variant="contained">Contact Me</Button></Link>
                </div>
            </div>
            <div className="pic">
                <img src="profilepic.jpeg" alt="" height={"300rem"} width={"300rem"} style={{borderRadius:"50%"}}/>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Home