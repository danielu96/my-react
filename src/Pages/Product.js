import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaMugHot, FaTimes } from "react-icons/fa";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
const Product = ({ img, name, price, id, opis, description, colors }) => {




  return (
    <>
      {/* <Wrapper> */}
      <MDBCard style={{ background: "white" }} className='text-gray mb-3' key={id}>< FaMugHot length="2x" style={{ color: "lightgray", width: "20px", margin: "auto" }} />
        <MDBCardHeader > <h1 >{name}</h1>
          <h5>{price} zł</h5>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle> {description}</MDBCardTitle>
          <MDBCardText style={{ color: "gray" }}>
            {opis}
          </MDBCardText>
        </MDBCardBody>
        <Link className=" btn" style={{ marginLeft: "1rem" }} to={`/produkty/${name}`}  > Zobacz</Link>
      </MDBCard>
      {/* </Wrapper> */}

    </>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product

{/* <div className='container'>
        <img src={img} alt={name} style={{ height: '200px', width: 'auto' }} />
        <Link to={`/produkty/${name}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        {/* <p>{price} zł</p> */}
// </footer> 

