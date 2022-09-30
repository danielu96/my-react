import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMugHot, FaTimes } from "react-icons/fa";
import { Pagination } from "mdb-react-ui-kit"
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/App.css";
import ReactPaginate from "react-paginate"
import Banerek from "../Layouts/Banerek";

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
// import Mod from "../Layouts/Components/Modal";

const Card = ({ data }) => {
  const { title } = useParams();
  const toggleShow = () => setCentredModal(!centredModal);
  const [centredModal, setCentredModal] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Banerek />
      <div style={{ textAlign: "center", paddingTop: "3rem", fontFamily: "impact", color: "gray" }}>
        <i class="fa fa-coffee fa-3x" aria-hidden="true"></i><h1>Kubki z nadrukiem</h1></div>
      <div className="box">
        {currentItems.map((card, index) => (
          <MDBCard style={{ background: "white" }} className='text-gray mb-3' key={index}>< FaMugHot size="2x" style={{ color: "lightgray", width: "20px", margin: "auto" }} />
            <MDBCardHeader > <h1 >{card.title}</h1></MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle> {card.description}</MDBCardTitle>
              <MDBCardText style={{ color: "gray" }}>
                {card.opis}
              </MDBCardText>
            </MDBCardBody>
            <Link className=" btn" style={{ marginLeft: "1rem" }} onClick={toggleShow} to={`/cards/${card.title}`}> Zobacz</Link>
          </MDBCard>
        ))}
        <div>
          {data
            .filter((card) => card.title === title)
            .map((card, index) => (
              <div key={index}>
                {/* <MDBBtn onClick={toggleShow}>Zobacz</MDBBtn> */}
                <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                  <MDBModalDialog centered>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle > <h1 style={{ paddingLeft: "2.1rem" }}>{card.title}</h1></MDBModalTitle>
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
              </div>))}
        </div>
      </div>
      {/* <Mod /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageLinkClassName={"page-num"}
        previousLinkClassName={"page-num"}
        nextLinkClassName={"page-num"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </>
  );
};
export default Card;