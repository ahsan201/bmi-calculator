// #F7FBFF
import bowl from "../assets/bowl.svg";
import dumbbell from "../assets/dumbbell.svg";
import moon from "../assets/moon.svg";
function Advice() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#F7FBFF] p-10 gap-8 mx-10 my-14 md:mx-14 rounded-[2rem] justify-around align-center">
      <div>
        <div className="p-3 bg-[#FADEEE] rounded-full inline-block">
          <img src={bowl} alt="bowl icon" />
        </div>
        <p className="text-2xl font-semibold my-2">Healthy eating</p>
        <p className="text-gray-400 max-w-sm">
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
      <div className="sm:ml-auto sm:text-right md:ml-0 md:text-left">
        <div className="p-3 bg-[#FAEEE2] rounded-full inline-block">
          <img src={dumbbell} alt="dumbbell icon" />
        </div>
        <p className="text-2xl font-semibold my-2">Regular exercise</p>
        <p className="text-gray-400 max-w-sm">
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div>
        <div className="p-3 bg-[#D8F4F7] rounded-full inline-block">
          <img src={moon} alt="moon icon" />
        </div>
        <p className="text-2xl font-semibold my-2">Adequate sleep</p>
        <p className="text-gray-400 max-w-sm">
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
      </div>
    </div>
  );
}

export default Advice;
