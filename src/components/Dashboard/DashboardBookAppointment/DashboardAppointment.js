 import { Link } from 'react-router-dom';
 import DashboardButton, { DashboardDeleteButton, DashboardEditButton } from '../DashboardButton';
import { useState } from 'react';
 import DashboardOverlay from '../DashboardOverlay';
import DashboardAppointmentsModal from './DashboardAppointments2';
  
const DashboardBoardAppointments = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };
  return (
    <>
    <section className='relative pt-5 px-3 sm:px-4'>  
    <DashboardButton
          showModalHandler={showModalHandler}
          text="Add appointments"
        />
             <div className="w-full  pt-10 pb-10 text-gray rounded-none  md:pt-6 md:rounded"
               id="book-appointment">
                <div className="flex flex-col items-center mb-10">
                  <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
                     Book Appointment
                   </h2>
                       <div className="w-10 h-[3px] bg-[#f97729]" />
                      </div>
                    </div>
              <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">Name</th>
                <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">
                  Phone No.
                </th>
                <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">
                 Email
                </th>
                <th className="px-2 py-2 md:px-6 lg:px-4 xl:px-12">
                 Date & time
                </th>
                <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">
                 Branch
                </th>
                <th className="px-2 py-2 md:px-2 lg:px-2 xl:px-5">
                  Any further Enquires
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-2">
                <Link>Mfonobong Godwin Peter</Link>
                 </td>
                <td className="py-2 px-2">0812673811</td>
                <td className="space-x-2 py-2">
                 <Link>prosperjoy@gmail.com</Link>
                </td>
                <td className="py-4 px-4">
                   <span>20/03/2023</span>
                </td>
                <td className="py-2 px-2">
                  <Link>Port Harcourt</Link>
                </td>
                <td className="py-2 px-2 border">
                <Link> Text:shouldnt be enlarged </Link>
                </td>
                <td className="flex justify-center space-x-2 py-2">
                  <DashboardEditButton />
                  <DashboardDeleteButton />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2">
                <Link>Dr Ijeoma Nnabuife</Link>
                 </td>
                <td className="py-2 px-2">0812673811</td>
                <td className="flex justify-center space-x-2 py-2">
                <Link>prosperjoy@gmail.com</Link>
                </td>
                <td className="py-4 px-4">
                <span>20/03/2023</span>
                </td>
                <td className="py-2 px-2">
                  <Link>Uyo</Link>
                </td>
                <td className="py-3 px-3 border">
                  <Link> Text:shouldnt be enlarged </Link>
                </td>
                <td className="flex justify-center space-x-2 px-2 py-2">
                  <DashboardEditButton />
                  <DashboardDeleteButton />
                </td>
              </tr>
            </tbody>
          </table>  
          {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardAppointmentsModal showModalHandler={showModalHandler} />
          </div>
        )}         
    </section>
    {showModal && <DashboardOverlay />}

    </>
  )
}

export default DashboardBoardAppointments
