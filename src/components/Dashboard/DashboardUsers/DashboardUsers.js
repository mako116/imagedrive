import React, { useState } from 'react'
import { Form, FormGroup ,Container,Row ,Col} from 'reactstrap'
import ServiceData from '../../../ServiceData/ServiceData'
import UserData from '../../../UserData/UserData'
import { DashboardAddButton } from '../DashboardButton'
 
const DashboardUsersOption = () => {
  const [enterProductImg, setEnterProductImg] =useState(null)
  const [loading, setLoading] = useState(false)

  const addProduct = async(e)=>{
    e.preventDefault()
    setLoading(true)
  }

 
  return (
    <>
     <section className="relative pt-7 px-3 sm:px-8">
        <div className='p-4 w-[100%]'>
            <div className='flex flex-col items-center mb-10'>
                <h2 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>Update users</h2>
                <div className="w-10 h-[3px] bg-[#f97729]" />
            </div>
            <div>
            {loading ?(
           <h4 className='py-5'> Loading.....</h4>
          ) :(
            <>
            <h4 className='mb-5'> </h4>
            <Form onSubmit={addProduct}>
              <FormGroup className='form__group flex justify-center gap-3'>
                <span>Product Image : </span>
                <input type="file" 
                onChange={e=> setEnterProductImg(e.target.files[0])}
                  required
                />
                <span>Name: Dr joseph</span>
              </FormGroup>
              </Form>
             
              </>
          )
         }
            </div>
        
            <Col lg='12'><h4 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>users</h4></Col>
            <div className="w-[100%]  h-[3px] bg-[#f97729]" />
            <Col lg='12' className='pt-5'>
                <table className="  bg-white rounded">
                <thead>
                   {
                    loading ?( <h5>oading</h5>
                    ):(  <tr className="text-lg border-b-2">
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Image</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Username</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">email</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">action </th>
                    </tr>
                   )}
                </thead>
                <tbody>
                {UserData.map((user) =>(
                        <tr className="border-b">
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
     </section> 
    </>
  )
}

export default DashboardUsersOption
