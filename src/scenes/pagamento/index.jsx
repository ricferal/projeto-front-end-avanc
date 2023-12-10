import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Visualizar from "../../components/Visualizar";
import pagamentos from '../../data/pagamentos.json';
import { tokens } from "../../theme";


const Pagamento = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [pagamentoList, setPagamentoList] = useState([])

  useEffect(() => {
    setPagamentoList(pagamentos.pagamento)
  }, [])

  const columns = [
    { field: "nome", headerName: "Nome", flex: 0.5 },
    {
      field: "pagamentoAgendado",
      headerName: "Pagamento agendado",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "numeroConta",
      headerName: "Número da Conta",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantiaPaga",
      headerName: "Quantia Paga (R$)",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "valorSaldo",
      headerName: "Valor do saldo",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "data",
      headerName: "Data",
      flex: 1,
    },

    {
      field: "visualizar",
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
            {< Visualizar/>}
           
          </Box>
        );
      },
    },
   
    
  ];

  return (
    <Box m="20px">
      <Header
        title="Detalhe Pagamentos"
        subtitle=""
      />
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
          rows={pagamentoList}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Pagamento;
