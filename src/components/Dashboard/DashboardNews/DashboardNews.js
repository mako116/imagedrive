import React, { useState } from 'react'
 import DashboardButton, { DashboardDeleteButton, DashboardEditButton, DashboardUpdateButton } from '../DashboardButton'
import DashboardOverlay from '../DashboardOverlay';
import DashboardNewss from './DashboardNewss';

const DashboardNewss2 = () => {
    const NewsUpdates =[
        {
        topic: "War in brazil erupts football",
        paragraph: "the war between gangs and police is causing a problem in the community , The leader of the jabari tribe have decided to make amends and bow down"
       },
]
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
                {NewsUpdates.map((topics,index)=>(
                    <div className="p-4 bg-white mt-5 mx-2" key={index}>
                    <div className=''>
                        <h6 className='text-lg p-5 lg:text-xl font-bold'>{topics.topic}</h6>
                        <hr className='w[100%]'/>
                        <p className='text-start p-2'>{topics.paragraph}</p>
                    </div>
                    </div>
                ))}
                 <div className="flex justify-start gap-4 p-3 bg-[#e7e3db]">
                <DashboardDeleteButton/>
                    <DashboardEditButton/>
                    <DashboardUpdateButton/>
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

