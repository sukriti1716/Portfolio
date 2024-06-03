import { Typography,Box,Button } from "@mui/material"
import {AppBar,Toolbar} from "@mui/material"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"



const Navbar = () => {
  return (
    <>
      <div>
            <Box >
            {/* rgba(238,247,255,0.32) */}
                <AppBar sx={{ backgroundColor: '#3C5B6F',zIndex:2}} >
                    <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 ,color:"white"}}>PORTFOLIO</Typography >
                    <div style={{display:"flex",gap:"1rem"}}>
                        <Link to="/"><Button variant="text" sx={{color:"white"}} >Home</Button></Link> 
                        <Link to="/about"><Button variant="text" sx={{color:"white"}} >About</Button> </Link>
                        <Link to="/experience"><Button variant="text" sx={{color:"white"}} >Experience</Button> </Link>
                        <Link to="/project"><Button variant="text" sx={{color:"white"}} >Projects</Button> </Link>
                        <Link to="/contact"><Button variant="text" sx={{color:"white"}} >Contact</Button> </Link>
                    </div>
                   
                    {/*  */}
                    </Toolbar>
                </AppBar>
            </Box>
          
            
        </div>

        <Outlet />
    </>
  )
}

export default Navbar