// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { shadows } from '@mui/system';
import { Link, useNavigate } from "react-router-dom";

function Banerek() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/Produkty");
  return (

    <div className='Banerek'>
      <h1>Kubki z nadrukiem
      </h1>
      <p> Imienne, magiczne, latte, z łyżeczką, metalowe... </p>

      <button className='btn_zobacz' onClick={handleOnClick}>wykonano w celach naukowych</button>
    </div>
  );
}

export default Banerek; 