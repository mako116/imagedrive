 import React from 'react'
import ProductCard from './ProductCard'
 
 const ProductList = ({NewsData}) => {
   return (
     <>
      { NewsData?.map((item)=>(
          <ProductCard item={item}/>
        ))
      } 
     </>
   )
 }
 
 export default ProductList
 