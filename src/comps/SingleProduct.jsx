import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProduct } from '../contexts/ProductContext';

function SingleProduct() {

    const prams = useParams();
    const { ProductList } = useProduct();

    const [Product, setProduct] = useState();
    const [Load, setLoad] = useState(true)

    useEffect(() => {
      const prod = ProductList.find(element => element.metaLink === prams.id)
      setProduct(prod)
      setLoad(false)
    }, [])
    

  return (
    !Load &&
    <section className='SingleProduct'>
        <div className="container flexy">
            <div className="sinPic"></div>
            <div className="singleDetails flexy sectionDetails">
                <h1>{Product.name}</h1>
                <p>{Product.description}</p>
                <span className='flexy'>
                    <h3>Rs {Product.price}</h3>
                    <div className="qty flexy">
                        <button>
                            <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2V0H15V2H0Z" fill="black"/>
                            </svg>
                        </button>
                        <h3>1</h3>
                        <button>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.4375 8.22584V14.0323H6.5625V8.22584H0.9375V6.29035H6.5625V0.967773H8.4375V6.29035H14.0625V8.22584H8.4375Z" fill="black"/>
                                <ellipse cx="7.5" cy="0.967742" rx="0.9375" ry="0.967742" fill="black"/>
                                <ellipse cx="7.5" cy="14.0323" rx="0.9375" ry="0.967742" fill="black"/>
                                <ellipse cx="14.0625" cy="7.25803" rx="0.9375" ry="0.967742" fill="black"/>
                                <ellipse cx="0.9375" cy="7.25803" rx="0.9375" ry="0.967742" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </span>
                <div className="flexy ctagrp">
                    <div className="cta">
                        <a href=""><button className="prime">Shop Now</button></a>
                    </div>
                    <Link className='wishlistLink'>
                        <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7499 9.43755C34.7499 21.1457 17.8756 31.0001 17.8756 31.0001C17.8756 31.0001 0.999878 21 0.999878 9.46128C0.999878 4.75005 4.74988 1.00005 9.43738 1.00005C14.1249 1.00005 17.8749 6.62505 17.8749 6.62505C17.8749 6.62505 21.6249 1.00005 26.3124 1.00005C30.9999 1.00005 34.7499 4.75005 34.7499 9.43755Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleProduct