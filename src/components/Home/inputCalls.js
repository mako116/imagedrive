import {useForm} from 'react-hook-form'

 const InputCalls = () => {
    const {register, formState:{errors},handleSubmit}=useForm()
    const onSubmit=(data)=>console.log(data);

  return (
    <section className="py-10 text-black  bg-center">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-5 mb-5 md:mb-4">
          <div className="flex text-black flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full shadow bg-white border outline-none text-sm rounded placeholder-gray"
              type="text"
              placeholder="Your Name *"            
                {...register("name",{required:true,
                minLength:6,
                maxLength:12,
                
                })}
                />
                 {errors.name?.type === "minLength" && "name is less"}
                {errors.name?.type === "maxLength" && "name is too long"}
             <input
              className="p-2 shadow w-full text-black bg-transparent border outline-none text-sm rounded placeholder-gray"
              type="email"
              placeholder="Your Email *"
              {...register("email",{required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })}
            />
            {errors.email?.type === "required" && "Email REquired"}
              {errors.email?.type === "pattern" && "Email on wrong format"}
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
          <textarea name="" id=""  placeholder="comment *" cols="45" rows="8" maxlength="65525"  className="w-full shadow border resize-none h-[175px] p-2 mb-1 outline-none"
           {...register("name",{required:true,
                minLength:6,
                maxLength:12,
                })}>
          </textarea>
          {errors.name?.type === "minLength" && "is less"}
          {errors.name?.type === "maxLength" && "too long"}
            </div>
             
        </div>
    </form>
            <div className=" m-2 gap-2 flex flex-row">
                <input type="radio" />
                <span>Save my name, email, and website in this browser for the next time I comment.</span>
            </div>
            <div className="flex justify-center p-3">
            <button className=" bg-gray-800 text-1xl text-white rounded-full p-4">Send comment</button>

            </div>
    </section>
  );
};

export default InputCalls;
