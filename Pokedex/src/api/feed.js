const lerPokemons = async (callback) => {
    const pokemonsHTTP = await fetch('http://10.0.2.2:3333/pokemons');
    const pokemonsJSON = await pokemonsHTTP.json();
    callback(pokemonsJSON);
}

export default lerPokemons;