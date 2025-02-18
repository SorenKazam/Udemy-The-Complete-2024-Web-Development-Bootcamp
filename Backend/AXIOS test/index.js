import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response.data); // Exibe os dados dos usuários
  })
  .catch((error) => {
    console.error("Erro na requisição:", error);
  });

async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data); // Aqui temos os dados da API
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

getUsers(); // Chamamos a função para buscar os dados
