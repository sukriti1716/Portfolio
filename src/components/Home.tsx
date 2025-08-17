import { Button } from "@mui/material";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#DFF5FF",
          height: "90dvh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          className="maindiv t"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          <div className="pic">
            <img
              src="profilepic.jpeg"
              alt=""
              height={"300rem"}
              width={"300rem"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div
            className="writing"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "2rem",
              backgroundColor: "#3C5B6F",
              color: "white",
              animation: "scaleInOut 3s ease-in-out infinite",
            }}
          >
            <div>
              <h1>Hi, I'm Sukriti Bhatia</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontFamily: "sans-serif",
                fontSize: "1.1rem",
                width: "100%",
                borderRadius: "10%",
              }}
            >
              <p>
                I am a Software Developer with expertise in Spring Boot,
                Node.js, and React.js.
              </p>
              <p>
                Explore my projects and feel free to contact me for inquiries!
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
              <Link to="/contact">
                <Button variant="contained">Contact Me</Button>
              </Link>
              <Link to="https://drive.google.com/file/d/1u_sPVHAqM96cHXXQTw9QBqpuNtBAxrXd/view?usp=sharing" target="_blank">
                <Button variant="contained">
                  Resume <LaunchIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
