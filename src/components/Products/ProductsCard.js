import React from 'react'
import './ProductsCard.css'
function ProductsCard({ id, description, name, image, price, sale }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div className="card m-3" >
        <img src={image} className="card-img-top " alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="lh-1 text-start fs-6">{description}</p>
          <p className="card-text text-center">
            {sale ? (
              <span>
                <strike className='text-muted discount-price fs-6'>{price}</strike>
                <span className='text-success fw-bold'>
                  {sale.salePrice}
                </span>
              </span>
            ) : (
              <span className='text-warning fw-bold'>{price}</span>
            )}
          </p>
          <a href="/contact" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard