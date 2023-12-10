import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SchoolIcon from "@mui/icons-material/School";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import estudantes from '../../data/estudantes.json';
import { Link as RouterLink } from 'react-router-dom'
import Botao from "../../components/Botao";


const Estudantes  = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [estudanteList, setEstudanteList] = useState([])

  useEffect(() => {
    setEstudanteList(estudantes.estudante)
  }, [])

  const columns = [

    {
      field: "admin",
      headerName: "",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[0]
            }
            borderRadius="4px"
          >
            {<SchoolIcon />}
           
          </Box>
        );
      },
    },
    
    { field: "nome", headerName: "Nome", flex: 0.5 },
    { field: "email", headerName: "Email" },
    {
      field: "telefone",
      headerName: "Telefone",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "matricula",
      headerName: "Matricula",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "dataAdmissao",
      headerName: "Data de Admissão",
      flex: 1,
    },
    {
      field: "editar",
      headerName: "",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[0]
            }
            borderRadius="4px"
          >
            {<ModeEditIcon />}
           
          </Box>
        );
      },
    },

    {
      field: "deletar",
      headerName: "",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[0]
            }
            borderRadius="4px"
          >
            {<DeleteIcon />}
           
          </Box>
        );
      },
    },
   
    
  ];

  return (
    <Box m="20px">
      
      <Header
        title="Estudantes"
        subtitle=""
      />

      <Box display="flex" justifyContent="end" mt="20px" component={Link} to="/form" >
        <Link underline='none' component={RouterLink} to='/form'>
                <Botao variante = "contained" tipo = "button" nome = "Adicionar Novo Estudante" tamanho = "large"  posicaoConteudo="center" cor="info"/>
        </Link>
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[0],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[0],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[0],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={estudanteList}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Estudantes;
