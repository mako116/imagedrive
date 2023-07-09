import React, { useState } from 'react'
 import DashboardButton, { DashboardDeleteButton, DashboardEditButton, DashboardUpdateButton } from '../DashboardButton'
import DashboardOverlay from '../DashboardOverlay';
import DashboardNewss from './DashboardNewss';

const DashboardNewss2 = () => {
  const [data,empDataChange] =useState([])
  React.useEffect(()=>{

 
         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/posts")

          .then((res)=>{
              return res.json()
          }).then((resp)=>{
            console.log(resp.data);
              empDataChange(resp.data);
          }).catch((err)=>{
              console.log(err.message);
          }) 
         }
         getRes();
      
  },[])
const [showModal, setShowModal] = useState(false);

const showModalHandler = () => {
  setShowModal((prevVal) => !prevVal);
};
  return (
    <>
        <section className="relative pt-7 sm:px-8 "> 
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add News"
        />
            <div className="w-[100%] pt-10 pb-5 px-3 text-white bg-[#2f2f2f] rounded-none  md:pt-6 md:rounded"
               id="News & updates">
                <div className="flex flex-col items-center mb-10"> 
                <h6 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>News & updates</h6>
                 <div className="w-10 h-[3px] bg-[#f97729]" />
               </div>
             </div>  
             {
              data &&
              data.map((item)=>(
               <tr key={item.id}>
                <td className="py-5 px-5 space-x-2 border">{item.title}</td>
                <td className="py-2 px-2">{item.name}</td>
                <td className="py-5 px-4 border">{item.body}</td>
                <td className="space-x-2 py-5 px-5 border">{item.star}</td>
                <td className="space-x-2 py-5 px-5 border">{item.image}</td>
               <td className='flex justify-start gap-4 p-3 bg-[#e7e3db'>
               <DashboardDeleteButton/>
                    <DashboardEditButton/>
                    <DashboardUpdateButton/>
                </td>
                 </tr>
              
             ))
            }
                 <div className="flex justify-start gap-4 p-3 bg-[#e7e3db]">
                
                 </div>
                 {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardNewss showModalHandler={showModalHandler} />
          </div>
        )}         
        </section>
        {showModal && <DashboardOverlay />}

     </>
  )
}

export default DashboardNewss2

