  import React from 'react';
  import { NavLink } from 'react-router-dom';
  import {
    RiBillLine,
    RiDashboard3Line,
    RiFileList2Line,
    RiHeartLine,
    RiProductHuntLine,
    RiSettings3Line,
    RiShutDownLine,
    RiStockLine
  } from 'react-icons/ri';
  import { FaRegUser } from 'react-icons/fa';

  const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <aside className={`w-64 bg-white p-4 shadow-md h-screen fixed top-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <nav>
          <ul className="text-center">
            <li>
              <NavLink to="/" className="text-blue-600 font-bold text-3xl" onClick={toggleSidebar}>
                Dash<span className="text-black">Stack</span>
              </NavLink>
            </li>
            <li className="mb-2 mt-6">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiDashboard3Line className="mr-2" />
                Dashboard
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/product"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiProductHuntLine className="mr-2" />
                Product
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/favorite"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiHeartLine className="mr-2" />
                Favorite
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/order-list"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiFileList2Line className="mr-2" />
                Order List
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/user"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <FaRegUser className="mr-2" />
                User
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/product-stock"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiStockLine className="mr-2" />
                Product Stock
              </NavLink>
            </li>
            
            <li className="mb-2">
              <NavLink
                to="/invoice"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiBillLine className="mr-2" />
                Invoice
              </NavLink>
            </li>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-[150px]"></hr>
            <li className="mb-2">
              <NavLink
                to="/settings"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiSettings3Line className="mr-2" />
                Settings
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/login"
                className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
                onClick={toggleSidebar}
              >
                <RiShutDownLine className="mr-2" />
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };

  export default Sidebar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   RiBillLine,
//   RiCalendarLine,
//   RiDashboard3Line,
//   RiFileList2Line,
//   RiHeartLine,
//   RiPriceTag3Line,
//   RiProductHuntLine,
//   RiSettings3Line,
//   RiShutDownLine,
//   RiStockLine
// } from 'react-icons/ri';
// import { FaRegUser } from 'react-icons/fa';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <aside className={`w-64 bg-white p-4 shadow-md h-screen fixed top-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
//       <nav>
//         <ul className="text-center">
//           <li>
//             <NavLink to="/" className="text-blue-600 font-bold text-3xl" onClick={toggleSidebar}>
//               Dash<span className="text-black">Stack</span>
//             </NavLink>
//           </li>
//           <li className="mb-2 mt-6">
//             <NavLink
//               to="/"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiDashboard3Line className="mr-2" />
//               Dashboard
//             </NavLink>
//           </li>
//           <li className="mb-2">
//             <NavLink
//               to="/product"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiProductHuntLine className="mr-2" />
//               Product
//             </NavLink>
//           </li>
//           <li className="mb-2">
//             <NavLink
//               to="/favorite"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiHeartLine className="mr-2" />
//               Favorite
//             </NavLink>
//           </li>
//           <li className="mb-2">
//             <NavLink
//               to="/order-list"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiFileList2Line className="mr-2" />
//               Order List
//             </NavLink>
//           </li>
//           <li className="mb-2">
//             <NavLink
//               to="/user"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <FaRegUser className="mr-2" />
//               User
//             </NavLink>
//           </li>
//           <li className="mb-2">
//             <NavLink
//               to="/product-stock"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiStockLine className="mr-2" />
//               Product Stock
//             </NavLink>
//           </li>
//           {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//           <p className='flex items-center text-[#202224]'>PAGES</p>
//           <li className="mb-2">
//             <NavLink
//               to="/pricing"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center mt-5' : 'text-black p-2 rounded block flex items-center mt-5'}
//               onClick={toggleSidebar}
//             >
//               <RiPriceTag3Line className="mr-2" />
//               Pricing
//             </NavLink>
//           </li> */}
         
//           <li className="mb-2">
//             <NavLink
//               to="/invoice"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiBillLine className="mr-2" />
//               Invoice
//             </NavLink>
//           </li>
//           <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//           <li className="mb-2">
//             <NavLink
//               to="/settings"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiSettings3Line className="mr-2" />
//               Settings
//             </NavLink>
//           </li>
//           <li className="mb-2">
//             <NavLink
//               to="/login"
//               className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-2 rounded block flex items-center' : 'text-black p-2 rounded block flex items-center'}
//               onClick={toggleSidebar}
//             >
//               <RiShutDownLine className="mr-2" />
//               Logout
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
