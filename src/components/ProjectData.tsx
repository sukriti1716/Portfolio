import { Button } from "@mui/material"
import Footer from "./Footer"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

interface Project {
    name: string;
    imgsrc: string;
    technologies: string[];
    sourceCodeLink: string;
    disc:string;
    link:string;
  }

const projects:{ [key: string]: Project }={
    chatapp: {
        name: "Chat-App",
        imgsrc: "chatapp-pic.png",
        technologies: ["React.JS", "JavaScript", "TypeScript", "Socket.io","OpenAI using Gemini", "MongoDB", "Validation & Authentication", "Hosted on AWS"],
        sourceCodeLink: "https://github.com/sukriti1716/Talk-Trek",
        disc:"A MERN Chat-App where users can chat with their friends and use a chatbot created using Gemini and ask questions freely ",
        link:"https://talktrek.sukritibhatia13.com"
      },
      etailing: {
        name: "E-Tailing",
        imgsrc: "E-Tailingpic.png",
        technologies: ["Node.JS", "EJS", "Session & Cookies", "MongoDB", "Validation & Authentication", "Hosted on AWS"],
        sourceCodeLink: "https://github.com/sukriti1716/E-Tailing",
        disc:"A MERN E-Commerce App where users can sell and buy products online ",
        link:"https://etailing.sukritibhatia13.com"
      },
      portfolio: {
        name: "Portfolio",
        imgsrc: "portfoliopic.png",
        technologies: ["Node.JS", "React.JS", "TypeScript", "JavaScript", "Hosted on AWS"],
        sourceCodeLink: "https://github.com/sukriti1716/Portfolio",
        disc:"A Front-End Portfolio project displaying my Projects ,Contact Details, Work Experience and About-Me",
        link:"https://sukritibhatia13.com"
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
        {isloaded && (
            <div style={{backgroundColor:"#DFF5FF",height:"90dvh",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"0rem"}}>
              <div className="maindiv" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"2rem",width:"100%"}}>
                {/* <img src={imaging} alt="" /> */}
                    <div className="image1" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"1rem"}}>
                      <div className="image" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"1rem"}} >
                          <h1 style={{textAlign:"center",color:"white",marginTop:"1rem",marginBottom:"1rem",backgroundColor:"#3C5B6F"}}>{project.name}</h1>
                          <img src={`/${project.imgsrc}`} alt="" height={"100%"} width={"100%"} style={{border:"1px solid black", animation: "scaleInOut 3s ease-in-out infinite",objectFit:"cover"}} />
                      </div>
                      <div style={{color:"white",marginBottom:"1rem",backgroundColor:"#3C5B6F",width:"80%",padding:"1rem",fontSize:"1.2rem"}}>{project.disc}</div>
                    </div> 
                    <div className="content" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem",backgroundColor:"#3C5B6F",padding:"1rem",color:"white",marginRight:"1rem"}}>
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
                            <Button href={project.link} variant="contained">Open</Button>
                        </div>
                    </div>
                </div>
            </div>)
        }
      <Footer />
        
    </>
  )
}

export default ProjectData