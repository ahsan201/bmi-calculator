import baby from "../assets/baby.svg";
import body from "../assets/body.svg";
import cake from "../assets/cake.svg";
import gender from "../assets/gender.svg";
import muscle from "../assets/muscle.svg";

const limitations = [
  {
    icon: gender,
    iconColor: "#E57E94", // Pink
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: cake,
    iconColor: "#00CFCF", // Teal
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    icon: muscle,
    iconColor: "#B680FF", // Purple
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    icon: baby,
    iconColor: "#FFD966", // Yellow
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    icon: body,
    iconColor: "#FF78B4", // Pinkish Red
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export default function Limitation() {
  return (
    <div className="mx-[9vw] grid-box my-10">
      <div className="grid-item">
        <h2 className="text-5xl font-semibold text-gray-800">
          Limitations of BMI
        </h2>
        <p className="text-gray-400 mt-4">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      {limitations.map((item, key) => (
        <div key={key} className="p-6 smallCard rounded-xl grid-item">
          <div className="flex items-center gap-2 mb-2">
            <img src={item.icon} alt="icons" className="w-[30px] h-[30px]" />
            <h4 className="text-xl font-semibold">{item.title}</h4>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
