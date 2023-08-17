import Typed from "react-typed";

const Banner = (props) => {
  return (
    <div className="bg-[#2699fb] w-full py-[150px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:p-[24px] ">Learn with Us</div>
        <div className="text-white text-5xl md:text-[80px] md:p-[24px]">
          Grow with Us
        </div>
        <div className="text-[30px] md:text-[50px] text-white md:p-[24px]">
          Learn
          <Typed
            className="ml-2 md:ml-4"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={100}
          />
        </div>
        <button className="w-[30%] md:w-[10rem] inline bg-black text-white p-2 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
