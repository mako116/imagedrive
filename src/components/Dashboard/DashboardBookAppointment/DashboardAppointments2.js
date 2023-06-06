import {
    DashboardCloseButton,
  } from "../DashboardButton";
 
 const DashboardAppointmentsModal = ({ showModalHandler }) => {
   return (
     <>
       <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]" id="responsiveModal">
         <div className="flex items-center justify-between mb-4">
           <h4 className="text-xl">Patients Registration</h4>
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
               <label htmlFor="name">Name</label>
               <input
                 id="name"
                 type="text"
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="phoneNo">Phone No.</label>
               <input
                 id="phoneNo"
                 type="text"
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
 
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="Email">Email.</label>
               <input
                 id="Email"
                 type="email"
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
  
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor=" Date & time"> Date & time.</label>
               <input
                 id=" Date & time"
                 type="date"
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
               <label htmlFor="Branch"> Branch.</label>
                 <div className="text-[#333]  mb-5 md:mb-4">
                  <select className="p-1 rounded outline-none" name="branch">
                <option value="select branch">Select Branch</option>
              <option value="uyo">Uyo</option>
            <option value="port harcourt">Port Harcourt</option>
          </select>
          <div className="flex flex-col space-y-1 py-3 px-2 pb-2">
               <label htmlFor="Enquires">Any further Enquires.</label>
             <textarea name="Enquires" id="" cols="30" rows="10" className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"></textarea>
               
             </div>
        </div>  
            <div className="flex items-center justify-end space-x-2">
               
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
 
 export default DashboardAppointmentsModal;
 