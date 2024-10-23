function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error(`Покемона з іменем ${name} не існує`));
  });
}
const api = { fetchPokemon };
export default api;
