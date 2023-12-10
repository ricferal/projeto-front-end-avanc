import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

// Reaproveitado em 4 páginas: Estudante, Curso,Pagamento,Form
const Header = ({ title, subtitle,align }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        align= {align}
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h5" 
        color={colors.greenAccent[400]}
        align="center"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
