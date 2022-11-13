import { collection, getDocs, limit, query } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { db } from '../firebaseInit';
import { productReducer } from './Reducers';

const Product = createContext()

export function useProduct() {
    return useContext(Product);
}

function ProductContext({ children }) {

    const prodRef = collection(db, "products");

    const [state, dispatch] = useReducer(productReducer, {
        product : [],
        cart : []
    })

    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProd() {
            const q = query(prodRef, limit(3));
            const qSnap = await getDocs(q);
            setLoading(false);
            qSnap.forEach((prod) => {
                dispatch({
                    type : "ADD_LIST",
                    payload : {...prod.data()}
                })
            })
        }

        fetchProd();
    }, [])
    
  return (
    <Product.Provider value={{state, dispatch}}>{!Loading && children}</Product.Provider>
  )
}

export default ProductContext