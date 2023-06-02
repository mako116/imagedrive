import React from 'react'
import { Form, FormGroup } from 'reactstrap'
import { TestimoniaData } from '../../../TestimoniaData/TestimoniaData'
import { DashboardDeleteButton, DashboardEditButton, DashboardViewButton } from '../DashboardButton'

const DashboardTestimonial2 = () => {
  return (
    <section>
    
           <div className="w-[100%] pt-10 pb-5 px-3 text-white bg-[#2f2f2f] rounded-none  md:pt-6 md:rounded"
               id="News & updates">
                <div className="flex flex-col items-center mb-10"> 
                <h6 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>Testimonials</h6>
                 <div className="w-10 h-[3px] bg-[#f97729]" />
               </div>
             </div>  
              <Form> 
              <FormGroup className='w-[100%] flex justify-center py-10 '>
                <input type="text" className='w-[80%] h-[50px]'/>
               <button className='bg-black p-3 text-blue-100 ml-3' type="submit">submit</button>
              </FormGroup>
              </Form>
             <div className="flex flex-col justify-center ">
             {
                TestimoniaData.map((items,index)=>(
                    <div className="todolist" key={index}>
                       <div className="bg-white text-black p-5 border-4  leading-10 border-b-gray-600">
                       <h2>{items.heading}</h2>
                        <p>{items.Name}</p>
                        <div className=" flex justify-end gap-3">
                       <DashboardEditButton/>
                       <DashboardViewButton
                        text="view more"
                       />
                        <DashboardDeleteButton/>
                         
                       </div>
                       </div>
                      
                    </div>
                ))
              }
             </div>
            
  </section>
  )
}

export default DashboardTestimonial2
