import { api } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

const Header = async() => {
    const categories = await api.getCategories();
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex items-center gap-6 p-4">
                <Link href="/" className="text-xl font-bold">
                    Marketplace
                </Link>
                <nav className="flex gap-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="hover:underline"
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>
                <div className='ml-auto'>
                    <Link href="/cart" className="hover:underline">
                        Cart
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
