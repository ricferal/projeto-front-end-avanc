# Gerenciamento de Cursos (CRUD)

Este projeto consiste no gerenciamento de Cursos , através de operações de CRUD(Inserir/Editar/Atualizar/Remover) através dos seguintes módulos:
# **Curso:     página de visualização de cursos cadastrados.
# **Estudante: página de visualização de estudantes cadastrados. 
# **Pagamento: página de visualização de pagamentos realizados.
# **DashBoard: painel para visualização rápida de cada módulo, com quantitativo de cadastro de cada módulo.

# Configuração do Ambiente

Este projeto foi criado usando [Create React App](https://react.dev/learn/start-a-new-react-project).

# Para criar um projeto do zero podemos realizar o seguinte:

 `npx create-react-app my-app`

 `cd my-app`

 `npm install`

 `npm start`

# Quando o projeto já existe:
 `cd pasta_do_projeto`

 `npm install`

 `npm start`


# Executando a aplicação no modo desenvolvimento
Acesse [http://localhost:3000](http://localhost:3000) para visualizar no seu browser.

# Projeto Figma 

 O link de acesso:
 Acesse [https://www.figma.com/](https://www.figma.com/).

 # Perguntas sobre a aplicação:
- Qual objetivo da aplicação?
  - Resposta: realizar gerenciamento de cadastro de Cursos (CRUD) com os respectivos módulos: Curso, Estudante e Pagamento.
- Qual são as três páginas projetadas no Figma?
  - Resposta:
   ![Alt text](image.png)
- Como as chamadas foram simuladas (o acesso aos arquivos de dados?
  - Resposta:

  ![Alt text](image-1.png)

  - Através da criação de um arquivo .json para os três módulos.
  - Para cada módulo foi realizado a chamada desse .json e seu acesso foi feito utilizando useEffect:

  ![Alt text](image-2.png)

  - Depois utilizamos essa valor armazenado nessa variável na definição da DataGrid(tabela):

  ![Alt text](image-3.png)

- Quais as três páginas desenvolvidas e os componentes que foram reutilizados?

     - Resposta: __estudantes__ ,__cursos__,__pagamentos__, __dashboard__, __cadastro de estudantes (form)__.
    Componentes reutilizados:

    ![Alt text](image-4.png)
      

