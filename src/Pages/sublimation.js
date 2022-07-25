import React from 'react';
import { useNavigate} from 'react-router-dom';
// import '../Styles/Contact.css';
 import '../Styles/App.css';
const Sublimation = () =>{
      const navigate = useNavigate();
      const handleOnClick = () => navigate(-1);
      console.log(navigate);
     return (
                <div className='Contact'>
                <h1>Sublimacja</h1> 
            <p>   Pracownia nadruków działała od 2010 r. do 2017 r. realizaując zlecenia z całej Polski. Firma zajmowała się produkcją kolorowych nadruków reklamowych i grawerem laserowym .

Głównym produktem, a zarazem najpopularniejszym gadżetem dla firm były kubki z nadrukiem kolorowymi lub grawerem laserowym . Nadruki wykonywame były na kubkach zarówno dla klientów pragnących promować swoją firmę jak i klientów indywidualnych. Kubki z nadrukiem  charakteryzowały się wysoką jakością i trwałością nadruku.

W swojej ofercie posiadaliśmy wysokiej klasy kubki,dostępne w szerokiej gamie wzorów. Można było nabyć zarówno klasyczny kubek z logo typu Tomek, jak i kubki z łyżeczką, kubek z kolorowym uchem, wnętrzem, kubki latte,kubki magiczne. 
Kubki z trwałym nadrukiem przeznaczone do mycia w zmywarkach .
Kubki Magiczne, z łyżeczką ,Termiczne , Imienne z Własnym nadrukiem, zdjęciem, napisem, życzeniami na każdą okazję ....</p> 
                
               
                
                <button className='btn_my'  onClick={handleOnClick}>Wróć do poprzedniej strony </button>   
                </div>
     );
 };
 export default Sublimation;