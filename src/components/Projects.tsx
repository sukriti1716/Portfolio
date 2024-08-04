import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Home from "./Home"
interface PROJECT {
    name: string;
    imgsrc: string;
    link:string;
}

// array of projects dynamically
const projects:{ [key: string]: PROJECT }={
    chatapp: {
        name: "Chat-App",
        imgsrc: "chatapp-pic.png",
        link:"chatapp"
      },
      etailing: {
        name: "E-Tailing",
        imgsrc: "E-Tailingpic.png",
        link:"etailing"
      },
      portfolio: {
        name: "Portfolio",
        imgsrc: "portfoliopic.png",
        link:"portfolio"
      },

    }

const Projects = () => {
    const navigate=useNavigate()
    const handleClick = (path:string) => {
        // Handle navigation or component rendering here
        // For example, you might want to use a router to navigate to the component
        navigate(path)
        
      };
  return (
    <>
        <div style={{backgroundColor:"#DFF5FF",height:"90dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <div className="maindiv" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"2rem",width:"100%",flexDirection:"column"}}>
                <div className="heading">
                    <span><h1 style={{backgroundColor:"#153448",color:"white",padding:"0.6rem",marginTop:"1.5rem"}}>MY PROJECTS</h1></span>
                </div>
                <div className="multiproject"style={{display:"flex",gap:"2rem",padding:"2rem",backgroundColor:"#153448",color:"white",margin:"1rem"}}>
                    {
                        Object.keys(projects).map(key=>{
                            const project=projects[key]
                            return(
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",gap:"1rem"}}>
                                <h1 style={{textAlign:"center",color:"white",marginBottom:"1rem",backgroundColor:"#3C5B6F",border:"2px solid white"}}>{project.name}</h1>
                                <div className={project.link} style={{borderRadius:"0%",objectFit:"cover",border:"2px solid white"}} >
                                    <img src={project.imgsrc} alt="" height={"100%"} width={"100%"} style={{cursor:"pointer"}} onClick={()=>handleClick(`/projects/${project.link}`)}/>
                                </div>
                            </div>
                            )
                        })
                    }
                    {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",gap:"1rem"}}>
                        <h1 style={{textAlign:"center",color:"white",marginBottom:"1rem",backgroundColor:"#3C5B6F",border:"2px solid white"}}>Chat-App</h1>
                        <div className="chatapp" style={{borderRadius:"0%",objectFit:"cover",border:"2px solid white"}} >
                            <img src="chatapp-pic.png" alt="" height={"100%"} width={"100%"} style={{cursor:"pointer"}} onClick={()=>handleClick('/projects/chatapp')}/>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",gap:"1rem"}}>
                        <h1 style={{textAlign:"center",color:"white",marginBottom:"1rem",backgroundColor:"#3C5B6F",border:"2px solid white"}}>E-Tailing</h1>
                        <div className="e-tailing"  style={{borderRadius:"0%",objectFit:"cover",border:"2px solid white"}}>
                            <img src="E-Tailingpic.png" alt="" height={"100%"} width={"100%"} style={{cursor:"pointer"}} onClick={()=>handleClick('/projects/etailing')}/> 
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",gap:"1rem"}}>
                        <h1 style={{textAlign:"center",color:"white",marginBottom:"1rem",backgroundColor:"#3C5B6F",border:"2px solid white"}}>PortFolio</h1>
                        <div className="portfolio"  style={{borderRadius:"0%",objectFit:"cover",border:"2px solid white"}}>
                            <img src="portfoliopic.jpeg" alt="" height={"100%"} width={"100%"} style={{cursor:"pointer"}}onClick={()=>handleClick('/projects/portfolio')}/>
                        </div>
                    </div>     */}
                </div>
            </div>      
        </div>

        <Footer/>
    </>
  )
}

export default Projects