import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { removeItem, increase, decrease, AddCart } from "../KARTY/kartySlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMugHot, FaTimes } from "react-icons/fa";
import { Pagination } from "mdb-react-ui-kit"
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Css/App.css";
import ReactPaginate from "react-paginate"
import Banerek from "../Layouts/Banerek";
// import { calculateTotals } from "../Cart/cartSlice";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import Modal from "./CardModal";
import NowaLista from "../NowaLista/NowaLista";
import SingleProduct from "./SingleProduct";
const Card = ({ data }) => {
  // const { cartItems } = useSelector((store) => store.CardModal);
  const { title } = useParams();
  const toggleShow = () => setCentredModal(!centredModal);
  const [centredModal, setCentredModal] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const dispatch = useDispatch()
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
  // useEffect(() => {
  //   dispatch(calculateTotals());

  // }, [cartItems]);

  return (
    <>
      <Banerek />
      <div style={{ textAlign: "center", paddingTop: "3rem", fontFamily: "impact", color: "gray" }}>
        <i className="fa fa-coffee fa-3x" aria-hidden="true"></i><h1>Kubki z nadrukiem</h1></div>
      <div className="box">
        {currentItems.map((card, id) => (
          <MDBCard style={{ background: "white" }} className='text-gray mb-3' key={id}>< FaMugHot length="2x" style={{ color: "lightgray", width: "20px", margin: "auto" }} />
            <MDBCardHeader > <h1 >{card.title}</h1></MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle> {card.description}</MDBCardTitle>
              <MDBCardText style={{ color: "gray" }}>
                {card.opis}
              </MDBCardText>
            </MDBCardBody>
            {/* <Link className=" btn" style={{ marginLeft: "1rem" }} onClick={toggleShow} to={`/Modal/${card.title}`}> Zobacz</Link> */}
            {/* <Link className=" btn" style={{ marginLeft: "1rem" }} to={`/Modal/${card.title}`}  > Zobacz</Link> */}
            <Link className=" btn" style={{ marginLeft: "1rem" }} to={`/CardModal/${card.title}`}  > Zobacz</Link>

          </MDBCard>
        ))}
      </div>
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

      {data.map((item) => (
        <div key={item.id}>
          <SingleProduct item={item} />
        </div>
      ))}

    </>
  );
};
export default Card;