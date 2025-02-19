import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

axios
  .get(API_URL)
  .then((response) => {
    console.log(response.data); // Exibe os dados dos usuários
  })
  .catch((error) => {
    console.error("Erro na requisição:", error);
  });

async function getUsers() {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data); // Aqui temos os dados da API
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

getUsers().then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});