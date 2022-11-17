// import {
//   ADD, EDIT, DELETE, Data,
//   INCREASE,
//   DECREASE,
//   CLEAR_CART,
//   REMOVE,
//   GET_TOTALS,
//   TOGGLE_AMOUNT
// } from '../actions/appActions';

// export const appReducer = (state = [], action) => {
//   console.log('Będziemy tworzyć nowy stan aplikacji :)')
//   switch (action.type) {
//     case ADD:
//       return [...state, action.payload];
//     case EDIT:
//       return state.map(currentStateElement => {
//         if (currentStateElement.id !== action.payload.id) {
//           return currentStateElement;
//         }

//         const { title, tekst, cena, ilosc, date, availableProducts, input, calculation, count, selectedDate
//         } = action.payload;

//         return ({
//           title,
//           tekst,
//           id: currentStateElement.id,
//           cena,
//           date,
//           availableProducts,


//         });
//       });
//     case DELETE:
//       return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);

//     default:
//       console.warn(`Nie mamy akcji typu: ${action.type}`);
//       return state;
//   }
// }