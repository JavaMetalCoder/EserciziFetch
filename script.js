
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


});
