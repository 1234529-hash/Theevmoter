import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Toyo1 from "./Images/Toyo1.webp";
import Toyo2 from "./Images/Toyo2.webp";
import Toyo3 from "./Images/Toyo3.webp";
import Toyo4 from "./Images/Toyo4.jpg";
import CreateIcon from "@mui/icons-material/Create";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
const Toyota = () => {
  var items = [
    {
      id: 1,
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/C40-Recharge/9224/1693842924520/front-left-side-47.jpg?tr=w-150",
      name: "Toyota",
      price: "21 Lakh",
      rating: 4.5,
      type: "Electric",
      capacity: "77.4 kwh",
      range: "708 km",
      chatime: "18 Min-Dc 350 Kw",
      power: "225.86 bhp",
      airbag: 8,
      safity: "5 Star",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Toyota i4",
      price: "12.20 Lakh",
      rating: 4.8,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1729013869928-28768d9dec80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95b3RhJTIwY2FyfGVufDB8fDB8fHww",
      name: "Toyota i5",
      price: "16 Lakh",
      rating: 4.9,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Toyota i6",
      price: "13.60 Lakh",
      rating: 5.5,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/28906417/pexels-photo-28906417/free-photo-of-stylish-white-sports-car-on-scenic-roadway.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Toyota i7",
      price: "14.40 Lakh",
      rating: 4.6,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Toyota i8",
      price: "17 Lakh",
      rating: 4.7,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/16850880/pexels-photo-16850880/free-photo-of-back-of-a-red-toyota-gr86-on-an-asphalt-road.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Toyota i4",
      price: "19 Lakh",
      rating: 6.2,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/5835014/pexels-photo-5835014.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Toyota i4",
      price: "14.80 Lakh",
      rating: 6.3,
      type: "Electric",
      capacity: "72.4-84.9 kwh",
      range: "483-590 km",
      chatime: "-",
      power: "335.86 bhp",
      airbag: 8,
      safity: "-",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 mt-10">
        <div>
          <img src={Toyo1} className="w-[500px] h-[400px] mx-28 rounded-3xl " />
          {/* <div className="flex justify-around ">
          <span>
            <ArrowBackIosNewIcon />
          </span>
          <span>
            <ArrowForwardIosIcon />
          </span>
         </div> */}

          <div className="flex mx-28 mt-4 gap-3">
            <img src={Toyo2} className="w-24 h-24 rounded-lg " />

            <img src={Toyo3} className="w-24 h-24  rounded-lg" />
            <img src={Toyo4} className="w-24 h-24  rounded-lg" />
            <div className="w-24 h-24 rounded-lg border-color:2px solid black bg-slate-400">
              10+ more photo
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-bold text-2xl">Toyota V11</h1>
            <div className="flex mt-8">
              <StarIcon className="!text-yellow-400" />
              <StarIcon className="!text-yellow-400" />
              <StarIcon className="!text-yellow-400" />
              <StarHalfIcon className="!text-yellow-400" />
              <StarIcon className="!text-slate-200" />
              <span>20+ Rating</span>&nbsp;&nbsp;
              <div className="h-7 w-44 border-2 border-solid border-blue-400">
                <CreateIcon /> write you review
              </div>
            </div>

            <h1 className="mt-8">
              <CurrencyRupeeIcon />
              Rs25.96 - 28.97 L
            </h1>
            <h3>Ex-Showroom price</h3>
          </div>
          <div className=" flex gap-20 mt-8">
            <Button variant="contained" className="!bg-blue-700 rounded-md">
              Get Best offer
            </Button>
            <Button
              variant="contained"
              className="!bg-slate-300 rounded-md !text-blue-400"
            >
              on- Road Price
            </Button>
          </div>
          <div className="border-4 border-solid border-slate mt-8 w-[400px] rounded-lg px-10 pt-7">
            <h3>
              Get Your<span className="font-semibold text-xl">Toyota V11</span>
            </h3>
            <h2 className="pt-6">
              <CurrencyRupeeIcon />
              72,025 /- per month EMI
            </h2>
            <h3 className="font-medium pt-3">
              Interest calculate at 9.8 % for 48 months
            </h3>
            <Button
              variant="contained"
              className="!bg-blue-700 rounded-md pt-7 !mb-4"
            >
              Edit EMI
            </Button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mx-28 w-[1200px] mt-5 bg-slate-200 px-2 py-2 rounded-md">
            <h1 className="text-2xl font-semibold">
              Toyota V11 comparison with similar cars
            </h1>
            <div className="flex gap-5 mt-5">
              {items.map((i) => {
                return (
                  <div>
                    <img
                      src={i?.image}
                      alt="pho1"
                      className="w-36 h-40 rounded-xl "
                    />
                    <p>{i?.name}</p>
                    <span className="font-bold">
                      <span>
                        <CurrencyRupeeIcon className="!size-4" />
                      </span>
                      {i?.price}
                    </span>
                    <p>
                      {i?.rating}
                      <StarIcon className="text-yellow-500" />
                      <StarIcon className="text-yellow-500" />
                    </p>
                    <h2>fule type</h2>
                    <p>{i?.type}</p>
                    <h2>Battery Capacity</h2>
                    <p>{i?.capacity}</p>
                    <h2>Range</h2>
                    <p>{i.range}</p>
                    <h2>Charging Time</h2>
                    <p>{i.chatime}</p>
                    <h2>Power</h2>
                    <p>{i.power}</p>
                    <h2>Air Bag</h2>
                    <p>{i.airbag}</p>
                    <h2>GNCAP Safety rating</h2>
                    <p>{i.safity}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-28 mt-5 w-screen">
            <h1 className="text-2xl font-medium">Electric cars</h1>
            <div className="flex gap-5 mt-3">
              <span className="text-bold">Popular</span>
              <span className="hover:opacity-55">Upcoming</span>
              <span className="hover:opacity-55">Latest</span>
              <hr />
            </div>

            <div className="flex  mt-5 my-10  ">
              <div className="h-52 w-[425px]">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv-EV/8935/1723089608373/front-left-side-47.jpg?tr=w-300" />
                <h3 className="px-3">Tata Curvv EV</h3>
                <p className="px-3">Rs17.49 - 21.99 Lakh*</p>
                <Button
                  variant="contained"
                  className="!bg-white rounded-md  !text-orange-400 !border-orange-400 !border-2px px-3"
                >
                  check October offers
                </Button>
              </div>
              <div className="h-52 w-[425px]">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300" />
                <h3 className="px-3">MG Windsor EV</h3>
                <p className="px-3">Rs13.50 - 15.50 Lakh*</p>
                <Button
                  variant="contained"
                  className="!bg-white rounded-md  !text-orange-400 !border-orange-400 !border-2px px-3"
                >
                  check October offers
                </Button>
              </div>
              <div className="h-52 w-[425px]">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon-EV-2023/11024/1694146347051/front-left-side-47.jpg?tr=w-300" />
                <h3 className="px-3">Tata Nexon EVTata Nexon EV</h3>
                <p className="px-3"> Rs12.49 - 17.19 Lakh*</p>
                <Button
                  variant="contained"
                  className="!bg-white rounded-md  !text-orange-400 !border-orange-400 !border-2px px-3"
                >
                  check October offers
                </Button>
              </div>

              <div className="h-52 w-[425px]">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch-EV/9484/1704446706447/front-left-side-47.jpg?tr=w-300" />
                <h3 className="px-3">Tata Punch EV</h3>
                <p className="px-3">Rs9.99 - 14.29 Lakh*</p>
                <Button
                  variant="contained"
                  className="!bg-white rounded-md  !text-orange-400 !border-orange-400 !border-2px px-3"
                >
                  check October offers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toyota;
