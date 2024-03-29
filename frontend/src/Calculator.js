import React from "react";
import style from "./Calculator.module.css";
import { currencyMask } from "./helper";

const Calculator = () => {
  const [bill, setBill] = React.useState("");
  const [tip, setTip] = React.useState("");
  const [tipCustom, setTipCustom] = React.useState("");
  const [person, setPerson] = React.useState("");
  const [tipAmountPerson, setTipAmountPerson] = React.useState(0);
  const [totalPerson, setTotalPerson] = React.useState(0);
  const refCustomTip = React.useRef();
  const [cantBeZero, setCantBeZero] = React.useState(false);
  const [resetEnable, setResetEnable] = React.useState(false);

  function handleInputBill(event) {
    let value = currencyMask(event.target.value);
    setBill(value);
  }

  function selectTip(event) {
    let element = event.target;
    let tip = Number(element.dataset.percent);
    setTip(tip);
    setTipCustom("");
  }

  function handleInputTipCustom(event) {
    let tipCustom = Number(event.target.value);
    let LIMIT_TIP_CUSTOM = 100;
    if (!isNaN(tipCustom) && tipCustom <= LIMIT_TIP_CUSTOM) {
      setTipCustom(tipCustom);
      setTip(0);
    }
  }

  function handleInputPerson(event) {
    let value = Number(event.target.value);

    if (!isNaN(value)) {
      setPerson(value);

      if (value === 0) {
        setCantBeZero(true);
        return;
      }
      setCantBeZero(false);
    }
  }

  function handleReset(event) {
    if (resetEnable) {
      setBill("");
      setTip("");
      setTipCustom("");
      setPerson("");
      setCantBeZero(false);
      setTipAmountPerson(0);
      setTotalPerson(0);
      setResetEnable(false);
    }
  }

  React.useEffect(() => {
    let dependecies = [bill, tip, tipCustom, person];
    if (
      dependecies.find((element) => {
        return element != "";
      })
    ) {
      setResetEnable(true);
    }

    if (person > 0) {
      let tipCurrent =
        tipCustom > 0 && Number.isInteger(tipCustom) ? tipCustom : tip;
      let billNumber = Number(bill.replaceAll(",", ""));
      let tipCalc = (billNumber * tipCurrent) / 100;

      let totalPerson = (billNumber + tipCalc) / person;
      totalPerson = totalPerson;

      let tipAmountPerson = tipCalc / person;
      tipAmountPerson = tipAmountPerson;

      if (!isNaN(tipAmountPerson)) setTipAmountPerson(tipAmountPerson);
      if (!isNaN(totalPerson)) setTotalPerson(totalPerson);
    }
  }, [bill, tip, tipCustom, person]);

  return (
    <div className={style.calculator}>
      <div className={style.values}>
        <div className={style.bill}>
          <label htmlFor="bill" className="type-1">
            Bill
          </label>
          <div className="input-coin">
            <input
              type="text"
              className="input"
              placeholder="0"
              id="bill"
              value={bill}
              onChange={handleInputBill}
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
              onClick={selectTip}
            >
              5%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 10 ? style.buttonActive : ""
              }`}
              data-percent="10"
              onClick={selectTip}
            >
              10%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 15 ? style.buttonActive : ""
              }`}
              data-percent="15"
              onClick={selectTip}
            >
              15%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 25 ? style.buttonActive : ""
              }`}
              data-percent="25"
              onClick={selectTip}
            >
              25%
            </button>
            <button
              className={`${style.buttonFixed} ${
                tip === 50 ? style.buttonActive : ""
              }`}
              data-percent="50"
              onClick={selectTip}
            >
              50%
            </button>
            <input
              type="text"
              name=""
              id="customtip"
              className={`input ${style.inputCustomTip}`}
              value={tipCustom}
              onChange={handleInputTipCustom}
              placeholder="Custom"
              ref={refCustomTip}
            />
          </div>
        </div>
        <div className={style.numberPerson}>
          <label htmlFor="person" className="type-1">
            Number of People
          </label>
          {cantBeZero && <span className={style.error}>Can't be zero</span>}
          <div className="input-person">
            <input
              type="text"
              name=""
              id="person"
              className={`input ${cantBeZero ? "input-error" : ""}`}
              placeholder="0"
              value={person}
              onChange={handleInputPerson}
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
            <div className={style.value}>${tipAmountPerson.toFixed(2)}</div>
          </div>
          <div className={style.row}>
            <div className={style.description}>
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div className={style.value}>${totalPerson.toFixed(2)}</div>
          </div>
        </div>
        <button
          onClick={handleReset}
          className={resetEnable ? null : style.resetDisabled}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Calculator;
