
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dataForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  });

  const text = document.getElementById("nome").value;
const btn = document.getElementById("btn");
const responseText = document.getElementById("response").value;

btn.addEventListener("click", getData);

async function getData() {
  try {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  if(!response.ok) throw new Error(`Errore HTTP: ${response.status}`);

  const data = await response.json();
  responseText.innerText = data.title;
  
  } catch (err) {
    console.log("Errore: " + err.message);
  }


}
async function postData() {
  const dati = {
    nome: "Fabio",
    messaggio: "Ciaoooo"
  }
  try {
    const risposta = await fetch('https://jsonplaceholder.typicode.com', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(dati)

    });

    if(!risposta.ok) throw new Error("Errore");

    const risultato = await risposta.json();
    console.log('Risposta server:', risultato);

  } catch (err) {
    console.error("Errore: ", err.message)
  }



});
