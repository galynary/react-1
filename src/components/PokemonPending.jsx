import { ImSpinner } from 'react-icons/im';
import pendingImg from '../pending-img.png';
import PokemonData from './PokemonData';

const styles = {
  spinner: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    // animation: 'spin 1s linear infinite',
  },
};

export default function PokemonPending({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImg,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Іде загрузка...
      </div>
      <PokemonData pokemon={pokemon} />
    </div>
  );
}
