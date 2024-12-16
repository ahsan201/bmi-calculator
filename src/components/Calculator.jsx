/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function Calculator() {
  const [calculationType, setCalculationType] = useState("metric");
  const [cmInput, setCmInput] = useState("");
  const [kgInput, setKgInput] = useState("");
  const [showReasult, setShowReasult] = useState(false);
  const [reasult, setReasult] = useState(0);

  function handleCalculatorType(e) {
    setCalculationType(e.target.value);
  }

  // Automatically calculate BMI whenever input changes
  useEffect(() => {
    if (calculationType && cmInput && kgInput) {
      setShowReasult(true);
      if (calculationType === "metric") {
        const finalReasult = ((kgInput / cmInput ** 2) * 10000).toFixed(1);
        setReasult(finalReasult);
      } else if (calculationType === "imperial") {
        const finalReasult = ((kgInput * 703) / cmInput ** 2).toFixed(1);
        setReasult(finalReasult);
      }
    } else {
      setShowReasult(false);
    }
  }, [calculationType, cmInput, kgInput]); // Dependencies to trigger the calculation

  return (
    <div className="shadow max-w-[400px] min-w-[200px] bg-white rounded-xl mx-auto basis-1/2 p-4 md:mb-[-10rem] md:ml-[10%]">
      <h3 className="text-3xl font-semibold">Enter your details below</h3>
      <form action="#">
        <div className="flex flex-row gap-[4rem] text-2xl my-4">
          <div>
            <input
              className="mr-2"
              type="radio"
              name="type"
              value="metric"
              checked={calculationType === "metric"}
              onChange={handleCalculatorType}
            />
            <label htmlFor="metric">Metric</label>
          </div>
          <div>
            <input
              className="mr-2"
              type="radio"
              name="type"
              value="imperial"
              checked={calculationType === "imperial"}
              onChange={handleCalculatorType}
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
        </div>

        <label htmlFor="height" className="text-gray-400 text-sm">
          Height
        </label>
        <div className="flex flex-row p-2 border rounded-md mb-4 ">
          <input
            className="w-full text-2xl"
            type="number"
            name="height"
            placeholder="0"
            value={cmInput}
            onChange={(e) => setCmInput(e.target.value)}
          />
          <span className="text-blue-500 text-2xl font-semibold">
            {calculationType === "imperial" ? "IN" : "CM"}
          </span>
        </div>
        <label htmlFor="weight" className="text-gray-400 text-sm">
          Weight
        </label>
        <div className="flex flex-row p-2 border rounded-md">
          <input
            className="w-full text-2xl"
            type="number"
            name="weight"
            placeholder="0"
            value={kgInput}
            onChange={(e) => setKgInput(e.target.value)}
          />
          <span className="text-blue-500 text-2xl font-semibold">
            {calculationType === "imperial" ? "lbs" : "KG"}
          </span>
        </div>
      </form>
      <div className="p-4 bg-blue-500 mt-6 text-white reasult-bubble">
        {showReasult ? <Reasult reasult={reasult} /> : <WelcomeMessage />}
      </div>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <>
      <p className="text-xl">Welcome!</p>
      <p>
        Enter your height and weight and you&#39;ll see your BMI result here
      </p>
    </>
  );
}

function Reasult({ reasult }) {
  return (
    <div className="flex flex-row gap-4 align-items-center">
      <div className="my-auto">
        <p className="whitespace-nowrap text-xs">Your BMI is...</p>
        <span className="text-5xl font-semibold">{reasult}</span>
      </div>
      <p className="text-xs max-h-min my-auto">
        Your BMI suggests you&#39;re a healthy weight. Your ideal weight is
        between <span>63.3kgs - 85.2kgs.</span>
      </p>
    </div>
  );
}
