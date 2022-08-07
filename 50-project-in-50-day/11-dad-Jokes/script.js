const piadaElement = document.getElementById('joke');
const piadaButton = document.getElementById('jokeBtn');

piadaButton.addEventListener('click', gerarPiadas)

gerarPiadas()

// Usando =  ASYNC / AWAIT

async function gerarPiadas() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const buscarAPI = await fetch('https://icanhazdadjoke.com' , config)

    const dadosRecebidos = await buscarAPI.json()

    piadaElement.innerHTML = dadosRecebidos.joke

}


// USANDO = .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }