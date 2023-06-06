import { Link } from 'react-router-dom';
  
const DashboardComments = () => {
 
 return ( 
   <>
   <section className='relative pt-5 px-3 sm:px-4'>  
            <div className="w-full  pt-10 pb-10 text-gray rounded-none  md:pt-6 md:rounded"
              id="book-">
               <div className="flex flex-col items-center mb-10">
                 <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
                  Comments 
                  </h2>
                      <div className="w-10 h-[3px] bg-[#f97729]" />
                     </div>
                   </div>
             <table className="w-screen text-center overflow-x-auto bg-white rounded sm:w-full">
           <thead>
             <tr className="text-lg border-b-2">
               <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">Name</th>
               <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">
               Email
               </th>
               
               <th className="px-2 py-2 md:px-6 lg:px-4 xl:px-12">
                Date & time
               </th>
              
               <th className="px-2 py-2 md:px-2 lg:px-2 xl:px-5">
                 Comments 
               </th>
             </tr>
           </thead>
           <tbody>
             <tr className="border-b">
               <td className="py-5 px-5 border">
               <Link>Mfonobong Godwin Peter</Link>
                </td>
                <td className="space-x-2 py-5 border">
                <Link>prosperjoy@gmail.com</Link>
               </td>
               <td className="py-5 px-4 border">
                  <span>20/03/2023</span>
               </td>
               
               <td className="py-10 px-5 border">
               <Link>comment from peter</Link>
               </td>
               
             </tr>
             <tr>
               <td className="py-5 px-5 border">
               <Link>Dr Ijeoma Nnabuife</Link>
                </td>
                <td className="space-x-2 py-5">
               <Link>prosperjoy@gmail.com</Link>
               </td>
               <td className="py-5 px-5 border">
               <span>20/03/2023</span>
               </td>
               
               <td className="py-10 px-5 border">
                 <Link>comments from ijeoma</Link>
               </td>
              
             </tr>
           </tbody>
         </table>  
        
    </section>
   </>
 )
}

export default DashboardComments;
