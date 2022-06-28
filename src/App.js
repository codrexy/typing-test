import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
