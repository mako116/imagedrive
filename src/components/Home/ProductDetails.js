import React,{useEffect} from 'react'
import { useParams } from "react-router-dom";
 import Productz from '../../NewsData/NewsData';
import InputCalls from './inputCalls';
 
const ProductDetails = () => {
  function ScrollToTopMount(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null
}
    const {id} = useParams()
    const product = Productz.find(item => item.id === id)
    const { img,title,date,paragraph,minidate,ts,tsco1,tsco2,tsco3,tsco4,haven, tsco5,offer,tele,tele2,VENUEpara } = product
 
  return (
       <section> 
       <div className="flex justify-center">
       <ScrollToTopMount/>

            <div className="pb-24 px-4 mt-5 sm:px-24 md:px-24 lg:px-52 xl:px-18">
                   <img src={img} className="w-full h-[330px]" alt="" />
              <div className="flex flex-col text-left">
                  <h2 className="text-4xl  mt-10">{title}</h2>
                <div className="text-base">
                  <p className="text-xs my-2 text-red-600">{minidate}</p>
                </div>
                <div className='leading-15 text-sm font-sans'>
                    <h2 className='mb-5 leading-7'>{paragraph}</h2>
                    <p>{offer}</p>
                    <span className="text-sm font-bold pt-24">{date}</span>
                </div>
                <div className='mt-5 text-sm'>
                    <span className="font-bold mb-2">{ts}</span>
                    <p className="w-[220px] fw-bold text-sm leading-5 mt-2">
                    {tsco1}
                  </p>
                    <p className="w-[220px] text-sm leading-5 mt-2">
                    {tsco2}
                  </p>
                    <p className="w-[220px] text-sm leading-5 mt-2">
                    {tsco3}
                  </p>
                    <p className="w-[220px] text-sm leading-5 mt-2">
                    {tsco4}
                  </p>
                    <p className="w-[220px] text-sm leading-5 mt-2">
                    {tsco5}
                  </p>
                    </div>
                    <div className="text-sm mb-5 mt-3">
                        <h4 className="font-bold">{haven}</h4>
                        <p>{VENUEpara}</p>
                    </div>
                    <div className="flex text-sm mb-5 flex-row gap-2">
                      <span className='font-bold'>{tele}</span>
                      <span>{tele2}</span>
                    </div>
                  <div>
                    <span className='text-sm'></span>
                  </div>
                  <div className="text-sm">
                  <InputCalls/>                
                   </div>
                </div>  
                </div>
               </div>
         </section>
  );
};

export default ProductDetails;
