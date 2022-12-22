import { Link } from 'react-router-dom';
import products from '../Cart/cartItems';

const Produkty = () => {
    return (
        <div>
            <h1>PRODUCTS</h1>
            {products.map((product) => {
                return (
                    <article key={product.id}>
                        <h5>{product.title}</h5>
                        <p>{product.cena}</p>
                        <p>{product.availableProducts} dostępne</p>
                        {/* <Link to={`/Produkty/${product.id}`}>more info</Link> */}
                        <Link to={`/Produkty/${product.title}`}>more info</Link>
                    </article>
                );
            })}
        </div>
    );
}

export default Produkty;