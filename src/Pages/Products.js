import { useDispatch, useSelector } from "react-redux";
import { sort, updateSort } from "../Slices/productSlice";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMugHot, FaTimes } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Css/App.css";
import ReactPaginate from "react-paginate"



import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader
} from 'mdb-react-ui-kit';
const Products = ({ data }) => {
    const { title } = useParams();
    const toggleShow = () => setCentredModal(!centredModal);
    const [centredModal, setCentredModal] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    //  const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const dispatch = useDispatch()
    const { FilterProducts } = useSelector((state) => state.products);
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(FilterProducts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(FilterProducts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data, FilterProducts]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const handleUpdateSort = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        dispatch(updateSort(value))
    }
    // let FilterCurrentCartItems = FilterCartItems.concat(currentItems);

    // useEffect(() => {
    //   dispatch(calculateTotals());

    // }, [cartItems]);

    return (
        <>
            {/* <div className='container'>
                {cartItems.map((item) => {
                    return <div key={item.id}{...item} />
                })
                }
            </div> */}

            <div style={{ textAlign: "center", paddingTop: "3rem", fontFamily: "impact", color: "gray" }}>
                <i className="fa fa-coffee fa-3x" aria-hidden="true"></i><h1>Kubki z nadrukiem</h1></div>
            <div className="container" style={{ margin: "0 auto 0 auto" }}>
                <div className="product-item">
                    <div className="item-products">
                        <p>{data.length} product found</p>
                    </div>
                    <hr className="item-hr" />
                    <form className="item-price" style={{ minHeight: "auto" }}>
                        <label className="label" htmlFor='sort'>sort by</label>
                        <select name="sort" id="sort" className="sort-input"
                            value={sort}
                            onChange={handleUpdateSort}>
                            <option value="price-lowest">price lowest</option>
                            <option value="price-highest">price highest</option>
                            <option value="name-a">name(a-z)</option>
                            <option value="name-z">name(z-a)</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="box">
                {currentItems
                    .map
                    ((card, id) => (
                        <MDBCard style={{ background: "white" }} className='text-gray mb-3' key={id}>< FaMugHot length="2x" style={{ color: "lightgray", width: "20px", margin: "auto" }} />
                            <MDBCardHeader > <h1 >{card.title}</h1>
                                {/* <span>{card.cena}</span> */}
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle> {card.description}</MDBCardTitle>
                                <MDBCardText style={{ color: "gray" }}>
                                    {card.opis}
                                </MDBCardText>
                            </MDBCardBody>
                            <Link className=" btn" style={{ marginLeft: "1rem" }} to={`/Produkty/${card.title}`}  > Zobacz</Link>
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

        </>
    );
};
export default Products;

