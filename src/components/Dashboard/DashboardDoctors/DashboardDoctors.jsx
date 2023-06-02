import React, { useState } from 'react'
import DashboardButton, { DashboardDeleteButton, DashboardEditButton, DashboardViewButton } from "../DashboardButton";
 
 import DashboardOverlay from '../DashboardOverlay';
import DashboardDoctorssModal from './DashboardDoctorsModal';
import { DoctorsForum } from '../../../DoctorsLOcals/DoctorsProfile';
  const DashboardDoctors = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };


  return (
    <div>
    <section className="relative pt-7 px-3 sm:px-8">
    <DashboardButton
       text="Assign Doctors"
       showModalHandler={showModalHandler}
       />
        <div className="bg-white shadow-md overflow-x-auto">
        <h4 className=" py-2 text-white text-xl text-center bg-[#87a5b9] rounded-t sm:w-full">
        DOCTORS REGISTER
        </h4>
        <div className="py-2 text-white rounded-t  sm:w-full ">
          {DoctorsForum.map((data, index)=>(
            <div className="py-2 text-white p-2 flex justify-between sm:w-full " key={index}>
                 <div className='flex justify-center'>
                 <img className='w-screen' id='responsive' src={data.img} alt="" />
                 </div>
              <span className='w-screen h-[100%] border p-2 text-left leading-7 text-black'>
                 <h2 className='p-3 bg-[#d38e0d] text-white '>Name: {data.Name}</h2>
                 <p className=''><span className=''> About:</span> {data.highlight}</p>
                  <span className=''>Schedule: {data.Time}</span>
                <div className='flex justify-center gap-4 p-5'>
                <DashboardEditButton/>
                <DashboardViewButton 
                  text="View more"
                />
                <DashboardDeleteButton/> 
               </div>
               </span>
              </div>
          ))}
        </div>
        
      </div>
      {showModal && (
        <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
          <DashboardDoctorssModal showModalHandler={showModalHandler} />
        </div>
      )}
    </section>

    {showModal && <DashboardOverlay />}
  </div>
  )
}

export default DashboardDoctors
