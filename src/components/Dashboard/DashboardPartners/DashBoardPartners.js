import React from 'react'
import { DashboardDeleteButton, DashboardEditButton } from '../DashboardButton'
import { ImagePartners } from '../../../DoctorsLOcals/DoctorsProfile'
  const DashBoardPart = () => {
  return (
    <>
      <div className="flex justify-center space-x-1 sm:space-x-16 md:space-x-24">
       {
        ImagePartners.map((item, index)=>(
          <div className="Dashboardpartners p-4 " key={index}>
          <h2 className='flex justify-center'>{item.title}</h2>
          <div className="img_padding  w-[100%] h-[100px]">
          <img src={item.img} alt="" />
          </div>
            <div className="flex justify-center gap-3">
            <DashboardEditButton/>
             <DashboardDeleteButton/>
            </div>
          </div>
        ))
       }
      </div>
      <div className="flex mt-6 justify-center">
      <input type="file" />
      </div>
    </>
  )
}

export default DashBoardPart
