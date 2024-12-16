import { Calculator } from "./Calculator";
function Header() {
  return (
    <div className="relative h-[90vh]">
      <div className=" sm:ml-4 w-full flex flex-col md:flex-row gap-8 items-center px-[2rem]">
        <div className="absolute gradientBG w-[100%] sm:w-[70%] h-[80vh] top-0 left-0 z-[-1] rounded-b-[2rem]"></div>
        <div className="sm:pt-10 pt-10 sm:pl-10 w-[100%] basis-1/2">
          <svg
            fill="#B3D3F6"
            // width="50px"
            // height="50px"
            className="mx-auto sm:mx-0 w-[70px] h-[70px]"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M128 220c-50.81 0-92-41.19-92-92s41.19-92 92-92 92 41.19 92 92-41.19 92-92 92zm-.5-139.23c27.094 0 36.41 18.143 43.998 31.187 10.798 18.56 11.931 31.154 35.889 40.868C210 140.22 210 141.57 210 127.5c0-45.563-36.937-82.5-82.5-82.5S45 81.937 45 127.5c0 11.61-1.603 13.593 2.549 25.325 20.955-6.887 30.758-29.192 34.67-39.144 5.526-14.056 18.187-32.91 45.281-32.91zm.5 24.615c-17.128 0-31.173 32.022-34.929 39.68-3.756 7.659-16.584 25.445-34.306 29.902 14.782 22.217 40.049 36.858 68.735 36.858 28.448 0 53.532-14.398 68.364-36.305-14.832-10.778-22.641-15.315-33.531-30.455-8.994-12.504-17.205-39.68-34.333-39.68z" />
          </svg>
          <h1 className="text-5xl md:text-7xl text-center sm:text-left mt-8 sm:mt-[7rem] font-semibold text-gray-800">
            Body Mass <br />
            Index Calculator
          </h1>
          <p className="max-w-[28rem] mt-6 text-center mx-auto sm:text-left sm:mx-0 text-gray-400">
            Better understand your weight in relation to your height using our
            body mass index (BMI) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default Header;
