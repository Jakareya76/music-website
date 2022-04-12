import DownloadBtn from "./shared/DownloadBtn";

const Hero = () => {
  return (
    <section className="bg-[#081730] flex items-center justify-between px-20 rounded-b-[5rem] w-full h-[35rem] relative z-[4]">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-center h-full">
        <h1 className="text-5xl my-1">Experience The</h1>
        <p className="text-6xl font-bold my-2">Best Qulaity Music</p>
        <span className="text-sm text-gray-500 font-sans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quae
          qui fugiat, <br />
          reiciendis laudantium a quibusdam eaque debitis fugit odio.
        </span>
        <div className="flex flex-col mt-8 ">
          <div className="-ml-3">
            <DownloadBtn />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="images relative w-[50%]">
        <img
          className="absolute top-[-8rem] left-[19rem]"
          src={require("../assets/backgraphics.png")}
          alt=""
        />
        <img
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          src={require("../assets/p 1.png")}
          alt=""
        />
        <img
          className="absolute left-[235px] top-[94px] w-[175px]"
          src={require("../assets/p 2.png")}
          alt=""
        />
        <img
          className="absolute w-[5rem] left-[13rem] top-[12rem]"
          src={require("../assets/p 3.png")}
          alt=""
        />
        <img
          className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          src={require("../assets/p 4.png")}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
