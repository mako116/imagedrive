import React from 'react'

 const ProductList = ({data}) => {
  return (
    <>
      { data?.map((item ,index) =>(
            <ProductCard item={item} key={index}/>
        )
      )}
    </>
   )
}

export default ProductList
