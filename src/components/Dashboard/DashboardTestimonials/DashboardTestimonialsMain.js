import React, { useState } from 'react'
 
import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from '../DashboardButton'
import axios from 'axios'
import DashboardOverlay from '../DashboardOverlay'
import DashboardTest2 from './DashboardTest2'

const DashboardTestimonial2 = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };
  const [data,empDataChange] =useState("")
  React.useEffect(()=>{
    const getRes = () => {
      fetch("https://backend.imagepluseyeclinic.com/api/testimonials")

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
 
  function deleteHand(){
    axios.delete("https://backend.imagepluseyeclinic.com/api/testimonials")
    .then(()=>{
      alert("data has deleted")
    })
  }
  return (
    <div>
      <section className="pt-7 px-3 sm:px-8">
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add Patients"
        />
        <div className="bg-white shadow-md  ">
          <h4 className="w-screen py-2 text-white text-xl text-center bg-[#f97729] rounded-t sm:w-screen">
          Testimonials
          </h4>
          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
              <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Title</th>
                 <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Star</th>
                <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">image </th>
                <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Action </th>
              </tr>
            </thead>
            <tbody>
            {
              data &&
              data.map((item)=>(
               <tr key={item.id}>
                <td className="py-5 px-5 space-x-2 border">{item.title}</td>
                <td className="space-x-2 py-5 px-5 border">{item.star}</td>
                <td className="space-x-2 py-5 px-5 border">{item.image}</td>
               <td>
               <span className='p-2'>
               <DashboardUpdateButton />
               </span>
                   
                    <span onClick={deleteHand}>
                    <DashboardDeleteButton/>
                    </span>
                </td>
                 </tr>
              
             ))
            }
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardTest2 showModalHandler={showModalHandler} />
          </div>
        )}
      </section>

      {showModal && <DashboardOverlay />}
    </div>
  )
}

export default DashboardTestimonial2
