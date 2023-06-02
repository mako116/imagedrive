import React, { useState } from 'react'
import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from "../DashboardButton";
import ServiceData from '../../../ServiceData/ServiceData';
import DashboardOverlay from '../DashboardOverlay';
import Dashboardservices2 from './Dashboardservices2';
 
 const Dashboardservices = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };

  return (
    <>
    <section className="relative pt-7 px-3 sm:px-8">
      <div className="bg-white shadow-md overflow-x-auto">
        <h4 className="w-100  py-2 text-white text-xl text-center bg-[#5396c2] rounded-t sm:w-full">
          Services
        </h4>
        <div className=" w-90 p-5">
          {ServiceData.map((data, index)=>(
            <div className="ServiceShowRoom border-b-2 border-blue font-serif" key={index}>
              
              <h2>{data.Name}</h2>
              <p>{data.paragraph}</p>
              <div className='flex justify-start gap-3'>
               <DashboardUpdateButton/>
                 <DashboardDeleteButton/>
              </div>
               <DashboardButton
               text={data.button}
                showModalHandler={showModalHandler}
              />
            </div>
          ))}
        </div>
        
      </div>
      {showModal && (
        <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
          <Dashboardservices2 showModalHandler={showModalHandler} />
        </div>
      )}
    </section>

    {showModal && <DashboardOverlay />}
  </>
  )
}

export default Dashboardservices
