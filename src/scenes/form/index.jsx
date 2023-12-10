import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CADASTRAR ESTUDANTE"  subtitle="Insira seus dados" align = "center" />
     
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nome}
                name="nome"
                error={!!touched.nome && !!errors.nome}
                helperText={touched.nome && errors.nome}
                sx={{ gridColumn: "span 4" }}
              />
         
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Telefone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telefone}
                name="telefone"
                error={!!touched.telefone && !!errors.telefone}
                helperText={touched.telefone && errors.telefone}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Matricula"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.matricula}
                name="matricula"
                error={!!touched.matricula && !!errors.matricula}
                helperText={touched.matricula && errors.matricula}
                sx={{ gridColumn: "span 4" }}
              />
    
            </Box>
            {/* <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="info" variant="contained">
                Inserir
              </Button>
            </Box> */}

        <Link underline='none' component={RouterLink} to='/estudantes'>
            <Botao variante = "contained" tipo = "button" nome = "Inserir" tamanho = "large"  posicaoConteudo="center" cor="info"/>
        </Link>

          </form>
        )}
      </Formik>
    </Box>
  );
};

// Validações Campos
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  nome: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  telefone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    matricula: yup.string().required("required"),
});
const initialValues = {
  nome: "",
  email: "",
  telefone: "",
  matricula: "",
};

export default Form;
