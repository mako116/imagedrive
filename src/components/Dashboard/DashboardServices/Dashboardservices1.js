import React, { useState } from 'react'
import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from "../DashboardButton";
import ServiceData from '../../../ServiceData/ServiceData';
import DashboardOverlay from '../DashboardOverlay';
import Dashboardservices2 from './Dashboardservices2';
import { Link } from 'react-router-dom';
 
 const Dashboardservices = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };
  const [updateModal, setUpatemodal] =useState(false)
   
  const showUpdatelHandler = () => {
    setUpatemodal((prevVal) => !prevVal);
  };

  const [data,empDataChange] =useState([])
  React.useEffect(()=>{

 
         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/services")

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
 
  return (
    <>
    <section className="relative pt-7 px-3 sm:px-8">
    <DashboardButton
       showModalHandler={showModalHandler}
        />
      <div className="bg-white shadow-md overflow-x-auto">
        <h4 className="w-100  py-2 text-white text-xl text-center bg-[#5396c2] rounded-t sm:w-full">
          Services
        </h4>
        <div className=" w-90 p-5">
        {
          data &&
              data.map(item=>(
                
                <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.short_desc}</td>
                 <td>
                    <DashboardUpdateButton showUpdatelHandler={showUpdatelHandler} />
                         <DashboardDeleteButton/>
                </td>
                </tr>
               
              ))
             }
          {/* {ServiceData.map((data, index)=>(
            <div className="ServiceShowRoom border-b-2 border-blue font-serif" key={index}>
              
              <h2>{data.Name}</h2>
              <p>{data.paragraph}</p>
              <div className='flex justify-start gap-3'>
               <DashboardUpdateButton/>
                 <DashboardDeleteButton/>
              </div>
             
            </div>
          ))} */}
        </div>
        
      </div>  
      {
                  updateModal && (
                    <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
                    <DashboardUpdateButton showUpdatelHandler={showUpdatelHandler} />
                    </div>
                    )
                }         
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
