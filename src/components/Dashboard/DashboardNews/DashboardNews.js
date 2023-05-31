import React from 'react'
import { Col, Container, Form, FormGroup,  Row } from 'reactstrap'
import { DashboardAddButton, DashboardDeleteButton, DashboardEditButton } from '../DashboardButton'

const DashboardNewss2 = () => {
    const NewsUpdates =[
        {
        topic: "War in brazil erupts football",
        paragraph: "the war between gangs and police is causing a problem in the community"
       },
]
  return (
    <>
        <section className="w-[1 00%]  p-10 ">
        <Container>
          <Row>
            <Col lg="6">
            <div className="flex flex-col items-center mb-10">
              <h6 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>News & updates</h6>
            <div className="w-10 h-[3px] bg-[#f97729]" />
            </div>
            <Form>
                <FormGroup className='formgroup'>
                <input type="text" placeholder='Enter topic'/>
                </FormGroup>
                <FormGroup className='form__group'>
                <textarea name="" id="" cols="30" rows="10">
                </textarea>
                </FormGroup>
                <button className='w-[100%] p-3 text-white bg-[#cf9c3d]'>submit</button>
                <Col lg="3">
                {NewsUpdates.map((topics,index)=>(
                    <div className="p-4 bg-white w-[100%] mt-5" key={index}>
                    <div className='p-5'>
                        <h6 className='text-lg lg:text-xl font-bold'>{topics.topic}</h6>
                        <p className='text-start'>{topics.paragraph}</p>
                    </div>
                    </div>
                ))}
                </Col>
                <div className="flex justify-start gap-4 p-3 bg-[#e7e3db]">
                <DashboardDeleteButton/>
                    <DashboardEditButton/>
                    <DashboardAddButton text="add"/>
                </div>
                </Form>
            </Col>
          </Row>
        </Container> 
        </section>
     </>
  )
}

export default DashboardNewss2

