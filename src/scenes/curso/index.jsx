import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Visualizar from "../../components/Visualizar";
import cursos from '../../data/cursos.json';
import { tokens } from "../../theme";

const Curso = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [cursoList, setCursoList] = useState([])

  useEffect(() => {
    setCursoList(cursos.curso)
  }, [])

  const columns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "duracao",
      headerName: "Duração",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "aulaPresencial",
      headerName: "Aula Presencial",
      flex: 1,
    },
    {
      field: "valorBruto",
      headerName: "Valor Bruto",
      flex: 1,
    },
    {
      field: "mensalidade",
      headerName: "Mensalidade",
      flex: 1,
    },
    {
      field: "data",
      headerName: "Data",
      flex: 1,
    },
    {
      field: "visualizar",
      headerName: "",
      flex: 1,
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
            {<Visualizar />}
           
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Detalhe Cursos" subtitle=""  align = "left" />
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
        }}
      >
        <DataGrid  rows={cursoList} columns={columns} />
      </Box>
    </Box>
  );
};

export default Curso;
