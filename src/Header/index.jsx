import React, { useEffect, useState } from "react";
import logo1 from "../Image1/logo1.png";
import { IoIosPerson } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./style.css";

import Lottie from "react-lottie";
import { Button } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PersonIcon from "@mui/icons-material/Person";

// import * as animationData from "../data/beta.json";
// import { fetchEvMake, fetchEvModel } from "../../helpers/axios";
// import LocationPopup from "../Popup/popup";

/**
 * @author
 * @function Header
 **/

const Header1 = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  const [searchValue, setSearchValue] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [makes, setMakes] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);

  // useEffect(() => {
  //   const fetchVehicles = async () => {
  //     try {
  //       let { message } = await fetchEvModel();
  //       const processedMessage = message?.map((vehicle) => {
  //         const { _id, name, title, make, image, modelsId, priceRange } =
  //           vehicle;
  //         return { _id, name, make, image, modelsId, priceRange, title };
  //       });

  //       setVehiclesData(processedMessage);
  //     } catch (error) {
  //       console.error("Error fetching vehicles data:", error);
  //     }
  //   };

  //   fetchVehicles();
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const result = await fetchEvMake();
  //       const obj = {
  //         make: "All",
  //         makeSlug: "",
  //       };
  //       setMakes([obj, ...result.message]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function fetchVehiclesData() {
  //     try {
  //       if (searchValue) {
  //         console.log("ve", vehiclesData);
  //         const vehicles = vehiclesData?.filter((vehicle) => {
  //           let { title } = vehicle;
  //           title = title.toLowerCase();
  //           return title.startsWith(searchValue.toLowerCase());
  //         });

  //         setFilteredVehicles(vehicles);
  //       } else {
  //         setFilteredVehicles([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchVehiclesData();
  // }, [searchValue]);

  const navigate = useNavigate();

  const handleVehicleChange = (e) => {
    const selectedMake = makes.filter(
      (obj) => obj.makeSlug === e.target.value
    )[0];
    if (selectedMake.make === "") {
      navigate("/");
    } else {
      const { make, makeSlug, makeId } = selectedMake;
      const state = { make, makeSlug, makeId };
      setSelectedVehicle(makeSlug);
      navigate(`/${makeSlug}`, { state: { state } });
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setDropdownOpen(true);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (filteredVehicles.length > 0) {
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredVehicles.length - 1 ? prevIndex + 1 : 0
        );
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();

      if (filteredVehicles.length > 0) {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredVehicles.length - 1
        );
      }
    } else if (e.key === "Enter") {
      e.preventDefault();

      if (selectedIndex >= 0 && filteredVehicles[selectedIndex]) {
        setSearchValue(filteredVehicles[selectedIndex].name);
        setDropdownOpen(false);
        submitHandler(e);
      } else {
        submitHandler(e);
      }
    } else if (e.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  const handleSelection = (vehicle, e) => {
    setSearchValue(vehicle.name);
    setDropdownOpen(false);
    setSelectedIndex(-1);
    submitHandler(e, vehicle.name);
  };

  const submitHandler = async (e, vehicle = "") => {
    e.preventDefault();

    const message = "This is message";
    const searchVehicle = vehicle.length ? vehicle : searchValue;

    const selected = message.filter((obj) => obj.name === searchVehicle);

    if (selected.length) {
      const { makeSlug, carSlug, images, baseVariant } = selected[0];
      const state = { carSlug, makeSlug, images, baseVariant };
      navigate(`/${makeSlug}/${carSlug}`, { state: { state } });
    }
  };

  return (
    <nav className="header-nav">
      <form onSubmit={submitHandler} className="search-bar">
        <select
          value={selectedVehicle}
          onChange={handleVehicleChange}
          className="dropdowns"
        >
          {makes.map((vehicle, index) => (
            <option key={index} value={vehicle.makeSlug}>
              {vehicle.make}
            </option>
          ))}
        </select>

        <div className="search-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="custom-svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Vehicle"
            value={searchValue}
            onChange={handleInputChange}
            className="search-text"
            onKeyDown={handleKeyDown}
          />
          <span>All</span>
        </div>

        {dropdownOpen && searchValue && filteredVehicles.length > 0 && (
          <ul className="dropdown-menu">
            {filteredVehicles.map((vehicle, index) => (
              <li
                key={index}
                className={`dropdown-item ${
                  selectedIndex === index ? "active" : ""
                }`}
                onClick={(e) => handleSelection(vehicle, e)}
              >
                {vehicle.title}
              </li>
            ))}
          </ul>
        )}
      </form>

      <div className="nav-links">
        <div>
          <Link to="/" className="title">
            <img src={logo1} alt="logo" />
            {/* <span>TheEVmotors</span> */}
          </Link>
          {/* <Lottie className='title' options={defaultOptions}
                height='auto'
                width={100}
                /> */}
        </div>

        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink
              to="/newcars"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Electric Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hybrid_cars"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Hybrid Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hydrogen_cars"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Hydrogen Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news_reviews"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Car News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bike/news_reviews"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Bikes News
            </NavLink>
          </li>
          {/* <li>
                        <NavLink to='/createblog' onClick={() => { setMenuOpen(!menuOpen) }
                        }>Post</NavLink>
                    </li> */}
          {/* <li>
                        <NavLink to='/details' onClick={() => { setMenuOpen(!menuOpen) }
                        }>Details</NavLink>
                    </li> */}
          <li> {/* <LocationPopup />{" "} */}</li>
        </ul>

        <div className="login-nav">
          <Link to="/login" className="title">
            <span>
              <PersonIcon />
              <Button variant="Contained">Login</Button>
            </span>
            <div>
              <AddLocationIcon />
              Select Location
            </div>

            {/* <span>Login</span> */}
          </Link>
        </div>
      </div>
      {/* <div className='login'>
                <IoIosPerson>Login</IoIosPerson>
            </div> */}
    </nav>
  );
};

export default Header1;
