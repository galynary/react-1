import { Component } from 'react';
import PokemonError from './PokemonError';
import PokemonData from './PokemonData';
import PokemonPending from './PokemonPending';
import pokemonApi from '../services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle', // статус компонента
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName && nextName) {
      // Перевіряємо, що nextName не є порожнім
      this.setState({ status: 'pending' });
      pokemonApi
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => {
          // Перевірка наявності поля message в об'єкті помилки
          const errorMessage = error.message
            ? error.message
            : 'Невідома помилка';
          this.setState({
            error: { message: errorMessage },
            status: 'rejected',
          });
        });
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введіть ім'я покемона</div>;
    }
    if (status === 'pending') {
      return <PokemonPending pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonError message={error.message}></PokemonError>;
    }
    if (status === 'resolved') {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}
