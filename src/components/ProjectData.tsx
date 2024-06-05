import { Button } from "@mui/material"
import Footer from "./Footer"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

interface Project {
    name: string;
    imgsrc: string;
    technologies: string[];
    sourceCodeLink: string;
  }

const projects:{ [key: string]: Project }={
    chatapp: {
        name: "Chat App",
        imgsrc: "chatapp-pic.png",
        technologies: ["ReactJs", "JavaScript", "TypeScript", "Socket.io", "MongoDB", "Validation & Authentication", "Hosted on AWS"],
        sourceCodeLink: "https://github.com/sukriti1716/Talk-Trek",
      },
      etailing: {
        name: "E-Tailing",
        imgsrc: "E-Tailingpic.png",
        technologies: ["NodeJS", "EJS", "Session & Cookies", "MongoDB", "Validation & Authentication", "Hosted on AWS"],
        sourceCodeLink: "https://github.com/sukriti1716/E-Tailing",
      },
      portfolio: {
        name: "Portfolio",
        imgsrc: "portfoliopic.jpeg",
        technologies: ["NodeJS", "ReactJs", "TypeScript", "JavaScript", "Hosted on AWS"],
        sourceCodeLink: "https://github.com/sukriti1716/Portfolio",
      },

    }

const ProjectData = () => {
   const {selectedproject}=useParams<{ selectedproject: string }>()
//    const project = selectedproject ? projects[selectedproject] : undefined;
    // console.log(selectedproject)

   const [project, setProject] = useState<Project|undefined>(undefined); // Initial state
   const [isloaded,setisloaded]=useState<boolean>(false)

  useEffect(() => {
    
    const fetchData = async () => {
        if (selectedproject) {
            try{
                console.log(projects[selectedproject]);
                await setProject(projects[selectedproject]); // Set the project correctly  
            }
            catch(err){
                console.log(err)
            }
            finally{
                setisloaded(true)
            }
            
          }
    };

    fetchData();

    
  }, [selectedproject]);

   

   if(!project){
    return <div>Project Not found</div>
   }

   const imaging=`${project.imgsrc}`
//    console.log(imaging)
  
    
  return (
    
    <>
        {isloaded && (<div style={{backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"1rem"}}>
        <img src={imaging} alt="" />
            <div className="image">
                <img src={`/${project.imgsrc}`} alt="" height={"300rem"} width={"500rem"} style={{borderRadius:"10%",border:"1px solid black", animation: "scaleInOut 3s ease-in-out infinite",objectFit:"cover"}} />
            </div>
            <div className="content" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem",backgroundColor:"#3C5B6F",padding:"2rem",borderRadius:"10%",color:"white"}}>
                <div>
                    <span><h2 style={{color:"black",backgroundColor:"#DFF5FF",padding:"0.6rem"}}>TECHNOLOGIES USED AND FEATURES</h2></span>
                </div>
                <div style={{fontFamily:"sans-serif",fontSize:"1.2rem",gap:"1rem"}}>
                    <ul>
                    {project.technologies.map((tech, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>{tech}</li>
                    ))}
                    </ul>
                </div>
                <div className="buttons" style={{display:"flex",justifyContent:"space-between",gap:"2rem",flexDirection:"row"}}>
                    {project.sourceCodeLink && <Button href={project.sourceCodeLink} variant="contained">Source Code</Button>}
                    <Button variant="contained">Open</Button>
                </div>
            </div>
      </div>)
        }
      <Footer />
        
    </>
  )
}

export default ProjectData