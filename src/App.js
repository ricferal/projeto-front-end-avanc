import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Curso from "./scenes/curso";
import Dashboard from "./scenes/dashboard";
import Estudantes from "./scenes/estudantes";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Pagamento from "./scenes/pagamento";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import Login from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* Ele tem o componente Search e eh carregado nas 3 páginas: Curso,Estudantes,Pagamento */}
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/curso" element={<Curso />} />
              <Route path="/estudantes" element={<Estudantes />} />
              <Route path="/pagamento" element={<Pagamento />} />
              <Route path="/form" element={<Form />} /> 

              {/* Requisitos da Aplicação: */}
              {/* Componentes reutilizáveis: StatBox, Header, pesquisar, botao? */}
              {/* useState, useEffect , gerencimento Estado: Context (cores), props?  */}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
