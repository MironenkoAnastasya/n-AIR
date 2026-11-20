import React from 'react';

type Props = {
    params: Promise<{ slug: string }>;
}
const CategoryPage = async ({params} : Props) => {
    const { slug } = await params;
    return (
        <div>
            <p>Category: {slug}</p>
        </div>
    );
}

export default CategoryPage;
