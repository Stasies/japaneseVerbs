import { paste } from "@testing-library/user-event/dist/paste";
import React, { useEffect, useRef, useState } from "react";

const Conjugation = ({ verbs }) => {
  const grammar = [
    {
      id: 1,
      title: "present",
      polite: "ます",
      regular: "る",
      negativePolite: "ません",
      negativeRegular: "ない",
    },
    {
      id: 2,
      title: "past",
      polite: "ました",
      regular: "た",
      negativePolite: "ませんでした",
      negativeRegular: "なかった",
    },
    {
      id: 3,
      title: "volitional",
      polite: "ましょう",
      regular: "う",
      negativePolite: "ないでしょう",
      negativeRegular: "ないだろう",
    },
    {
      id: 4,
      title: "imperative",
      polite: "てください",
      regular: "",
      negativePolite: "ないでください",
      negativeRegular: "な",
    },
    {
      id: 5,
      title: "conditional",
      polite: "ましたら",
      regular: "たら",
      negativePolite: "ませんでしたら",
      negativeRegular: "なかったら",
    },
    {
      id: 6,
      title: "potential",
      polite: "ます",
      regular: "る",
      negativePolite: "ません",
      negativeRegular: "ない",
    },
    {
      id: 7,
      title: "passive",
      polite: "られます",
      regular: "られる",
      negativePolite: "られません",
      negativeRegular: "られない",
    },
  ];
  let polite = useRef();
  let regular = useRef();
  let negativePolite = useRef();
  let negativeRegular = useRef();
  const [stem, setStem] = useState("");
  const [negStem, setNegStem] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [tForm, setTForm] = useState("");
  let verb = verbs.Japanese;

  console.log(window.location.pathname.substring(1));
  useEffect(() => {
    const getStem = () => {
      setStem(verb.slice(0, -1));
      if (verb.charAt(verb.length - 1) === "る") {
        setFirst(stem + "ら");
        setSecond(stem + "り");
        // setThird(stem + "ろ");
        setFourth(stem + "れ");
        setFifth(stem + "ろ");
        setTForm(stem + "っ");
      } else if (verb.charAt(verb.length - 1) === "む") {
        setFirst(stem + "ま");
        setSecond(stem + "み");
        // setThird(stem + "ろ");
        setFourth(stem + "め");
        setFifth(stem + "も");
        setTForm(stem + "ん");
      } else if (verb.charAt(verb.length - 1) === "く") {
        setFirst(stem + "か");
        setSecond(stem + "き");
        // setThird(stem + "ろ");
        setFourth(stem + "け");
        setFifth(stem + "こ");
        setTForm(stem + "い");
      } else if (verb.charAt(verb.length - 1) === "す") {
        setFirst(stem + "さ");
        setSecond(stem + "し");
        // setThird(stem + "ろ");
        setFourth(stem + "せ");
        setFifth(stem + "そ");
        setTForm(stem + "し");
      } else if (verb.charAt(verb.length - 1) === "ぬ") {
        setFirst(stem + "な");
        setSecond(stem + "に");
        // setThird(stem + "ろ");
        setFourth(stem + "ね");
        setFifth(stem + "の");
        setTForm(stem + "ん");
      } else if (verb.charAt(verb.length - 1) === "ふ") {
        setFirst(stem + "は");
        setSecond(stem + "ひ");
        // setThird(stem + "ろ");
        setFourth(stem + "へ");
        setFifth(stem + "ほ");
        setTForm(stem + "ん");
      } else if (verb.charAt(verb.length - 1) === "つ") {
        setFirst(stem + "た");
        setSecond(stem + "ち");
        // setThird(stem + "ろ");
        setFourth(stem + "て");
        setFifth(stem + "と");
        setTForm(stem + "っ");
      } else if (verb.charAt(verb.length - 1) === "う") {
        setFirst(stem + "わ");
        setSecond(stem + "い");
        // setThird(stem + "ろ");
        setFourth(stem + "え");
        setFifth(stem + "お");
        setTForm(stem + "っ");
      }
    };
    getStem();
  }, [verb, first, second, third, fourth, fifth, stem]);
  console.log(stem, first, second, fourth, fifth);
  return (
    <div className="container">
      <table>
        <tr>
          <td>Verb:</td>
          <td>{verb}</td>
        </tr>
        <tr>
          <td>Hiragana</td>
          <td>{verbs.Hiragana}</td>
        </tr>
        <tr>
          <td>Class</td>
          <td>{verbs.class}</td>
        </tr>
        <tr>
          <td>T-form</td>
          <td>{tForm}て</td>
        </tr>
      </table>
      <table>
        <tr>
          <td>tense</td>
          <td>type</td>
          <td>+</td>
          <td>-</td>
        </tr>
        {grammar.map((g, index) => (
          <tr key={index}>
            <td>{g.title}</td>
            <td>
              <tr className="odd">
                <td>plain</td>
              </tr>
              <tr className="even">
                <td>polite</td>
              </tr>
            </td>
            <td>
              <tr>
                <td ref={regular}>
                  {g.title === "past" || g.title === "conditional"
                    ? tForm
                    : g.title === "present"
                    ? stem
                    : g.title === "imperative" || g.title === "potential"
                    ? fourth
                    : g.title === "volitional"
                    ? fifth
                    : first}
                  {g.regular}
                </td>
              </tr>
              <tr>
                <td ref={polite}>
                  {g.title === "imperative"
                    ? tForm
                    : g.title === "passive"
                    ? first
                    : second}
                  {g.polite}
                </td>
              </tr>
            </td>
            <td>
              <tr>
                <td ref={negativeRegular}>
                  {g.title === "potential"
                    ? fourth
                    : g.title === "imperative"
                    ? verb
                    : first}
                  {g.negativeRegular}
                </td>
              </tr>
              <tr>
                <td ref={negativePolite}>
                  {g.title === "present" ||
                  g.title === "past" ||
                  g.title === "conditional"
                    ? second
                    : g.title === "potential"
                    ? fourth
                    : first}
                  {g.negativePolite}
                </td>
              </tr>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Conjugation;
