import React, { useEffect, useRef, useState } from "react";
import { verbs } from "./data";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Home = () => {
  const [filtered, setFiltered] = useState(verbs);
  const [inputValue, setInputValue] = useState("");
  const input = useRef();
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   setFiltered(
  //     verbs.filter((f) => f.Romanization.includes(inputValue.current.value))
  //   );
  //   console.log(input?.current.value);
  // }, [inputValue]);

  const getFiltered = (e) => {
    setInputValue(e);
    console.log(inputValue);
    setFiltered(
      verbs.filter(
        (f) =>
          f.Romanization.includes(input.current.value) ||
          f.Translation.includes(input.current.value)
      )
    );
  };
  const goUp = () => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  };

  const getHistory = (e) => {
    history.push();
    window.localStorage.setItem("search", history);
    console.log(history);
  };
  return (
    <div className="main-container container">
      <div className="go-up">
        <ArrowCircleUpIcon
          onClick={goUp}
          style={{ transform: "scale(1.5)", color: "grey" }}
        />
      </div>
      <h1>Conjugation of Japanese Verbs</h1>
      <div className="input-container">
        <SearchIcon />
        <input
          placeholder="Search..."
          type="text"
          ref={input}
          onChange={(e) => getFiltered(e.target.value)}
        />
      </div>
      <div className="verb-table">
        <table>
          <thead>
            <tr className="verb-table-title">
              <td>Japanese</td>
              <td>Hiragana</td>
              <td>Romaji</td>
              <td>Translation</td>
              <td>Class</td>
              <td>Conjugate</td>
            </tr>
          </thead>

          {filtered?.map((v, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <p>{v.Japanese}</p>
                </td>
                <td>
                  <p>{v.Hiragana}</p>
                </td>
                <td>
                  <p>{v.Romanization}</p>
                </td>
                <td>
                  <p maxLength="20">{v.Translation}</p>
                </td>
                <td>
                  <p>{v.class}</p>
                </td>
                <td>
                  <p>
                    <a
                      href={`/${v.Romanization}`}
                      value={v}
                      onClick={(e) => getHistory(e.target.value)}
                    >
                      Conjugate
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Home;
