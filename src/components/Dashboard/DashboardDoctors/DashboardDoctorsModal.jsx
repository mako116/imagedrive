import {
    DashboardGenerateButton,
    DashboardRegisterButton,
    DashboardCloseButton,
  } from "../DashboardButton";
  import {useForm} from 'react-hook-form'

import {Form, FormGroup} from "reactstrap"
  const DashboardDoctorssModal = ({ showModalHandler }) => {
    const {register, formState:{errors},handleSubmit}=useForm()
    const onSubmit=(data)=>console.log(data);
    return (
      <>
        <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl">Doctors Registration</h4>
            <button className="outline-[#f97729]" onClick={showModalHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 transition-colors hover:stroke-[#f97729]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
  
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name">Name</label>
               <FormGroup>
                <input
                  id="name"
                  type="text"
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  {...register("name",{required:true,
                minLength:6,
                maxLength:12,
                
                })}
                />
                </FormGroup>
                {errors.name?.type === "minLength" && "name is less"}
                {errors.name?.type === "maxLength" && "name is too long"}
              </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="phoneNo">Phone No.</label>
                <input
                  id="phoneNo"
                  type="text"
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  {...register("text",{
                minLength:6,
                maxLength:12,
              })}
                />
               <error>
               {errors.text?.type === "minLength" && "Entered text is less"}
               {errors.text?.type === "maxLength" && "Entered text is too long"}
               </error>
              </div>

              <div className="flex flex-col space-y-4 py-4 border-y-2">
                <h4 className="text-lg">Address</h4>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    {...register('text', { required: true })}

                  />
                   {errors.text?.type === "required" && "state Needed"}

                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="City">City</label>
                  <input
                    id="City"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    {...register('text', { required: true })}
                  />
                  {errors.text?.type === "required" && "City Needed"}
                </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="residentialAddress">Residential Address</label>
                  <input
                    id="residentialAddress"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    {...register('text', { required: true })}
                  />
                    {errors.text?.type === "required" && "residentialAddress Needed"}
                </div>
              </div>
  
              
              <div className="flex flex-col space-y-1">
                <label htmlFor="profile">profile</label>
                <input
                  id="profile"
                  type="file"
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  {...register('file', { required: true })}

                />
                   <error>
              {errors.file?.type === "required" && "file Needed"}
              </error>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-2">
               <DashboardRegisterButton onClick={()=> handleSubmit()} type='submit' text="Register" />
              <DashboardCloseButton
              
                text="Close"
                showModalHandler={showModalHandler}
              />
            </div>
          </Form>
        </div>
      </>
    );
  };
  
  export default DashboardDoctorssModal;
  