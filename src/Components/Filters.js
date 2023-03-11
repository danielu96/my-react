import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

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
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='search'
              onChange={updateFilters}
              className='search-input'
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${category === c.toLowerCase() ? 'active' : null
                      }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='company'
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                )
              })}
            </select>
          </div>
          {/* end of company */}
          {/* colors */}
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${color === 'all' ? 'all-btn active' : 'all-btn'
                        }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${color === c ? 'color-btn active' : 'color-btn'
                      }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of  shipping */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  )
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
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
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
      color: var(--clr-white);
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
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
// import React, { useEffect, useState } from "react";
// import { FaCheck } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { updateFilters, clearFilters, filterProducts } from "../Slices/productSlice";
// import { getUniqueValues } from '../utils/helpers';
// import "../Styles/Css/Filters.css";
// // import cartItems from "../Cart/cartItems";

// const Filters = () => {

//   const {
//     filters: {
//       text,
//       company,
//       category,
//       color,
//       min_cena,
//       max_cena,
//       cena,
//       shipping,
//     },
//     updateFilters,
//     clearFilters,
//     products,
//     all_products,
//     filtered_products
//   } = useSelector((store) => store.product);
//   const dispatch = useDispatch()


//   const handleUpdateFilters = (e) => {
//     let name = e.target.name
//     let value = e.target.value
//     if (name === 'category') {
//       value = e.target.textContent
//     }
//     if (name === 'color') {
//       value = e.target.dataset.color
//     }
//     if (name === 'shipping') {
//       value = e.target.checked
//     }
//     // if (name === 'cena') {
//     //     value = Number(value)
//     // }

//     console.log(name, value)
//     dispatch(updateFilters({ name, value }))
//   }


//   const categories = getUniqueValues(products, 'category')
//   const companies = getUniqueValues(products, 'company')
//   const colors = getUniqueValues(products, 'color')
//   // console.log(categories)



//   return (<div
//     className="content"
//   // className="container" style={{ margin: "0 auto 0 auto" }}
//   >
//     <h4>Filters</h4>
//     <form className="form-controlen" style={{ minHeight: "1rem", width: "8rem" }}
//       onSubmit={(e) => e.preventDefault()}>
//       <input
//         type='text'
//         name="text"
//         placeholder="search"
//         value={text}
//         className="search-input"
//         onChange={handleUpdateFilters} />

//       <div className="form-controlen">
//         <h4>Category</h4>
//         <div>
//           {categories.map((c, index) => {
//             return <button key={index}
//               onClick={handleUpdateFilters}
//               type='button'
//               name="category"
//               className={`${category === c ? 'active' : null}`}
//             >{c}</button>
//           })}
//         </div>
//       </div>
//       <div className="form-controlen">
//         <h5>company</h5>
//         <select
//           name="company"
//           value={company}
//           className='company'
//           onChange={handleUpdateFilters}>
//           {companies.map((c, index) => {
//             return (<option key={index} value={c}>
//               {c}
//             </option>)
//           })}
//         </select>
//       </div>
//       <div className="form-controlen">
//         <h5>colors</h5>
//         <div className="colors">
//           {colors.map((c, index) => {
//             if (c === 'all') {
//               return (
//                 <button
//                   key={index}
//                   name='color'
//                   onClick={handleUpdateFilters}
//                   data-color='all'
//                   className={`${color === 'all' ? 'all-btn active' :
//                     'all-btn'}`}> all </button>
//               )
//             } else {
//               return <button
//                 key={index}
//                 name='color'
//                 style={{ background: c }}
//                 data-color={c}
//                 className={`${color === c ? 'color-btn active' :
//                   'color-btn'}`}
//                 onClick={handleUpdateFilters}>
//                 {color === c ? <FaCheck /> : null}

//               </button>
//             }
//           })}

//         </div>
//       </div>
//       <div className="price">
//         <h5>Price</h5>
//         <p>{cena}</p>
//         <input type='range' name="cena"
//           min={min_cena} max={max_cena}
//           onChange={handleUpdateFilters}
//           value={cena} />
//       </div>
//       <div className='form-control shipping' style={{ border: 'none' }}>
//         <label htmlFor='shipping'>free shipping</label>
//         <input
//           type='checkbox'
//           name='shipping'
//           id='shipping'
//           checked={shipping}
//           onChange={handleUpdateFilters}
//         />
//       </div>
//     </form>
//     <button type='button' className='clear-btn'
//       // onClick={handleClearFilters}
//       onClick={() => {
//         dispatch(clearFilters())
//       }
//       }
//     >
//       clear filters
//     </button>

//   </div>);
// }

// export default Filters;
// // import React from 'react'
// // import styled from 'styled-components'
// // import { useFilterContext } from '../context/filter_context'
// // import { getUniqueValues, formatPrice } from '../utils/helpers'
// // import { FaCheck } from 'react-icons/fa'

// // const Filters = () => {
// //   const {
// //     filters: {
// //       text,
// //       category,
// //       company,
// //       color,
// //       min_cena,
// //       max_cena,
// //       cena,

// //       shipping,
// //     },
// //     updateFilters,
// //     all_products,
// //     clearFilters,
// //   } = useFilterContext()

