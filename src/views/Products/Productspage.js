import React from 'react'
import { useState } from 'react'
import './productspage.css'
import { products, sales, categories } from './productsdata'
import ProductsCard from '../../components/Products/ProductsCard'
import Footer from './../../components/footer/footer.jsx'
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
        <div className="media-container">
            <div className='social-media  py-3'>
                <a href='https://www.facebook.com/profile.php?id=100026333352542'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/harshalpatil003/?hl=en'> <i className="fa-brands fa-instagram"></i></a>
                <i className="fa-brands fa-twitter"><a href=''></a></i>
                <i className="fa-brands fa-linkedin-in"><a href=''></a></i>
            </div>
        </div>
        {/* <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid list-inline ">
          <a class="navbar-brand" href=""><li><img src={logo} className='logo' /></li></a>

          <div class="collapse navbar-collapse " id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className=''><Link to="/" className='nevigation-menu'>Home</Link></li>
              <li><Link to="/about" className='nevigation-menu'>About</Link></li>
              <li><Link to="/products" className='nevigation-menu'>Product</Link></li>
              <li><Link to="/contact" className='nevigation-menu'>Contact</Link></li>
              <li><Link to="/signup" className='nevigation-menu'>signup</Link></li>
              <li><button className='btn btn-warning login-btn nevigation-menu'>Login</button></li>
            </ul>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav> */}
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
        <Footer />
    </>

    )
}

export default Productspage