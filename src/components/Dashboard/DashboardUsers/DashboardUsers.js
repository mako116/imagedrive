import React, { useState } from 'react'
import {Col} from 'reactstrap'
 import UserData from '../../../UserData/UserData'
import DashboardButton, { DashboardAddButton } from '../DashboardButton'
 import DashboardUser2 from './DashboardUser2'
import DashboardOverlay from '../DashboardOverlay'
 
const DashboardUsersOption = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };
 
  return (
    <>
     <section className="relative pt-7 px-3 sm:px-8">
     <DashboardButton
       text="Assign Users"
       showModalHandler={showModalHandler}
       />
        <div className='p-4 w-[100%]'>
            <div className='flex flex-col items-center mb-10'>
                <h2 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>Update users</h2>
                <div className="w-10 h-[3px] bg-[#f97729]" />
            </div>
             
            <Col lg='12' className='pt-5'>
                <table className="  bg-white rounded">
                <thead>
                   <tr className="text-lg border-b-2">
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Image</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Username</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">email</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">action </th>
                    </tr>
                 </thead>
                <tbody>
                {UserData.map((user, index) =>(
                        <tr className="border-b" key={index}>
                            <td className="py-2 px-2"><img src={user.img} alt="" /></td>
                            <td className="py-2 px-2">{user.img}</td>
                            <td className="py-2 px-2">{user.email}</td>
                            <td className="py-2 px-2"><DashboardAddButton
                              text="add user"
                            /> </td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
            </Col>
     
        </div>
        {showModal && (
        <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
          <DashboardUser2 showModalHandler={showModalHandler} />
        </div>
      )}
     </section> 
     {showModal && <DashboardOverlay />}

    </>
  )
}

export default DashboardUsersOption
