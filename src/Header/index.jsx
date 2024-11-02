// import React, { useState } from "react";
// import logo1 from "../Image1/logo1.png";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import AddLocationIcon from "@mui/icons-material/AddLocation";
// import PersonIcon from "@mui/icons-material/Person";
// import "./style2.css"

// const Header1 = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [selectedVehicleType, setSelectedVehicleType] = useState("Car");

//   const handleInputChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const handleVehicleTypeChange = (event) => {
//     setSelectedVehicleType(event.target.value);
//   };

//   return (
//     <header class="flex items-center justify-between flex-wrap bg-[#0f172a] py-4 w-full">
//       <div class="flex-shrink-0 ml-6">
//         <Link to="/" className="flex items-center">
//           <img src={logo1} alt="logo" className="w-20 h-auto" />
//         </Link>
//       </div>

//       <button id="nav-toggle" class="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-blue-200 hover:border-blue-200">
//         <i class="fas fa-bars fa-2x"></i>
//       </button>

//       <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content">
//         <ul className="md:flex">
//           <li className="mr-6 p-1 md:border-b-2 ">
//             <Link className="text-blue-200 cursor-default" to="/">Home</Link>
//           </li>
//           <li className="mr-6 p-1">
//             <Link className="text-white hover:text-blue-300" to="/newcars">Electric Cars</Link>
//           </li>
//           <li className="mr-6 p-1">
//             <Link className="text-white hover:text-blue-300" to="/hybrid_cars">Hybrid Cars</Link>
//           </li>
//           <li className="mr-6 p-1">
//             <Link className="text-white hover:text-blue-300" to="/hydrogen_cars">Hydrogen Cars</Link>
//           </li>
//           <li className="mr-6 p-1">
//             <Link className="text-white hover:text-blue-300" to="/news_reviews">Car News</Link>
//           </li>
//           <li className="mr-6 p-1">
//             <Link className="text-white hover:text-blue-300" to="/bike/news_reviews">Bikes News</Link>
//           </li>

//         </ul>
//       </div>

//     </header>
//     // <nav className="bg-white shadow-md">
//     //   <div className="flex flex-col md:flex-row items-center justify-between p-4">
//     //     {/* Logo aligned left */}
//     //     <div className="flex items-center flex-shrink-0 w-36">
//     //       <Link to="/" className="flex items-center">
//     //         <img src={logo1} alt="logo" className="w-20 h-auto" />
//     //       </Link>
//     //     </div>

//     //     {/* Centered search bar - Hidden on mobile */}
//     //     <div className="flex items-center justify-center flex-grow mx-4 relative md:block hidden">
//     //       <select
//     //         value={selectedVehicleType}
//     //         onChange={handleVehicleTypeChange}
//     //         className="p-2 border border-gray-300 rounded-md min-w-[120px] mr-2 appearance-none outline-none"
//     //       >
//     //         {["Car", "Truck", "SUV", "Motorcycle", "Van"].map((type, index) => (
//     //           <option key={index} value={type}>
//     //             {type}
//     //           </option>
//     //         ))}
//     //       </select>

//     //       <input
//     //         type="text"
//     //         placeholder="Search Vehicle"
//     //         value={searchValue}
//     //         onChange={handleInputChange}
//     //         className="w-full p-2 pl-10 border border-gray-300 rounded-md outline-none"
//     //       />
//     //     </div>

//     //     {/* Login and Select Location aligned right */}
//     //     <div className="flex items-center gap-4">
//     //       <Link to="/login" className="flex items-center">
//     //         <PersonIcon className="mr-1" />
//     //         <Button variant="contained" className="mr-1">Login</Button>
//     //       </Link>
//     //       <div className="flex items-center text-gray-700">
//     //         <AddLocationIcon className="mr-1" />
//     //         <span>Select Location</span>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   {/* Mobile Hamburger Menu */}
//     //   <div className="flex justify-between items-center p-2 md:hidden">
//     //     <Link to="/" className="flex items-center">
//     //       <img src={logo1} alt="logo" className="w-20 h-auto" />
//     //     </Link>

