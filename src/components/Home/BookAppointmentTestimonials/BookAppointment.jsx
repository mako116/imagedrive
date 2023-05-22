import { useState } from "react";

const BookAppointment = () => {
  const [dateType, setDateType] = useState(false);

  return (
    <div
      className="w-full pt-10 pb-10 px-6 text-white bg-[#2f2f2f] rounded-none md:w-1/2 md:pt-6 md:rounded"
      id="book-appointment"
    >
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Book Appointment
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>

      <form>
        <div className="flex flex-col space-y-5 mb-5 md:mb-4">
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Your Name *"
              required
            />
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Phone number *"
              required
            />
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type={dateType ? "datetime-local" : "text"}
              placeholder="Appointment Date & Time"
              onFocus={() => setDateType((prevVal) => !prevVal)}
              onBlur={() => setDateType((prevVal) => !prevVal)}
            />
          </div>
        </div>
        <div className="text-[#333] mb-5 md:mb-4">
          <select className="p-1 rounded outline-none" name="branch">
            <option value="select branch">Select Branch</option>
            <option value="uyo">Uyo</option>
            <option value="port harcourt">Port Harcourt</option>
          </select>
        </div>
        <div>
          <textarea
            className="w-full h-40 p-2 mb-5 text-sm text-white bg-transparent border rounded placeholder-white md:mb-4"
            placeholder="Notes (if possible, tell us what your appointment is for)"
          />
        </div>
        <div className="flex justify-center">
          <button className="px-10 py-3 text-lg font-bold uppercase border border-white rounded-full transition-colors hover:bg-[#045544]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
