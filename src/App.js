import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toyota from "./Toyota";
import Cars from "./Cars";
import Header from "./Header";
import Header1 from "./Header/test";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toyota />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/header" element={<Header />} />
          <Route path="/header2" element={<Header1></Header1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
