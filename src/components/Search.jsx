import MusicPlayer from "./MusicPlayer";

const Search = () => {
  return (
    <div className="relative h-[65rem] px-[5rem] bg-[#001730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[2] flex items-center justify-between rounded-b-[5rem]">
      {/* Left */}
      <div className="flex-1">
        <img
          src={require("../assets/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../assets/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />
        <img
          src={require("../assets/d2.png")}
          alt=""
          className="w-[9rem] top-[32.7rem] left-[7rem] absolute"
        />
        <img
          src={require("../assets/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <img
          src={require("../assets/d4.png")}
          alt=""
          className="w-[13rem] top-[50.9rem] left-[7.75rem] absolute"
        />
      </div>
      {/* Right */}
      <div className="flex items-start justify-start flex-1 flex-col h-[100%] pt-[9rem]">
        <div className="flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter The Keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          <div className="flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#c50909] to-[#b717cc] p-4 cursor-pointer h-[3rem]">
            <img
              src={require("../assets/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        <div className="flex justify-start mt-7 items-center w-full">
          <img src={require("../assets/Path 318.png")} alt="" />
        </div>
        <div>
          <div className="flex flex-col mt-5 text-4xl">
            <span>Search Music</span>
            <span>
              <b>Name or Direct URL</b>
            </span>
            <span className="text-sm mt-3 text-[#4D586A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,{" "}
              <br /> laudantium numquam atque, veritatis dignissimos accusantium{" "}
              <br />
              officiis voluptatibus sapiente, beatae dolor
            </span>
          </div>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Search;
