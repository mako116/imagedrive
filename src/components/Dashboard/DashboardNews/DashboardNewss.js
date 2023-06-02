import {
    DashboardCloseButton,
   DashboardAddButton,
 } from "../DashboardButton";
 
 const DashboardNewss = ({ showModalHandler }) => {
   return (
     <>
       <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]">
         <div className="flex items-center justify-between mb-4">
           <h4 className="text-xl">News</h4>
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
 
         <form>
           <div className="flex flex-col space-y-4 mb-6">
             <div className="flex flex-col space-y-1">
               <label htmlFor="title">Title</label>
               <input
                 id="title"
                 type="text"
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="phoneNo">Info</label>
               <textarea name="" id="" cols="30" rows="10"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               ></textarea>
               <input
                 id="phoneNo"
                 type="text"
               />
             </div> 
             <div className="flex items-center justify-end space-x-2">
            <DashboardAddButton  text="add"/>
              
              <DashboardCloseButton
               text="Close"
               showModalHandler={showModalHandler}
             />
           </div>
           </div>
         </form>
         </div>
     </>
   );
 };
 
 export default DashboardNewss;
 