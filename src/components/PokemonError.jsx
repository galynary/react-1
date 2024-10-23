import errorImg from '../smile-sad.png';
export default function PokemonError({ message }) {
  return (
    <div role="alert">
      <img src={errorImg} width="240" alt="сумний смайлик" />
      <p>{message}</p>
    </div>
  );
}
