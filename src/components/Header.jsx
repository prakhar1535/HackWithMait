import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeaderVideo from "./HeaderVideo";
const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen mt-60 gap-3">
        <h2 className="text-5xl font-bold mb-4">Welcome To MAIT-A-VERSE</h2>
        <h4 className="text-xl mb-4">
          GHUMO NACHO BHENCHODDDDDDDD{" "}
         
            <br />
            <span className=" text-purple-500 font-semibold text-center "><center className="mt-1">PUBJABI MADARCHOD</center> </span>
          
        </h4>
        <div className="flex gap-5 ">
        <button className="bg-purple-700 text-white px-5 py-3 rounded-2xl">
          Enter The Virtual World!
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 "
            style={{ transform: "rotate(20deg)" }}
          />{" "}
        </button>
        <button className="bg-red-700 text-white px-5 py-3 rounded-2xl">
          EXplore Us!
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 "
            style={{ transform: "rotate(-20deg)" }}
          />{" "}
        </button>

        </div>
       
        <HeaderVideo />
      </div>
    </>
  );
};

export default Header;
