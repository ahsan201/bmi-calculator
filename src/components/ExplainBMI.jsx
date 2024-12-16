import modelImage from "../assets/model.jpg";
function ExplainBMI() {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-8 my-16">
      <div>
        <img src={modelImage} alt="model image" />
      </div>
      <div className="px-8 my-auto">
        <h2 className="text-4xl md:text-5xl font-semibold max-w-[30rem]">
          What your BMI reasult means
        </h2>
        <p className="text-gray-400 max-w-[500px] mt-4">
          A BMI range of 18.5 to 24.9 is considered a &#39;healthy weight.&#39;
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}

// Correctly export the component
export default ExplainBMI;
