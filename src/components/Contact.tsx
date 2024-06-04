
import { FaLinkedin, FaTwitter, FaGithub,FaPhone } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <>
        <div style={{   textAlign: 'center',backgroundColor:"#DFF5FF",marginTop:"4rem",height:"85.7dvh",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column" }}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column",backgroundColor:"#3C5B6F",padding:"3rem",border:"0.1rem solid black",color:"white"}}>
                <h1>Contact Me</h1>

                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexDirection:"column",fontSize:"1,2rem"}}>
                    <p style={{fontSize:"1.1rem"}}>Feel Free to Contact Me!!!</p>
                    <p style={{fontSize:"1.1rem"}}>Glad to Connect</p>
                </div>

                <div style={{ display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem"}}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",gap:"1rem"}}>
                        <div>
                            <IoIosMail size="2rem" />
                        </div>
                        <div> 
                            <Link to="sukritib2004@gmail.com" style={{color:"white", textDecoration: 'none'}}>sukritib2004@gmail.com</Link>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",gap:"1rem"}}>
                        <div>
                            <FaPhone size="2rem" />
                        </div>
                        <div>
                            <Link to="tel:+91 8826356017" style={{color:"white", textDecoration: 'none'}}>+91 8826356017</Link>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <Link to="https://www.linkedin.com/in/sukriti-bhatia-72ab8a221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem'}}><CiLinkedin size="2rem" style={{color:"white"}}/></Link>
                    <Link to="https://github.com/sukriti1716" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem'}}><FaGithub size="2rem" style={{color:"white"}} /></Link>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Contact