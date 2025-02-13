# 📍 Buscador de CEP com React

Este é um aplicativo simples para buscar informações de um CEP usando **React.js** e a API do **ViaCEP**. Ele permite ao usuário inserir um CEP, buscar seus detalhes e visualizar informações como endereço, bairro, cidade e estado.


[![Teste Agora](https://i.imgur.com/NjMHH9O.png)](https://buscador-de-cep-alicessena.vercel.app/)

## 🚀 Funcionalidades


- **Buscar CEP:** O usuário pode inserir um CEP e visualizar os detalhes do endereço correspondente.
- **Feedback com Notificações:** O sistema exibe mensagens informando se a busca foi bem-sucedida ou se ocorreu um erro.
- **Indicador de Carregamento:** Exibe um ícone animado enquanto a requisição está em andamento.
- **Interface Intuitiva:** Design simples e fácil de usar.

<table border="2">
  <tr>
    <td>
        <h3>Sucesso</h3>
        <a href=""><img src="./src/assets/sucesso.gif" width="250px"></a>
    </td>
      <td>
        <h3> Campo Vazio </h3>
        <a href=""><img src="./src/assets/warning.gif" width="250px"></a>
    </td>
    <td>
      <h3> CEP Inválido </h3>
      <a href=""><img src="./src/assets/error.gif" width="250px" ></a>
    </td>
  </tr>

  </table>

## 🛠️ Estrutura do Código

O código está organizado dentro do componente principal `App.js`, que gerencia os estados e eventos da aplicação.

### 📌 Estado do Componente

- `input`: Armazena o CEP digitado pelo usuário.
- `cep`: Guarda os dados retornados pela API.
- `loading`: Controla a exibição do ícone de carregamento.

### 📌 Funções Importantes

- **handleSearch()**:  
  - Valida se o campo de entrada não está vazio.
  - Faz a requisição à API ViaCEP para buscar os detalhes do CEP.
  - Exibe notificações de sucesso ou erro.

- **notify(msg, toastType)**:  
  - Utiliza a biblioteca **React Toastify** para exibir mensagens de alerta.

## 🔍 Como Rodar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/buscador-cep.git
