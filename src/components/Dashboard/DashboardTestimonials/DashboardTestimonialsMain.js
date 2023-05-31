import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { TestimoniaData } from '../../../TestimoniaData/TestimoniaData'
import { DashboardDeleteButton, DashboardEditButton, DashboardViewButton } from '../DashboardButton'

const DashboardTestimonial2 = () => {
  return (
    <section>
    <Container>
      <Row>
         
        <Col lg='6'>
          <div className="product__details">
            <h2>Testimonials</h2>
            <div className="product__rating d-flex align-items-center
            gap-5 mb-3 ">
              <Form>

              <FormGroup>
                <input type="text" className='w-[350px] h-[50px]'/>
               <button className='bg-black p-3 text-blue-100' type="submit">submit</button>
              </FormGroup>
              </Form>
             <div className="flex flex-col justify-center">
             {
                TestimoniaData.map((items,index)=>(
                    <div className="todolist" key={index}>
                       <div className="bg-white text-black p-5 border-4  border-b-gray-600">
                       <h2>{items.heading}</h2>
                        <p>{items.Name}</p>
                       </div>
                       <div className="p-4 flex justify-center gap-3">
                       <DashboardEditButton/>
                       <DashboardViewButton
                        text="view more"
                       />
                        <DashboardDeleteButton/>
                         
                       </div>
                    </div>
                ))
              }
             </div>
              {/* <p>(<span>{avgRating}</span>rating)</p> */}
            </div>
          
           <button></button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default DashboardTestimonial2
