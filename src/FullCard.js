import React , { useState }from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Styles/Contact.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
const FullCard = ({ data }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const handleOnClick = () => navigate(-1);
  console.log(navigate);

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <>
    {/* <div>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div className="MDBModal" key={index}>
         <MDBModalTitle> <h1>{card.title}</h1></MDBModalTitle>   
            <div className="opis">{card.opis}</div>
            <img className="Image" src={`${card.Image}`} alt="..."></img>
            <button className="btn_my" onClick={handleOnClick}>
              Wróć do poprzedniej strony{" "}
            </button>
          </div>
        ))}
    </div> */}
      
        <div>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div  key={index}>
<MDBBtn onClick={toggleShow}>Zobacz</MDBBtn>

<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
  <MDBModalDialog centered>
  <MDBModalContent>
  <MDBModalHeader>
         <MDBModalTitle> <h1>{card.title}</h1></MDBModalTitle>  
         <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> 
         </MDBModalHeader>
          <MDBModalBody>
            <div className="opis">{card.opis}</div>
            <img className="Image" src={`${card.Image}`} alt="..."></img>
            {/* <button className="btn_my" onClick={handleOnClick}>
              Wróć do poprzedniej strony{" "}
            </button> */}
            </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              </MDBModalFooter>
              </MDBModalContent>
    </MDBModalDialog>
    </MDBModal>
          </div>
        ))}
    </div>
    
       



      




      </>
  );
};
export default FullCard;
