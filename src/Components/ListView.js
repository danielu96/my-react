import styled from 'styled-components'
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
// import img from "../Images/latte.png";

const ListView = ({ products }) => {
  const [currentItems, setCurrentItems] = useState([]);
  //  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,
    products
  ]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) %
      products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (
    <Wrapper>
      <div >
        {
          currentItems.map((product) => {
            const { id, Image, name, price, description, opis } = product
            return (
              <article style={{ marginTop: "1rem", height: 'auto', paddingTop: '1rem' }}
                key={id}>
                {/* <img src={img} alt={name} style={{ height: 'auto' }} /> */}
                <img src={`${Image}`} alt={name} style={{ height: 'auto' }} />
                <div>
                  <h4>{name}</h4>
                  <h5 className='price'>{price} zł</h5>
                  {/* <p>{description.substring(0, 150)}...</p> */}
                  <p>{opis}</p>
                  <Link to={`/produkty/${name}`} className='btn'>
                    Details
                  </Link>
                </div>
              </article>
            )
          })
        }
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView


