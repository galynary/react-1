export default function PokemonData({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt="{name}"
        width="300"
      />
      <p>{name}</p>
      <ul>
        {stats.map(
          (
            entry //статус пакемона
          ) => (
            <li key={entry.stat.name}>
              {entry.stat.name} :{entry.base_stat}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
