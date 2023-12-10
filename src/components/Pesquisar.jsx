import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { Box, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";


const Pesquisar = ({color}) => {
  const theme = useTheme();
 // const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  return (
    <Box display="flex"   justifyContent="right" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={color.primary[400]}
        borderRadius="3px"
        
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon justifyContent ="space" />
        </IconButton>
      </Box>
        {/* ICONS */}
          <Box display="flex">
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
        
        </Box>
      </Box>
  );
};

export default Pesquisar;
