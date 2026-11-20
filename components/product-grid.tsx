import { Product } from '@/types';
import React from 'react';
import ProductCard from './product-card';


const ProductGrid = ({products} : {products: Product[]}) => {
    if (products.length === 0) {
        return (
        <p>Немає товарів</p>
        );
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
               
        </div>
    );
}

export default ProductGrid;
