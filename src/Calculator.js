import { useState } from "react";
import { evaluate } from "mathjs";
import "./css/style.css";
function Calculator() {
  const [result, setResult] = useState("");
  const [hasDot, setHasDot] = useState(false);

  const checkInput = (check) => {
    if (check === "÷") return "/";
    if (check === "×") return "*";
    return check;
  };

  const clickHandler = (e) => {
    let input = checkInput(e.target.innerText);
    if (input === ".") {
      if (hasDot === true) return;
      else setHasDot(true);
    }

    if (input === "+" || input == "*" || input == "/" || input == "-") {
      setHasDot(false);
    }
    setResult(result + input);
  };

  const clearBtn = () => {
    setResult("");
  };

  const backBtn = () => {
    if (result === "") return;

    const resultStr = typeof result === "number" ? result.toString() : result;

    if (resultStr.endsWith(".")) {
      setHasDot(false);
    }

    const newResult = resultStr.slice(0, -1);
    setResult(
      newResult === "" ? "" : isNaN(newResult) ? newResult : Number(newResult)
    );
  };

  const equalBtn = () => {
    setResult(evaluate(result));
    setHasDot(false);
  };

  return (
    <div className="container">
      <div className="outPut">{result}</div>

      <div className="btns">
        <button onClick={clearBtn} className="btns__clear">
          Clear
        </button>
        <button onClick={backBtn} className="btns__backSpace">
          C
        </button>
        <button onClick={clickHandler}>÷</button>
        <button onClick={clickHandler} className="btns__num">
          7
        </button>
        <button onClick={clickHandler} className="btns__num">
          8
        </button>
        <button onClick={clickHandler} className="btns__num">
          9
        </button>
        <button onClick={clickHandler}>×</button>
        <button onClick={clickHandler} className="btns__num">
          4
        </button>
        <button onClick={clickHandler} className="btns__num">
          5
        </button>
        <button onClick={clickHandler} className="btns__num">
          6
        </button>
        <button onClick={clickHandler}>-</button>
        <button onClick={clickHandler} className="btns__num">
          1
        </button>
        <button onClick={clickHandler} className="btns__num">
          2
        </button>
        <button onClick={clickHandler} className="btns__num">
          3
        </button>
        <button onClick={clickHandler}>+</button>
        <button onClick={clickHandler} className="btns__num">
          0
        </button>
        <button onClick={clickHandler} className="btns__dot btns__num">
          .
        </button>
        <button onClick={equalBtn} className="btns__equel">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
