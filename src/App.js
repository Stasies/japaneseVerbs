import Conjugation from "./Conjugation";
import Home from "./Home";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { verbs } from "./data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path=":verb" element={<Conjugation verb={verbs} />} /> */}
        {verbs.map((verb, index) => (
          <Route
            key={index}
            path={`/${verb.Romanization}`}
            element={<Conjugation verbs={verb} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
