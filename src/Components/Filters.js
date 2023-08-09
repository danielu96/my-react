import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";


const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  const dispatch = useDispatch()
  return (
    <Wrapper>

      <div
        className="content"
      // className="container" style={{ margin: "0 auto 0 auto" }}
      >
        <h3 className='filteren'>Filters</h3>
        <form className="form-controlen" style={{ minHeight: "1rem", width: "8rem" }}

          onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            name="text"
            placeholder="search"
            value={text}
            className="search-input"
            onChange={updateFilters} />

          <div className="form-controlen" style={{ marginBottom: '1rem' }}>
            <h4>Kategorie</h4>
            <div>
              {categories.map((c, index) => {
                return <button key={index}
                  onClick={updateFilters}
                  type='button'
                  name="category"
                  className={`${category === c ? 'active' : null}`}
                >{c}</button>
              })}
            </div>
          </div>
          <div className="form-controlen">
            <h5>Produkt</h5>
            <select
              name="company"
              value={company}
              className='company'
              onChange={updateFilters}>
              {companies.map((c, index) => {
                return (<option key={index} value={c}>
                  {c}
                </option>)
              })}
            </select>
          </div>
          <div className="form-controlen">
            <h5>Kolory</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${color === 'all' ? 'all-btn active' :
                        'all-btn'}`}> all </button>
                  )
                } else {
                  return <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    data-color={c}
                    className={`${color === c ? 'color-btn active' :
                      'color-btn'}`}
                    onClick={updateFilters}>
                    {color === c ? <FaCheck /> : null}
                  </button>
                }
              })}
            </div>
          </div>
          <div className="price">
            <h5>Cena</h5>
            <p>{price} zł</p>
            <input type='range' name="price"
              min={min_price} max={max_price}
              onChange={updateFilters}
              value={price} />
          </div>
          <div className='form-controlen shipping' style={{ border: 'none' }}>
            <label htmlFor='shipping'>dostawa</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          <button type='button' className='clear-btn' onClick={clearFilters}>
            clear filters
          </button>
        </form>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 3px;
    color: gray;
    cursor: pointer;
  }
  .active {
    border-color: gray;
  }
  .company {
    background: white;
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem;
    margin-bottom:2rem;
    

  }
  .colors {
    display: flex;
    align-items: center;
    border:none;
    margin-bottom:1rem;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: white;
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    width: fit-content;
    background: red;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    float:none;
  }
  @media (min-width: 768px) {
    .content {
  
      position: sticky;
      top: 1rem;
    }
  }
  @media(min-width:768px) {
    .filteren {
      margin: 0 auto 0 auto;
    }
  }
 
`

export default Filters


