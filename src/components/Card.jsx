const Card = ({ title, icon, description }) => {
  return (
    <div className="w-72 md:w-80 text-center flex flex-col items-center justify-center hover:bg-[#18193867] cursor-pointer duration-300 p-4 rounded-md">
      <div className="bg-[#8d3daf49] w-20 p-5 rounded-lg">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl mt-2">{title}</h3>
      <p className="text-gray-500 text-sm my-3">{description}</p>
      <h1 className="bg-[#08254b91] px-4 py-1 rounded-md text-sm">
        LEARN MORE
      </h1>
    </div>
  );
};

export default Card;
