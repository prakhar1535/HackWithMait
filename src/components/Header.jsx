import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeaderVideo from "./HeaderVideo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const history = usehistory()
  const navigate=useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen mt-60 gap-3">
        <h2 className="text-5xl font-bold mb-4">Welcome To MAIT-A-VERSE</h2>
        <h4 className="text-xl mb-4">
          A   One Stop Virtual Reality Platform.{" "}
         
            <br />
            <span className=" text-purple-500 font-semibold text-center "><center className="mt-1">Lets Dive Into Virtual World!</center> </span>
          
        </h4>
        <div className="flex gap-5 ">
        <button onClick={() => window.open("https://sviperelite.itch.io/maitaverse-workspace", "_blank")} className="bg-purple-700 text-white px-5 py-3 rounded-2xl">
          Enter The Virtual World!
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 "
            style={{ transform: "rotate(20deg)" }}
          />{" "}
        </button>
        <button onClick={()=>navigate("/explore")} className="bg-red-700 text-white px-5 py-3 rounded-2xl">
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