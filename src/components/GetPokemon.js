export default async function GetPokemon(setPokemon, pokeNum) {
    const pokemonPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      headers: {
      Accept: "application/json",
      },
    });
    const response = await pokemonPromise;
    const pokemonData = await response.json();
    const pokePic = pokemonData.sprites.other['official-artwork'].front_default
    setPokemon({name: pokemonData.name, picture: pokePic})
  }