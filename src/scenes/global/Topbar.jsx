import { useTheme } from "@mui/material";
import { useContext } from "react";
import Pesquisar from "../../components/Pesquisar";
import { ColorModeContext, tokens } from "../../theme";


//barra Superior
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
     <Pesquisar color = {colors} />
  );
};

export default Topbar;
