import { useState } from "react";
import { Link } from "react-router-dom";

import DashboardButton, {
  DashboardEditButton,
  DashboardDeleteButton,
} from "../DashboardButton";
import DashboardPatientsModal from "./DashboardPatientsModal";
import DashboardOverlay from "../DashboardOverlay";

const DashboardPatients = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };

  return (
    <div>
      <section className="relative pt-7 px-3 sm:px-8">
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add Patients"
        />
        <div className="bg-white shadow-md overflow-x-auto">
          <h4 className="w-screen py-2 text-white text-xl text-center bg-[#f97729] rounded-t sm:w-full">
            Patients
          </h4>
          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">Name</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Phone No.
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-2">
                  <Link>Mfonobong Godwin Peter</Link>
                </td>
                <td className="py-2 px-2">0812673811</td>
                <td className="flex justify-center space-x-2 py-2">
                  <DashboardEditButton />
                  <DashboardDeleteButton />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2">
                  <Link>Mfonobong Godwin Peter</Link>
                </td>
                <td className="py-2 px-2">0812673811</td>
                <td className="flex justify-center space-x-2 py-2">
                  <DashboardEditButton />
                  <DashboardDeleteButton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardPatientsModal showModalHandler={showModalHandler} />
          </div>
        )}
      </section>

      {showModal && <DashboardOverlay />}
    </div>
  );
};

export default DashboardPatients;
