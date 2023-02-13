import { data } from '../Cart/cartItems'

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    // console.log(unique)
    // if (type === 'colors') {
    //     unique = unique.flat()
    //    
    // }
    return ['all', ...new Set(unique)]
}