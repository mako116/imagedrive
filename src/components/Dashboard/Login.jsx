import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] =useState("")
  const [password,setPassword] =useState("")
  const [validationErrors,setValidationErrors] =useState({})
  const [isSubmitting,setSubmitting] = useState(false)
  const [isPending,setisPending]= useState(true) 

  useEffect(()=>{
    setTimeout(() => {
      if(localStorage.getItem('token') !==  "" && localStorage.getItem('token') != null){
        navigate("/admin")
      } 
      console.log(localStorage.getItem('token'));
    }, 1000);
  },[])
  const loginAction = (e)=>{
    setValidationErrors({})
    e.preventDefault();
    let payload = {
      email:email,
      password:password,
    }
    axios.post("http://backend.imagepluseyeclinic.com/api/login", payload)
    .then((r)=>{
      setSubmitting(false)
      setisPending(false)
      localStorage.setItem('token',r.data.token)
      navigate("/admin")
    })
    .catch((e)=>{
      setisPending(false)
      setSubmitting(false)
      if(e.response.data.errors !== undefined){
        setValidationErrors(e.response.data.errors)
      }
      if(e.response.data.error !== undefined){
        setValidationErrors(e.response.data.error)
      }
    })
  }
  return (
    <div className="h-screen bg-[#efefef]">
      <div className="flex justify-center px-3 sm:px-0">
       {isPending && <div>.Loading...</div> }
       <div className="w-full mt-10 pb-8 bg-white rounded-md shadow-md sm:w-9/12 md:w-8/12 xl:w-1/2">
          <h3 className="w-full py-2 mb-8 text-center text-2xl rounded-t-md text-white font-bold bg-[#f97729]">
            Login
          </h3>
          <form
  
          method="post"
           className="flex flex-col space-y-4 px-6 text-lg sm:px-10"
            onSubmit={(e)=>{loginAction(e)}}>
           @csrf
          {Object.keys(validationErrors).length !== 0 && <p className="text-center">
            <small className="text-red-600">Incorrect Email or Password</small>
          </p> }
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
              <label htmlFor="email">E-Mail Address</label>
              <input
                className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                id="email"
                name="email"
                value={email}
                onChange={(e)=> {setEmail(e.target.value)}}
                type="email"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
              <label htmlFor="password">Password</label>
              <input
                className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                id="password"
                name="pasword"
                value={password}
                onChange={(e)=> {setPassword(e.target.value)}}
                type="password"
              />
            </div>
            <div className="flex justify-center space-x-2">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className="flex justify-center">
              <button disabled={isSubmitting}
              type="submit"
               className="px-4 py-2 w-full text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-md transition-colors duration-200 hover:text-white hover:bg-[#f97729] sm:w-96">
                Login
              </button>
            </div>
            <p className="text-center">Don't have account? <Link
              className="inline-block text-base underline text-blue-500 text-center transition-colors hover:text-blue-700"
              to="/register"
            >
            Register here
            </Link></p>
            <Link
              className="inline-block text-base underline text-blue-500 text-center transition-colors hover:text-blue-700"
              to="/"
            >
            Forgot password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
