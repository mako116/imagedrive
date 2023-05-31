 import DashboardUpdate from "../../../pages/Dashboard/DashboardUpdate";
import {
  DashboardGenerateButton,
  DashboardRegisterButton,
  DashboardCloseButton,
  DashboardAddButton,
  DashboardUpdateButton,
  DashboardDeleteButton,
} from "../DashboardButton";

const Dashboardservices2 = ({showModalHandler}) => {
 
  return (
    <>
      <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-x2 rounded md:w-[550px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl">Our Services</h4>
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
              <label htmlFor="number">Price</label>
              <input
                id="price"
                type="number"
                className="py-1 px-1 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1 pb-2">
              <label htmlFor="Date">Date.</label>
              <input
                id="Date"
                type="date"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>

            <div className="flex flex-col space-y-4 py-4 border-y-2">
              <h4 className="text-lg">Issues</h4>
              
            </div>
           
            <div className="flex flex-col space-y-1">
              <label htmlFor="prescription">Prescription</label>
              <textarea
                id="prescription"
                type="text"
                className="py-1 px-2 h-24 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            
            <div className="flex flex-col space-y-1">
              <label htmlFor="drugs">Drugs</label>
              <textarea
                id="drugs"
                type="text"
                className="py-1 px-2 h-24 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
           
            
          </div>

          <div className="flex items-center justify-end space-x-2">
          <DashboardAddButton 
            text="Add"
          />             
              <DashboardCloseButton
              text="Close"
              showModalHandler={showModalHandler}
            />
          </div>
        </form>
      </div>
  </>
  )
}

export default Dashboardservices2
