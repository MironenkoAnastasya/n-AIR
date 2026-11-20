import { Product } from '@/types';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const ProductCard = ({ product } : { product: Product }) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <Card className='overflow-hidden transition hover:shadow-md' >
                <Image src={product.images[0]} alt={product.title} width={600} height={600} className='w-full object-cover aspect-square' />
                <CardContent className=''>
                    <p>{product.title}</p>
                    <p>{product.price} грн</p>
                    <p>{product.stock===0 ? 'Немає в наявності' : "В наявності"}</p>
                </CardContent>
                
            </Card>
        </Link>
    );
}

export default ProductCard;
