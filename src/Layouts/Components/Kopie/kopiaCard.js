import React , { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMugHot, FaTimes } from "react-icons/fa";
import { Pagination} from "mdb-react-ui-kit"
import { useParams, useNavigate } from "react-router-dom";
import "./Styles/App.css";
import ReactPaginate from"react-paginate"

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
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
const Card = ({ data }) => {
  const { title } = useParams();
  const toggleShow = () => setCentredModal(!centredModal);
  const [centredModal, setCentredModal] = useState(false);

  const [card, setCard] = useState(data.slice(0,3))
  const [pageNumber, setPageNumber] = useState(0)
  const CardPage = 6
  const pagesVisited = pageNumber * CardPage
  const displayCard = data.slice(pagesVisited, pagesVisited + CardPage).map((card) =>{
    return (
      <div className="box">
     <MDBCard  style={{background:"white"}} className='text-gray mb-3' >
     <MDBCardHeader > <h1 >{card.title}</h1></MDBCardHeader>
     <MDBCardBody>
      <MDBCardTitle> {card.description}</MDBCardTitle>
       <MDBCardText style={{color:"gray"}}>
      {card.opis}
      </MDBCardText>
     </MDBCardBody>
      <Link className="btn" style={{marginLeft:"1rem"}}onClick={toggleShow} to={`/cards/${card.title}`}> Zobacz</Link>
      </MDBCard>  
    </div>
    
  //   <div className="box">
  //   {data.map((card, index) => (
  //      <MDBCard  style={{background:"white"}} className='text-gray mb-3'  key={index}>< FaMugHot size="2x" style={{color:"lightgray", width:"20px" , margin:"auto"}}/>
  //   <MDBCardHeader > <h1 >{card.title}</h1></MDBCardHeader>
  //   <MDBCardBody>
  //     <MDBCardTitle> {card.description}</MDBCardTitle>
  //     <MDBCardText style={{color:"gray"}}>
  //     {card.opis}
  //     </MDBCardText>
  //   </MDBCardBody>
  //    <Link className="btn" style={{marginLeft:"1rem"}}onClick={toggleShow} to={`/cards/${card.title}`}> Zobacz</Link>
  // </MDBCard>          
       
     
      
  //    ))} 
  //      </div>
  )
});

 
  const pageCount = Math.ceil(card.lenght / CardPage);

  const changePage = ({ selected}) => {
    setPageNumber(selected);
  };

  return (
    <>
    <div style={{textAlign:"center" , paddingTop:"3rem" , fontFamily:"impact" , color:"gray"}}> 
     <i class="fa fa-coffee fa-3x" aria-hidden="true"></i><h1>Kubki z nadrukiem</h1></div>
         
      {/* <div className="box">{displayCard}
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}

      />
      </div> */}
      {/* <div className="box">
        {data.map((card, index) => (
           <MDBCard  style={{background:"white"}} className='text-gray mb-3'  key={index}>< FaMugHot size="2x" style={{color:"lightgray", width:"20px" , margin:"auto"}}/>
        <MDBCardHeader > <h1 >{card.title}</h1></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle> {card.description}</MDBCardTitle>
          <MDBCardText style={{color:"gray"}}>
          {card.opis}
          </MDBCardText>
        </MDBCardBody>
         <Link className="btn" style={{marginLeft:"1rem"}}onClick={toggleShow} to={`/cards/${card.title}`}> Zobacz</Link>
      </MDBCard>          
           
         
          
        ))}
      </div> */}
    
      <div>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div  key={index}>
{/* <MDBBtn onClick={toggleShow}>Zobacz</MDBBtn> */}

<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
  <MDBModalDialog centered>
  <MDBModalContent>
  <MDBModalHeader>
         <MDBModalTitle > <h1 style={{paddingLeft:"2.1rem"}}>{card.title}</h1></MDBModalTitle>  
         <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> 
         </MDBModalHeader>
          <MDBModalBody>
            <div className="opis">{card.opis}</div>
            <img className="Image" src={`${card.Image}`} alt="kubek czarny"></img>
            {/* <button className="btn_my" onClick={handleOnClick}>
              Wróć do poprzedniej strony{" "}
            </button> */}
            </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='primary' onClick={toggleShow}>
                Close
              </MDBBtn>
              </MDBModalFooter>
              </MDBModalContent>
    </MDBModalDialog>
    </MDBModal>
  
          </div>
  

        ))}
        
        
 {/* <nav aria-label="..."  >
  <ul class="pagination pagination-lg justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="Sublimation">2</a></li>
    <li class="page-item"><a class="page-link" href="Contact">3</a></li>
    <li class="page-item"><a class="page-link" href="Formularz">4</a></li>
  </ul>
</nav> */}

    </div>

    </>
  );
};
export default Card;
  {/* <img className="img" src={`${card.img}`} alt="..."></img> */}