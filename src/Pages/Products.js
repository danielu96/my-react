import { useDispatch, useSelector } from "react-redux";
import { sort, updateSort, Load_Products, SortProducts, updateFilters, filterProducts, filtered_products, filters } from "../Slices/productSlice";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMugHot, FaTimes } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Css/App.css";
import ReactPaginate from "react-paginate";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import produce, { current } from 'immer';
import ProductList from '../components/ProductList'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader
} from 'mdb-react-ui-kit';
import cartItems from "../Cart/cartItems";

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_cena: 0,
        max_cena: 0,
        cena: 0,
        shipping: false,
    },
}


const Products = ({ data }) => {
    // const { state } = useSelector((state) => state.products);
    const { title } = useParams();
    const toggleShow = () => setCentredModal(!centredModal);
    const [centredModal, setCentredModal] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    //  const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const dispatch = useDispatch()
    const { filtered_products: products } = useSelector((state) => state.products);
    // const state = useSelector((state) => state.initialState);
    // const { filters } = useSelector((state) => state.filters)
    // const { FilterProducts } = useSelector((state) => state.products);

    // const [state] = useSelector((state) => state.filters)


    // const { filters } = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(Load_Products(products));
        console.log(current(products))
        // console.log(current(products))
    }, [products]);


    useEffect(() => {
        // dispatch(SortProducts(products))
        dispatch(filterProducts(products))
        console.log(current(products))
    }, [
        // products.sort,
        products.filters
    ])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,
        cartItems, products
    ]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) %
            products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    // const handleUpdateSort = (e) => {
    //     // const name = e.target.name
    //     const value = e.target.value
    //     // console.log(name, value)
    //     dispatch(updateSort(value,
    //         //  name
    //     ))
    // }
    if (products.length < 1) {
        return (
            <div className="container">
                <h5 style={{ textTransform: 'none', textAlign: 'center' }}>
                    Sorry, no products matched your search.
                </h5>
            </div>
        )
    }
    return (
        <>

            <div className="container"
                style={{ textAlign: "center", paddingTop: "0", fontFamily: "impact", color: "gray" }}
            >
                <i className="fa fa-coffee fa-3x" aria-hidden="true"></i><h1>Kubki z nadrukiem</h1></div>
            <div className="filter-products">

                <Filters />
                <div >
                    <div className="container" style={{ margin: "0 auto 0 auto", height: "auto" }}  >
                        <Sort />
                        {/* <ProductList /> */}
                        {/* <div className="product-item">
                            <div className="item-products">
                                <p>{products.length} product found</p>
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
                        </div> */}
                    </div>
                    <div className="box" style={{ margin: "0 ", paddingBottom: "0", minHeight: "80%", Width: "auto", paddingTop: '0.3rem' }}>
                        {currentItems
                            .map
                            ((card, id) => (
                                <MDBCard style={{ background: "white" }} className='text-gray mb-3' key={id}>< FaMugHot length="2x" style={{ color: "lightgray", width: "20px", margin: "auto" }} />
                                    <MDBCardHeader > <h1 >{card.title}</h1>
                                        <span>{card.cena}</span>
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
                </div>
            </div>
        </>
    );
};
export default Products;

