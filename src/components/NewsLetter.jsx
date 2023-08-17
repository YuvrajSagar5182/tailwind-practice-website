const NewsLetter = (props) => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex  justify-between py-[40px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to Learn latest I.T Skills
          </h1>
          <span className="text-white">
            Sign Up to our NewsLetter and stau up to date.
          </span>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[black] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p className="text-white">
            We care bout the protection of your data. Read our{" "}
            <span className="text-black">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
