import React from 'react'
import { useProduct } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'

function CollectionsGrid() {

    const { ProductList, AddCheckout, Checkout } = useProduct()
    const db = ProductList

    function handleCheckout(element) {
        AddCheckout(element)
        console.log(Checkout)
    }

  return (
    <section className='CollectionsGrid'>
        <div className="container">
            <nav className='flexy'> 
                <span className='flexy'>
                    <p>Filter</p>
                    <svg width="15" height="15" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7254 1.72461L20.4754 17.1263V29.174L13.4107 31.7246V17.1263L1.72543 1.72461H31.7254Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span className='flexy'>
                    <p>Sort by</p>
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L10 0L0 0L5 5Z" fill="black"/>
                    </svg>
                </span>
            </nav>
            

            <div className="productgrid flexy">
                <aside>
                    <div className="asideMenus">
                        <ul>
                            <li><a href="">Plates</a></li>
                            <li><a href="">Cups</a></li>
                            <li><a href="">Art Works</a></li>
                        </ul>
                    </div>
                </aside>
                <div className="gridContainer flexy">
                    {
                        db.map((element) => {
                            return (
                                <div className="productBlock" key={element.id}>
                                    <Link to={'/collections/'+element.metaLink}>
                                        <div className="productPic"></div>
                                    </Link>
                                    <div className="productDetails flexy">
                                        <span>
                                            <h3>{element.name}</h3>
                                            <h4>Rs {element.price}</h4>
                                        </span>
                                        <svg onClick={() => handleCheckout(element)} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.4375 8.22584V14.0323H6.5625V8.22584H0.9375V6.29035H6.5625V0.967773H8.4375V6.29035H14.0625V8.22584H8.4375Z" fill="black"/>
                                            <ellipse cx="7.5" cy="0.967742" rx="0.9375" ry="0.967742" fill="black"/>
                                            <ellipse cx="7.5" cy="14.0323" rx="0.9375" ry="0.967742" fill="black"/>
                                            <ellipse cx="14.0625" cy="7.25803" rx="0.9375" ry="0.967742" fill="black"/>
                                            <ellipse cx="0.9375" cy="7.25803" rx="0.9375" ry="0.967742" fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollectionsGrid