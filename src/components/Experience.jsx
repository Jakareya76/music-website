import Card from "./Card";
import CardData from "./CardData";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-start px-[5] bg-[#020917] pt-[18rem] pb-[8rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img
        src={require("../assets/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      <div className="sm:mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="mt-10 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3">
      {
          CardData.map((value, index)=>{
            return <Card key={index} title={value.text} icon={value.icon} description={value.description} />
          })
      }
      </div>
    </div>
  );
};

export default Experience;
