import React from "react";
import style from "./Calculator.module.css";

const Calculator = () => {
  const [bill, setBill] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const [person, setPerson] = React.useState(0);

  function buttonActive(event) {
    let element = event.target;
    let tip = Number(element.dataset.percent);
    setTip(tip);
    console.log("tip: ", tip);
  }

  return (
    <div className={style.calculator}>
      <div className={style.values}>
        <div className={style.bill}>
          <label htmlFor="bill" className="type-1">
            Bill
          </label>
          <div className="input-coin">
            <input
              type="number"
              className="input"
              id="bill"
              value={bill}
              onChange={(event) => setBill(event.target.value)}
            />
          </div>
        </div>
        <div className={style.tip}>
          <p className="type-1">Select Tip %</p>
          <div className={style.buttons}>
            <button
              className={`${style.buttonFixed} ${
                tip === 5 ? style.buttonActive : ""
              }`}
              data-percent="5"
              onClick={buttonActive}
            >
              5%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 10 ? style.buttonActive : ""
              }`}
              data-percent="10"
              onClick={buttonActive}
            >
              10%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 15 ? style.buttonActive : ""
              }`}
              data-percent="15"
              onClick={buttonActive}
            >
              15%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 25 ? style.buttonActive : ""
              }`}
              data-percent="25"
              onClick={buttonActive}
            >
              25%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 50 ? style.buttonActive : ""
              }`}
              data-percent="50"
              onClick={buttonActive}
            >
              50%
            </button>
            <button className={style.buttonCustom}>Custom</button>
          </div>
        </div>
        <div className={style.numberPerson}>
          <label htmlFor="person" className="type-1">
            Number of People
          </label>
          <span className={style.error}>Can't be zero</span>
          <div className="input-person">
            <input
              type="number"
              name=""
              id="person"
              className="input"
              value={person}
              onChange={(event) => setPerson(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={style.result}>
        <div className={style.wrapper}>
          <div className={style.row}>
            <div className={style.description}>
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <div className={style.value}>$4.27</div>
          </div>
          <div className={style.row}>
            <div className={style.description}>
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div className={style.value}>$0.00</div>
          </div>
        </div>
        <button>reset</button>
      </div>
    </div>
  );
};

export default Calculator;
