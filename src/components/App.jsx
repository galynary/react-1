import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '', // Додано для збереження імені покемона
  };

  handleSubmit = pokemonName => {
    this.setState({ pokemonName }); // Зберігаємо ім'я покемона у стані
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />{' '}
        {/* Виправлено, щоб передати pokemonName */}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
