import { useState } from "react";
import {
  DashboardCloseButton,
  DashboardAddButton,
} from "../DashboardButton";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardserviceUpdate = ({showUpdatelHandler}) => {
    const [title, setTitle] =useState("")
    const [description, setDescription] =useState("")
    const [short_desc, setShort_desc] =useState("")
    const[image, setImage] = useState('')
   
    const navigate = useNavigate();

    const handleUpdate = (e, id)=>{
        e.preventDefault();
        axios.patch(`http://backend.imagepluseyeclinic.com/api/services/1`, {
            title,
            description,
            short_desc,
            image,
        }).then((res)=>{
          navigate("/Services")
            console.log(res);
        }).catch(err =>console.log(err));
            
        
        
    }
  return (
    <>
      <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-x2 rounded md:w-[550px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl">Our Services</h4>
          <button className="outline-[#f97729]" onClick={showUpdatelHandler}>
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

        <form onSubmit={handleUpdate}>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label htmlFor="title">title</label>
              <input
                id="title"
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                className="py-1 px-1 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1 pb-2">
              <label htmlFor="description">description.</label>
              <input
                id="description"
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                type="text"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="prescription">short_desc</label>
              <textarea
                id="short_desc"
                type="text"
                onChange={(e)=>setShort_desc(e.target.value)}
                value={short_desc}
                className="py-1 px-2 h-24 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            
            <div className="flex flex-col space-y-1">
              <label htmlFor="image">image</label>
              <input
                id="image"
                type="text"
                onChange={(e)=>setImage(e.target.value)}
                value={image}
                 
              />
            </div>
           
            
          </div>

          <div className="flex items-center justify-end space-x-2">
          <DashboardAddButton 
            text="Add"
          />             
              <DashboardCloseButton
              text="Close"
              showModalHandler={showUpdatelHandler}
            />
          </div>
        </form>
      </div>
  </>
  )
}

export default DashboardserviceUpdate
