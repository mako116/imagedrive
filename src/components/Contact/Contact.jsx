import { useState } from "react";
import { Link } from "react-router-dom";

import locationIcon from "../../assets/map-pin.svg";
import phoneIcon from "../../assets/phone.svg";

const Contact = () => {
  const [dateType, setDateType] = useState(false);

  return (
    <section>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
            Contact us
          </h2>
          <div className="w-10 h-[3px] bg-[#f97729]" />
        </div>

        <div className="flex flex-col justify-center space-y-6 px-4 mb-20 text-lg md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:text-xl lg:space-x-20">
          <div className="flex flex-col items-center text-center md:pr-4 md:border-r md:border-gray-300 lg:pr-16">
            <div className="mb-3">
              <img
                className="w-9 h-9 md:w-12 md:h-12"
                src={locationIcon}
                alt="Location Icon"
              />
            </div>
            <div>
              <p>12 William Street (Amaecom Global House)</p>
              <p>Just after Nepa line road by Aka road</p>
              <p>Uyo, Akwa Ibom State</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                className="w-9 h-9 md:w-12 md:h-12"
                src={phoneIcon}
                alt="Location Icon"
              />
            </div>
            <div>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <Link to="tel:+2349071259643">+2349071259643</Link>
              </p>
              <p>
                <span className="font-bold">Optometrist:</span>{" "}
                <Link to="tel:+2347030729996">+2347030729996</Link>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <Link to="mailto:imageplusng@gmail.com">
                  imageplusng@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Book Appointment */}
        <div id="book-appointment">
          <div className="flex flex-col items-center mb-12">
            <h2 className="mb-3 text-center text-4xl font-bold uppercase md:text-5xl">
              Request a Consultation
            </h2>
            <div className="w-10 h-[3px] bg-[#f97729]" />
          </div>

          <form>
            <div className="flex flex-col space-y-5 mb-5 md:space-y-8 md:mb-8">
              <div className="flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type="text"
                  placeholder="Your Name *"
                  required
                />
                <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type="text"
                  placeholder="Phone number *"
                  required
                />
              </div>
              <div className="flex w-full flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type={dateType ? "datetime-local" : "text"}
                  placeholder="Appointment Date & Time"
                  onFocus={() => setDateType((prevVal) => !prevVal)}
                  onBlur={() => setDateType((prevVal) => !prevVal)}
                />
              </div>
            </div>
            <div className="text-[#333] mb-5 md:mb-8">
              <select
                className="p-2 border w-full rounded outline-none"
                name="branch"
              >
                <option value="select branch">Select Branch</option>
                <option value="uyo">Uyo</option>
                <option value="port harcourt">Port Harcourt</option>
                <option value="asaba asaba">Asaba, Asaba</option>
                <option value="aba">Aba</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
              </select>
            </div>
            <div>
              <textarea
                className="w-full h-52 p-3 mb-5 text-sm text-white bg-transparent border rounded md:mb-4"
                placeholder="Notes (if possible, tell us what your appointment is for)"
              />
            </div>
            <div className="flex justify-center">
              <button className="px-10 py-3 text-lg font-bold uppercase bg-[#2f2f2f] text-white rounded-full transition-colors hover:bg-[#045544]">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
