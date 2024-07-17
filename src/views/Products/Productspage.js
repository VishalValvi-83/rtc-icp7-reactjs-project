import React from 'react'
import { useState } from'react'
import './productspage.css'
import { products, sales } from './productsdata'
import ProductsCard from '../../components/Products/ProductsCard'
function Productspage() {
    const [mostPopularsLimit, setMostPopularsLimit] = useState(8);

    return (<>
        <div className="brand_color">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>our product</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="products m-5">
            <div className="title text-center">
                <span className="mt-3 fs-4">We package the products with best services to make you a <span className='customer'>happy customer </span>.</span>
            </div>
        </div>
        <div className="product-bg-white">
            <div className="container">
                <div className="row">
                    {products.slice(0, mostPopularsLimit).map((product, index) => (
                        <ProductsCard
                            key={index}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            sale={sales.find((sale) => sale.productId === product.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>

    )
}

export default Productspage