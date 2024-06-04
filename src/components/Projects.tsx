import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Home from "./Home"


const Projects = () => {
    const navigate=useNavigate()
    const handleClick = (path:string) => {
        // Handle navigation or component rendering here
        // For example, you might want to use a router to navigate to the component
        navigate(path)
        
      };
  return (
    <>
        <div style={{backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"1rem",flexDirection:"column"}}>
            <div className="heading">
                <span><h1 style={{backgroundColor:"#153448",color:"white",padding:"0.6rem"}}>MY PROJECTS</h1></span>
            </div>
            <div className="multiproject"style={{display:"flex",flexDirection:"row",gap:"2rem",padding:"2rem",backgroundColor:"#99aab5",color:"white"}}>
                <div className="chatapp" style={{borderRadius:"0%",objectFit:"cover"}} >
                    <img src="chatapp-pic.png" alt="" height={"310rem"} width={"350rem"} style={{borderRadius:"10%"}} onClick={()=>handleClick('/projects/chatapp')}/>
                </div>
                <div className="e-tailing"  style={{borderRadius:"0%",objectFit:"cover"}}>
                    <img src="E-Tailingpic.png" alt="" height={"310rem"} width={"350rem"} style={{borderRadius:"10%"}} onClick={()=>handleClick('/projects/etailing')}/> 
                </div>
                <div className="portfolio"  style={{borderRadius:"0%",objectFit:"cover"}}>
                    <img src="portfoliopic.jpeg" alt="" height={"310rem"} width={"350rem"} style={{borderRadius:"10%"}} onClick={()=>handleClick('/projects/portfolio')}/>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Projects