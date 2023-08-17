import laptop from "../assets/imgs/laptop.jpg";
const Experts = (props) => {
  return (
    <div className="max-w-[1240px] mx-auto my-10 p-3 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor, sit amet consecte tur adipis icing elit. Nobis
          repudiandae possimus distinctio aperiam quaerat, accusamus sit
          necessitatibus harum vitae, maxime temporibus neque officiis dolore
          voluptate architecto eos hic! Non, dolor.
        </p>
        <button className="w-[30%] inline bg-black text-white p-2 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
