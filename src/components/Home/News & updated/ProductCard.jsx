 import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
  
 const ProductCard = ({item}) => {
  function ScrollToTopMount(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null
}
   return (
     <>
      <div className="w-full">
      <ScrollToTopMount/>
      <div className="flex my-10 justify-between gap-10">
      <Link to={`/shop/${item.id}`}>
     <img src={item.img} alt="" className="w-screen" />
     </Link>
      <span className='w-50'>
          <Link to={`/shop/${item.id}`}>
        <h2 className="underline text-2xl">{item.title}</h2>
        </Link>
        <p className="text-red-600 text-xs">{item.minidate}</p>
        <p className="font-sans  text-sm leading-6">{item.paragraph1}</p>
      </span>
      </div>
      
      </div> 
      
     </>
   )
 }
 
 export default ProductCard
 