//     //     <div
//     //       className="flex flex-col cursor-pointer z-10 ml-auto"
//     //       onClick={() => setMenuOpen(!menuOpen)}
//     //     >
//     //       <span className="w-6 h-[3px] bg-gray-700 my-1"></span>
//     //       <span className="w-6 h-[3px] bg-gray-700 my-1"></span>
//     //       <span className="w-6 h-[3px] bg-gray-700 my-1"></span>
//     //     </div>
//     //   </div>

//     //   {/* Search bar for mobile */}
//     //   <div className={`md:hidden ${menuOpen ? "block" : "hidden"} p-4`}>
//     //     <div className="flex items-center justify-center mb-4 relative">
//     //       <select
//     //         value={selectedVehicleType}
//     //         onChange={handleVehicleTypeChange}
//     //         className="p-2 border border-gray-300 rounded-md min-w-[120px] mr-2 appearance-none outline-none"
//     //       >
//     //         {["Car", "Truck", "SUV", "Motorcycle", "Van"].map((type, index) => (
//     //           <option key={index} value={type}>
//     //             {type}
//     //           </option>
//     //         ))}
//     //       </select>

//     //       <input
//     //         type="text"
//     //         placeholder="Search Vehicle"
//     //         value={searchValue}
//     //         onChange={handleInputChange}
//     //         className="w-full p-2 pl-10 border border-gray-300 rounded-md outline-none"
//     //       />
//     //     </div>
//     //   </div>

//     //   <ul
//     //     className={`absolute top-12 left-0 right-0 bg-white p-5 space-y-5 transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "flex" : "hidden"} flex-col`}
//     //   >
//     //     {[
//     //       { path: "/newcars", label: "Electric Cars" },
//     //       { path: "/hybrid_cars", label: "Hybrid Cars" },
//     //       { path: "/hydrogen_cars", label: "Hydrogen Cars" },
//     //       { path: "/news_reviews", label: "Car News" },
//     //       { path: "/bike/news_reviews", label: "Bikes News" },
//     //     ].map(({ path, label }) => (
//     //       <li key={path}>
//     //         <NavLink
//     //           to={path}
//     //           onClick={() => setMenuOpen(false)}
//     //           className={({ isActive }) =>
//     //             `block p-2 rounded-md ${isActive ? "bg-blue-500 text-white" : "text-gray-700"} transition-colors duration-300`
//     //           }
//     //         >
//     //           {label}
//     //         </NavLink>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </nav>
//   );
// };

// export default Header1;


import React, { useState } from "react";
import logo1 from "../Image1/logo1.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import "./style2.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Header1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#0f172a] py-4 w-full">
      <div className="flex justify-between items-center px-10">
        <div className="flex-shrink-0 ml-6">
          <Link to="/" className="flex items-center">
            <img src={logo1} alt="logo" className="w-20 h-auto" />
          </Link>
        </div>
        <div className="relative w-[50%] hidden md:block">
          <div className="flex items-center">

            <select
              className="p-[9.5px] border border-gray-300 rounded-l-md bg-gray-100 text-gray-700 cursor-pointer focus:outline-none "
              defaultValue="all"
            >
              <option value="all">All Vehicles</option>
              <option value="cars">Cars</option>
              <option value="bikes">Bikes</option>
              <option value="trucks">Trucks</option>
              <option value="suvs">SUVs</option>
              <option value="vans">Vans</option>
            </select>
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search for cars, bikes..."
              className="p-2 border border-gray-300 rounded-r-md w-full focus:outline-none  "
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>



        {/* Login Link */}
        <div className="hidden md:block"> {/* Hide on mobile */}
          <Link className="text-white hover:text-blue-300 mx-2" title="Login">
            <PersonIcon className="mr-1" fontSize="large" />
          </Link>
          <Link className="text-white hover:text-blue-300 mx-2" title="Select location">
            <AddLocationIcon className="mr-1" fontSize="large" />
          </Link>

        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-blue-200 hover:border-blue-200"
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>



      <div className="flex justify-center">
        <div className={`py-3 pl-6 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`} id="nav-content">
          <ul className="md:flex items-center">
            <li className="mr-6 p-1 border-yellow-500 md:border-b-2">
              <Link className="text-white hover:text-blue-300" to="/newcars">Electric Cars</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/hybrid_cars">Hybrid Cars</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/hydrogen_cars">Hydrogen Cars</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/news_reviews">Car News</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/bike/news_reviews">Bikes News</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header1;
