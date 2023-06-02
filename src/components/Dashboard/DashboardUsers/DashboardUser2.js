import {
    DashboardRegisterButton,
    DashboardCloseButton,
  } from "../DashboardButton";
  import {useForm} from 'react-hook-form'

import {Form, FormGroup} from "reactstrap"
  const DashboardUser2 = ({ showModalHandler }) => {
    const {register, formState:{errors},handleSubmit}=useForm()
    const onSubmit=(data)=>console.log(data);
    return (
      <>
        <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]" id="responsiveModal">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl">Users Registration</h4>
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
            <div className="flex flex-col p-7 space-y-4 mb-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="Image">Image</label>
               <FormGroup>
                <input
                  id="Image"
                  type="file"
                  className="py-1 w-[100%] px-2 border border-gray-400 outline-[#f97729] rounded"
                  {...register("Image",{required:true })}
                />
                </FormGroup>
                {errors.name?.type === "minLength" && "name is less"}
                {errors.name?.type === "maxLength" && "name is too long"}
              </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="Username">Username</label>
                <input
                  id="Username"
                  type="text"
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  {...register("text",{
                minLength:6,
                maxLength:12,
              })}
                />
                {errors.text?.type === "minLength" && "Entered text is less"}
               {errors.text?.type === "maxLength" && "Entered text is too long"}
               </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="email">email</label>
                <input 
            placeholder='Email'
            {...register("email",{required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })}
             
             />
             
              {errors.email?.type === "required" && "your Email Needed biko"}
              {errors.email?.type === "pattern" && "Entered email is on wrong format"}
           
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
  
  export default DashboardUser2;
  