import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
//import { toast } from 'react-toastify';
const styles = { form: { marginBottom: 20 } };
export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = event => {
    this.setState({ pokemonName: event.target.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    //this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRigth: 8 }} />
          Знайти
        </button>
      </form>
    );
  }
}
