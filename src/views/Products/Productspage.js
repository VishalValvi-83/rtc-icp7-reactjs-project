import React from 'react'
import { useState } from 'react'
import './productspage.css'
import { products, sales, categories } from './productsdata'
import ProductsCard from '../../components/Products/ProductsCard'
function Productspage() {
    const [mostPopularsLimit, setMostPopularsLimit] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const btnLoadMore = () => {
        setMostPopularsLimit(mostPopularsLimit + 8);
    };

    const categoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products.slice(0, mostPopularsLimit);

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
                <div className="category-filter w-25">
                    <h5>Easy To Explore By Categories</h5>
                    <ul className='list-group'>
                        {categories.map((category) => (
                            <li key={category.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                <button
                                    href="."
                                    onClick={() => categoryChange(category.name)}
                                    className={selectedCategory === category.name ? ' active bg-success btn' : 'btn'}
                                >
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="row">
                    {filteredProducts.map((product, index) => (
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
                {mostPopularsLimit < products.length && (
                    <button className="btn b-block w-25 my-4 mx-auto" onClick={btnLoadMore}>Load More</button>
                )}
            </div>
        </div>
        <div className='container'>
          <div className='sale-banner'>
            <h2 className='my-3 text-center'>Offers</h2>
          </div>
          <div className="row">
            {sales.map((sale) => (
              <ProductsCard
                key={sale.id}
                id={sale.productId}
                name={products.find((product) => product.id === sale.productId).name}
                description={products.find((product) => product.id === sale.productId).description}
                price={products.find((product) => product.id === sale.productId).price}
                image={products.find((product) => product.id === sale.productId).image}
                sale={sale}
              />
            ))}
          </div>
        </div>

    </>

    )
}

export default Productspage