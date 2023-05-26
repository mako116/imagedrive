import React, { useState } from 'react'
import DashboardButton, {
} from "../DashboardButton";
 
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
        <div className="w-[100%] h-[100%] bg-white shadow-md overflow-x-auto">
        <h4 className=" py-2 text-white text-xl text-center bg-[#87a5b9] rounded-t sm:w-full">
        DOCTORS REGISTER
        </h4>
        <div className="py-2 text-white text-justify rounded-t sm:w-full ">
          {DoctorsForum.map((data, index)=>(
            <div className="py-2 text-white   sm:w-full " key={index}>
                 <div className='w-[100%] flex justify-center'>
                 <img className=' px-3 w-[300px] mb-1 h-[300px] rounded-t' src={data.img} alt="" />
                 </div>
              <span className='h-[100%] p-6 text-center text-black pt-1'>
                 <h2 className='w-[100%] p-3 bg-[#d38e0d] text-white text-lg lg:text-xl'>Name: {data.Name}</h2>
                 <p className='font-meduim px-3'><span className='lg:text-xl'> About:</span> {data.highlight}</p>
                 <div className='px-3'> <span className='lg:text-xl'>Schedule:</span>{data.Time}</div>
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