// //   const categories = getUniqueValues(all_products, 'category')
// //   const companies = getUniqueValues(all_products, 'company')
// //   const colors = getUniqueValues(all_products, 'colors')
// //   return (
// //     <Wrapper>
// //       <div className='content'>
// //         <form onSubmit={(e) => e.preventDefault()}>
// //           {/* search input */}
// //           <div className='form-control'>
// //             <input
// //               type='text'
// //               name='text'
// //               value={text}
// //               placeholder='search'
// //               onChange={updateFilters}
// //               className='search-input'
// //             />
// //           </div>
// //           {/* end of search input */}
// //           {/* category */}
// //           <div className='form-control'>
// //             <h5>category</h5>
// //             <div>
// //               {categories.map((c, index) => {
// //                 return (
// //                   <button
// //                     key={index}
// //                     onClick={updateFilters}
// //                     type='button'
// //                     name='category'
// //                     className={`${category === c.toLowerCase() ? 'active' : null
// //                       }`}
// //                   >
// //                     {c}
// //                   </button>
// //                 )
// //               })}
// //             </div>
// //           </div>
// //           {/* end of category */}
// //           {/* company */}
// //           <div className='form-control'>
// //             <h5>company</h5>
// //             <select
// //               name='company'
// //               value={company}
// //               onChange={updateFilters}
// //               className='company'
// //             >
// //               {companies.map((c, index) => {
// //                 return (
// //                   <option key={index} value={c}>
// //                     {c}
// //                   </option>
// //                 )
// //               })}
// //             </select>
// //           </div>
// //           {/* end of company */}
// //           {/* colors */}
// //           <div className='form-control'>
// //             <h5>colors</h5>
// //             <div className='colors'>
// //               {colors.map((c, index) => {
// //                 if (c === 'all') {
// //                   return (
// //                     <button
// //                       key={index}
// //                       name='color'
// //                       onClick={updateFilters}
// //                       data-color='all'
// //                       className={`${color === 'all' ? 'all-btn active' : 'all-btn'
// //                         }`}
// //                     >
// //                       all
// //                     </button>
// //                   )
// //                 }
// //                 return (
// //                   <button
// //                     key={index}
// //                     name='color'
// //                     style={{ background: c }}
// //                     className={`${color === c ? 'color-btn active' : 'color-btn'
// //                       }`}
// //                     data-color={c}
// //                     onClick={updateFilters}
// //                   >
// //                     {color === c ? <FaCheck /> : null}
// //                   </button>
// //                 )
// //               })}
// //             </div>
// //           </div>
// //           {/* end of colors */}
// //           {/* price */}
// //           <div className='form-control'>
// //             <h5>cena</h5>
// //             <p className='price'>{formatPrice(cena)}</p>
// //             <input
// //               type='range'
// //               name='price'
// //               onChange={updateFilters}
// //               min={min_cena}
// //               max={max_cena}
// //               value={cena}
// //             />
// //           </div>
// //           {/* end of price */}
// //           {/* shipping */}
// //           <div className='form-control shipping'>
// //             <label htmlFor='shipping'>free shipping</label>
// //             <input
// //               type='checkbox'
// //               name='shipping'
// //               id='shipping'
// //               checked={shipping}
// //               onChange={updateFilters}
// //             />
// //           </div>
// //           {/* end of  shipping */}
// //         </form>
// //         <button type='button' className='clear-btn' onClick={clearFilters}>
// //           clear filters
// //         </button>
// //       </div>
// //     </Wrapper>
// //   )
// // }

// // const Wrapper = styled.section`
// //   .form-control {
// //     margin-bottom: 1.25rem;
// //     h5 {
// //       margin-bottom: 0.5rem;
// //     }
// //   }
// //   .search-input {
// //     padding: 0.5rem;
// //     background: var(--clr-grey-10);
// //     border-radius: var(--radius);
// //     border-color: transparent;
// //     letter-spacing: var(--spacing);
// //   }
// //   .search-input::placeholder {
// //     text-transform: capitalize;
// //   }
// //   button {
// //     display: block;
// //     margin: 0.25em 0;
// //     padding: 0.25rem 0;
// //     text-transform: capitalize;
// //     background: transparent;
// //     border: none;
// //     border-bottom: 1px solid transparent;
// //     letter-spacing: var(--spacing);
// //     color: var(--clr-grey-5);
// //     cursor: pointer;
// //   }
// //   .active {
// //     border-color: var(--clr-grey-5);
// //   }
// //   .company {
// //     background: var(--clr-grey-10);
// //     border-radius: var(--radius);
// //     border-color: transparent;
// //     padding: 0.25rem;
// //   }
// //   .colors {
// //     display: flex;
// //     align-items: center;
// //   }
// //   .color-btn {
// //     display: inline-block;
// //     width: 1rem;
// //     height: 1rem;
// //     border-radius: 50%;
// //     background: #222;
// //     margin-right: 0.5rem;
// //     border: none;
// //     cursor: pointer;
// //     opacity: 0.5;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     svg {
// //       font-size: 0.5rem;
// //       color: var(--clr-white);
// //     }
// //   }
// //   .all-btn {
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     margin-right: 0.5rem;
// //     opacity: 0.5;
// //   }
// //   .active {
// //     opacity: 1;
// //   }
// //   .all-btn .active {
// //     text-decoration: underline;
// //   }
// //   .price {
// //     margin-bottom: 0.25rem;
// //   }
// //   .shipping {
// //     display: grid;
// //     grid-template-columns: auto 1fr;
// //     align-items: center;
// //     text-transform: capitalize;
// //     column-gap: 0.5rem;
// //     font-size: 1rem;
// //   }
// //   .clear-btn {
// //     background: var(--clr-red-dark);
// //     color: var(--clr-white);
// //     padding: 0.25rem 0.5rem;
// //     border-radius: var(--radius);
// //   }
// //   @media (min-width: 768px) {
// //     .content {
// //       position: sticky;
// //       top: 1rem;
// //     }
// //   }
// // `

// // export default Filters