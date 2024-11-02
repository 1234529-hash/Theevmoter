import React from "react";
import Toyo1 from "../Images/Toyo1.webp";
import Toyo3 from "../Images/Toyo3.webp";
import Toyo4 from "../Images/Toyo4.jpg";
const Cars = () => {
  return (
    <div>
      <div>
        <div>
          <img src={Toyo1} className="w-[500px] h-[400px] mx-28 rounded-3xl " />
        </div>
        <div className="flex ">
          <img src={Toyo3} className="w-24 h-24  rounded-lg" />
          <img src={Toyo4} className="w-24 h-24  rounded-lg" />
          <div className="w-24 h-24 rounded-lg border-color:2px solid black bg-slate-400">
            10+ more photo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
