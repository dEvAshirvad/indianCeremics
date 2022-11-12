import React, { createContext, useContext, useState, useEffect } from 'react'

export const Product = createContext();

export function useProduct() {
    return useContext(Product);
}

function ProductContext({children}) {
    const [ProductList, setProductList] = useState([]);
    const [Checkout, setCheckout] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const list = db.products
        setProductList(list)
        setLoading(false)
    }, []);

    function AddCheckout(product) {
        if (Checkout.includes(element => {
            element.id === product.id
        })) {
            setCheckout([...Checkout, {...product, qty : 1}]);
        }

    }

    const value = {
        ProductList,
        AddCheckout,
        Checkout
    };

  return (
    <Product.Provider value={value}>
        {!Loading && children}
    </Product.Provider>
  )
}

export default ProductContext