document.addEventListener('DOMContentLoaded', () => {
    // URL da API para o README.md do repositório
    const apiUrl = 'https://api.github.com/repos/SorenKazam/SorenKazam/contents/README.md?ref=main';

    // Função para buscar e exibir o conteúdo
    async function fetchReadme() {
        try {
            // Fazendo a requisição à API
            const response = await fetch(apiUrl);
            
            // Verifica se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao buscar o README.md');
            }

            // Converte a resposta para JSON
            const data = await response.json();

            // Decodifica o conteúdo do arquivo (base64)
            const content = atob(data.content);

            // Exibe o conteúdo na página
            document.getElementById('readme-content').innerHTML = content;
        } catch (error) {
            // Exibe erro caso algo dê errado
            document.getElementById('readme-content').textContent = `Erro: ${error.message}`;
        }
    }

    // Chama a função para buscar o README.md
    fetchReadme();
});