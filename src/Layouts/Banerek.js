import { useNavigate } from "react-router-dom";

function Banerek() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/Produkty");
  return (

    <div className='Banerek'>
      <h1>Kubki z nadrukiem
      </h1>
      <p> Imienne, magiczne, latte, z łyżeczką, metalowe... </p>

      <button className='btn_zobacz' onClick={handleOnClick}>wersja testowa strony</button>
    </div>
  );
}

export default Banerek; 