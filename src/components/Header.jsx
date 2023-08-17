import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = (props) => {
  const [toggle, setToggle] = useState(false);

  const ToggleHandler = (props) => {
    setToggle((prev) => {
      return !prev;
    });
  };
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] my-[12px]  flex justify-between items-center mx-auto">
        <div className="text-3xl font-bold">WsCube Tech</div>
        {!toggle && (
          <AiOutlineMenu
            className="text-white text-2xl md:hidden block"
            onClick={ToggleHandler}
          />
        )}
        {toggle && (
          <AiOutlineClose
            className="text-white text-2xl md:hidden block"
            onClick={ToggleHandler}
          />
        )}
        <ul className="hidden md:flex text-white gap-5">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/**Responsive Menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${
            toggle ? "left-[0%]" : "left-[-100%]"
          }`}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
