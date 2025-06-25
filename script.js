//Fetch API: 

/*
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => console.log(data.name)); //"ditto"





async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const data = await response.json();
  console.log(data.name);
}
getPokemon();

*/




//Stampa il nome del Pokémon “pikachu” dalla PokeAPI

async function getPikachu() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

  const pikachu = await response.json();

  console.log(pikachu.name);
  
}

getPikachu();

//Scrivi una funzione async che prende come parametro il nome di un Pokémon e stampa il suo peso.

async function getWeight(pokemon) {
  try {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

   if(!response.ok) throw new Error("Pokemon non trovato");

  const data = await response.json();
  console.log(`${pokemon} pesa ${data.weight}`);
  } catch (error) {
    console.log(error.message);
  }
}