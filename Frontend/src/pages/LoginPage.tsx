import { useNavigate } from "react-router";
import "./App.css";

import { Box } from "@chakra-ui/react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate("/home");
  }

  return (
    <>
        <div className="logoSection">
          <p className="do">Do</p>
          <p className="with">With</p>
          <p className="me">Me</p>
        </div>
        <div className="welcomeSection">
          <Box className="loginButton" onClick={goToHomePage}>
            <p>Logga In</p>
          </Box>
          <a className="registerButton" href="/login">
            Skapa Konto
          </a>
        </div>
    </>
  );
};

export default LoginPage;
