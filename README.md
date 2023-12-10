# Gerenciamento de Cursos (CRUD)

Este projeto consiste no gerenciamento de Cursos , através de operações de CRUD(Inserir/Editar/Atualizar/Remover) através dos seguintes módulos:
 - __Curso__:     página de visualização de cursos cadastrados.
 - __Estudante__: página de visualização de estudantes cadastrados. 
 - __Pagamento__: página de visualização de pagamentos realizados.
 - __DashBoard__: painel para visualização rápida de cada módulo, com quantitativo de cadastro de cada módulo.

# Configuração do Ambiente

Este projeto foi criado usando [Create React App](https://react.dev/learn/start-a-new-react-project).

# Para criar um projeto do zero podemos realizar o seguinte:

 - `npx create-react-app my-app`

 - `cd my-app`

 - `npm install`

 - `npm start`

# Quando o projeto já existe:

 
 - [Baixar o projeto do GitHub](https://github.com/ricferal/projeto-front-end-avanc/tree/main)
   
   ![](/public/assets/image-7.png)

 - `cd pasta_do_projeto`

 - `npm install`

 - `npm start`


# Executando a aplicação no modo desenvolvimento
- Acesse [http://localhost:3000](http://localhost:3000) para visualizar no seu browser.

# Projeto Figma (Protótipo)

 Link de acesso ao Projeto:
 - [https://www.figma.com/file/NueuP3QBWflw0M0QbAFLo4/Crud-Operations-(Community)?type=design&node-id=0-1&mode=design&t=ylXa9ZohyYhOPCaI-0](https://www.figma.com/file/NueuP3QBWflw0M0QbAFLo4/Crud-Operations-(Community)?type=design&node-id=0-1&mode=design&t=ylXa9ZohyYhOPCaI-0).

 Protótipo com interatividade:
 - [https://www.figma.com/proto/NueuP3QBWflw0M0QbAFLo4/Crud-Operations-(Community)?type=design&node-id=17-2&t=ylXa9ZohyYhOPCaI-0&scaling=min-zoom&page-id=0%3A1](https://www.figma.com/proto/NueuP3QBWflw0M0QbAFLo4/Crud-Operations-(Community)?type=design&node-id=17-2&t=ylXa9ZohyYhOPCaI-0&scaling=min-zoom&page-id=0%3A1).

  Projeto Figma (GitHub):
 - https://github.com/ricferal/projeto-front-end-avanc/tree/main/figma


 # Perguntas/Respostas sobre a aplicação:
- Qual objetivo da aplicação?
  - Resposta: realizar gerenciamento de cadastro de Cursos (CRUD) com os respectivos módulos: Curso, Estudante e Pagamento.
- Qual são as três páginas projetadas no Figma?
  - Resposta:

    ![](/public/assets/image.png)
- Como as chamadas foram simuladas (o acesso aos arquivos de dados?)
  - Resposta:
  
  ![](/public/assets/image-1.png)

  - Através da criação de um arquivo .json para os três módulos.
  - Para cada módulo foi realizado a chamada desse .json e seu acesso foi feito utilizando useEffect:

  ![](/public/assets/image-2.png)

  - Depois utilizamos essa valor armazenado nessa variável na definição da DataGrid(tabela):

    ![](/public/assets/image-3.png)

- Quais as três páginas desenvolvidas e os componentes que foram reutilizados?

     - Resposta: __estudantes__ ,__cursos__,__pagamentos__, __dashboard__, __cadastro de estudantes (form)__.
    Componentes reutilizados:

   ![](/public/assets/image-4.png)
  
      

