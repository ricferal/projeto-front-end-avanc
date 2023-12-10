import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import Link from '@mui/material/Link';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import App from "../../App";


const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [component, setComponent] = useState("app")
  const [rendered, setRendered] = useState();
  const navigate = useNavigate();



  return (
     <div>
         <button 
      onClick={ () => {
        navigate("/app",RouterLink="<App/>")
      }

      }
      
      >
        
        teste
      
      
      </button>
     </div>
  );

}
   

export default Login;
