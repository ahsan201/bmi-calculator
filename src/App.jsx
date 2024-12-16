import "./App.css";
import Header from "./components/Header";
import ExplainBMI from "./components/ExplainBMI";
import Advice from "./components/Advice";
import Limitation from "./components/Limitation";
function App() {
  return (
    <>
      <Header />
      <ExplainBMI />
      <Advice />
      <Limitation />
    </>
  );
}

export default App;
