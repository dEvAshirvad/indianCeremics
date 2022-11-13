import React from 'react'
import { useProduct } from '../contexts/ProductContext';


function CheckoutPage() {
  const { state : { cart } } = useProduct();

  return (
    <section className="CheckoutPage">
        <div className="container">
          <nav className='flexy'>
            <span className='flexy'>
              <h2>Your Cart</h2>
              <h3>{cart.length} item</h3>
            </span>
            <span className='flexy'>
              <h3>Totall</h3>
              <h2>Rs 2200</h2>
            </span>
          </nav>


          <div className="checkoutContainer flexy">
            {cart.map((element) => {
              return(<div className="checoutblock flexy">
              <div className="pPic"></div>
              <div className="checkDetails flexy">
                <div className="checkFlex1 flexy">
                  <span className='flexCol'>
                    <h2>{element.name}</h2>
                    <h4>{element.name}</h4>
                  </span>
                  <h2>Rs {element.price}</h2>
                </div>
                <div className="checkFlex2 flexCol">
                  <svg className='cross' width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01526 6.5L12.5609 11.0457L11.0457 12.5609L6.50003 8.01523L1.95435 12.5609L0.439119 11.0457L4.98481 6.5L0.439119 1.95431L1.95435 0.439085L6.50003 4.98477L11.0457 0.439085L12.5609 1.95431L8.01526 6.5Z" fill="black"/>
                  </svg>
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
                </div>
              </div>
            </div>)
            })}
            
          </div>
        </div>
    </section>
  )
}

export default CheckoutPage