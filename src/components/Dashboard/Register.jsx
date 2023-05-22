const Register = () => {
  return (
    <div className="h-screen bg-[#efefef]">
      <div className="flex justify-center px-3 sm:px-0">
        <div className="w-full mt-10 pb-8 bg-white rounded-md shadow-md sm:w-9/12 md:w-8/12 xl:w-1/2">
          <h3 className="w-full py-2 mb-8 text-center text-2xl rounded-t-md text-white font-bold bg-[#f97729]">
            Register
          </h3>
          <form>
            <div className="flex flex-col space-y-4 px-6 mb-6 text-lg sm:px-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="firstname">First Name</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="lastname"
                  type="password"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="email">E-Mail Address</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="password">Password</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="password"
                  type="password"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="confirmpassword"
                  type="password"
                />
              </div>
            </div>

            <div className="flex justify-end px-6 sm:px-10">
              <button className="px-4 py-2 w-full text-[#f97729] uppercase font-bold border-2 border-[#f97729] rounded-md transition-colors duration-200 hover:text-white hover:bg-[#f97729] sm:w-full md:w-[65%]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
