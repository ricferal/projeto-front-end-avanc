import BookmarkIcon from "@mui/icons-material/Bookmark";
import PaidIcon from '@mui/icons-material/Paid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SchoolIcon from "@mui/icons-material/School";
import { Box, useTheme } from "@mui/material";
import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import StatBox from "../../components/StatBox";
import estudantes from '../../data/estudantes.json';
import cursos from '../../data/cursos.json';
import pagamentos from '../../data/pagamentos.json';

import { tokens } from "../../theme";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [estudanteListTamanho, setEstudanteListTamanho] = useState([])
  const [cursoListTamanho, setCursoListTamanho] = useState([])
  const [pagamentoList, setPagamentoList] = useState([])
  let total = 0
               
  useEffect(() => {
    setEstudanteListTamanho(estudantes.estudante)
  }, [])

  useEffect(() => {
    setCursoListTamanho(cursos.curso)
  }, [])

  useEffect(() => {
    setPagamentoList(
      pagamentos.pagamento
    )
  }, [])

  pagamentoList.map((pagamentoList) => 
     total += parseInt(pagamentoList.quantiaPaga)
  )

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="150px"
        gap="30px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={"#F0F9FF"}
          display="flex"
        >
         <Link underline='none' component={RouterLink} to='/estudantes'>

          <StatBox
            title ="Estudantes"
            subtitle =  {estudanteListTamanho.length.toString()}  
            ProgressCircle=""
            icon={
              <SchoolIcon
                to={"/estudantes"}
                sx={{ color: colors.greenAccent[901], fontSize: "26px" }}
              />
            }
          />
          </Link>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#F6C762"}
          display="flex"
        >
        <Link underline='none' component={RouterLink} to='/curso'>

          <StatBox
            title="Cursos"
            subtitle =  {cursoListTamanho.length}  
            icon={
              <BookmarkIcon
                sx={{ color: colors.greenAccent[901], fontSize: "26px" }}
              />
            }
          />
          </Link>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#FEFBEC"}
          display="flex"
        >
        <Link underline='none' component={RouterLink} to='/pagamento'>

          <StatBox
            title="PAGAMENTOS" 
            color = {"#90C5C8"}
            subtitle= {
               "R$ " +total.toString()
            }

            progress="0.30"
            backgroundColor={"#90C5C8"}
            icon={
              <PaidIcon
                sx={{ color: colors.greenAccent[902], fontSize: "26px" }}
              />
            }
          />
          </Link>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#90C5C8"}
          display="flex"
        >
          <StatBox
            title="Usuários"
            subtitle="1"
            icon={
              <PersonOutlineIcon
                sx={{ color: colors.greenAccent[903], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
