import react from 'react';
import { set_GridView, set_ListView, updateSort } from '../Slices/productSlice';
import { useDispatch, useSelector } from "react-redux";
import { BsFillGridFill, BsList } from 'react-icons/bs'
const Sort = () => {

  const {
    filtered_products: products,
    grid_view,
    sort,
    // sort,
    // updateSort,
  } = useSelector((state) => state.products);


  const dispatch = useDispatch()
  const handleUpdateSort = (e) => {
    // const name = e.target.name
    const value = e.target.value
    console.log(value)
    dispatch(updateSort(value,
      //  name
    ))
  }
  const handleSetGridView = () => {
    console.log('grid')
    dispatch(set_GridView())
  }
  const handleSetListView = () => {
    console.log('list')
    dispatch(set_ListView())
  }
  return (
    <div className="product-item">
      <div >
        <button
          onClick={handleSetGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={handleSetListView}
          className={`${!grid_view ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <div className="item-products">
        <p>{products.length} product found</p>
      </div>
      <hr className="item-hr" />
      <form className="item-price" style={{ minHeight: "auto" }}>
        <label className="label" htmlFor='sort'>sort by</label>
        <select name="sort" id="sort" className="sort-input"
          value={sort}
          onChange={handleUpdateSort}
        >
          <option value="price-lowest">price lowest</option>
          <option value="price-highest">price highest</option>
          <option value="name-a">name(a-z)</option>
          <option value="name-z">name(z-a)</option>
        </select>
      </form>
    </div>
  );
}

export default Sort;




// import React from 'react'
// import { useFilterContext } from '../context/filter_context'
// import { BsFillGridFill, BsList } from 'react-icons/bs'
// import styled from 'styled-components'
// const Sort = () => {
//   const {
//     filtered_products: products,
//     grid_view,
//     setGridView,
//     setListView,
//     sort,
//     updateSort,
//   } = useFilterContext()
//   return (
//     <Wrapper>
//       <div className='btn-container'>
//         <button
//           onClick={setGridView}
//           className={`${grid_view ? 'active' : null}`}
//         >
//           <BsFillGridFill />
//         </button>
//         <button
//           onClick={setListView}
//           className={`${!grid_view ? 'active' : null}`}
//         >
//           <BsList />
//         </button>
//       </div>
//       <p>{products.length} products found</p>
//       <hr />
//       <form>
//         <label htmlFor='sort'>sort by</label>
//         <select
//           name='sort'
//           id='sort'
//           value={sort}
//           onChange={updateSort}
//           className='sort-input'
//         >
//           <option value='price-lowest'>price (lowest)</option>
//           <option value='price-highest'>price (highest)</option>
//           <option value='name-a'>name (a - z)</option>
//           <option value='name-z'>name (z - a)</option>
//         </select>
//       </form>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-columns: auto auto 1fr auto;
//   align-items: center;
//   margin-bottom: 2rem;
//   column-gap: 2rem;
//   @media (max-width: 576px) {
//     display: grid;
//     grid-template-columns: 1fr;
//     row-gap: 0.75rem;
//     .btn-container {
//       width: 50px;
//     }
//     label {
//       display: inline-block;
//       margin-right: 0.5rem;
//     }
//   }
//   @media (min-width: 768px) {
//     column-gap: 2rem;
//   }
//   p {
//     text-transform: capitalize;
//     margin-bottom: 0;
//   }
//   .btn-container {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     column-gap: 0.5rem;
//     button {
//       background: transparent;
//       border: 1px solid var(--clr-black);
//       color: var(--clr-black);
//       width: 1.5rem;
//       border-radius: var(--radius);
//       height: 1.5rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       svg {
//         font-size: 1rem;
//       }
//     }
//     .active {
//       background: var(--clr-black);
//       color: var(--clr-white);
//     }
//   }
//   .sort-input {
//     border-color: transparent;
//     font-size: 1rem;
//     text-transform: capitalize;
//     padding: 0.25rem 0.5rem;
//   }
//   label {
//     font-size: 1rem;
//     text-transform: capitalize;
//   }
// `

// export default Sort