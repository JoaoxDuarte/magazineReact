import { catalog } from '../../utils/catalog';
import ProductCard from './ProductCard';

const ProductsContainer = () => {
return (
    <section className='container flex flex-wrap mx-auto
    p-10 justify-center gap-10'>
{catalog.map((product) => (
    <ProductCard key={`product_${product.id}_key`} {...product} />
))}
    </section>

    /* OR <ProductCard id={product.id} 
    feminine={product.feminine} brand={product.brand}/> */
);

};

export default ProductsContainer;