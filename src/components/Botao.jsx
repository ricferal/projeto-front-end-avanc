import { Box,Button } from "@mui/material";
import { tokens } from "../theme";


// Reaproveitado na página de estudantes (visualização) e na tela de cadastro de estudantes (form)
const Botao = ({ variante ,tipo, nome,tamanho,posicaoConteudo, cor }) => {

  return (
    <Box display="flex" justifyContent= {posicaoConteudo} mt="20px" >
    <Button  type= {tipo}  color={cor} variant={variante} size={tamanho} >
       {nome}
    </Button>
  </Box>
  );
};

export default Botao;
