import React from 'react';
import style from './Calculator.module.css';

const Calculator = () => {
    return (
        <div className={style.calculator}>
            <div className={style.values}>
                <div className={style.bill}>
                    <label htmlFor="bill" className='type-1'>Bill</label>
                    <div className='input-coin'>
                        <input type="number" className='input' id="bill"/>
                    </div>
                </div>
                <div className={style.tip}>
                    <p className='type-1'>Select Tip %</p>
                    <div className={style.buttons}>
                        <button className={style.buttonFixed}>5%</button>
                        <button className={style.buttonFixed}>10%</button>
                        <button className={style.buttonFixed}>15%</button>
                        <button className={style.buttonFixed}>25%</button>
                        <button className={style.buttonFixed}>50%</button>
                        <button className={style.buttonCustom}>Custom</button>
                    </div>
                </div>
                <div className={style.numberPerson}>
                    <label htmlFor="person" className='type-1'>Number of People</label>
                    <span className={style.error}>Can't be zero</span>
                    <div className='input-person'>
                        <input type="number" name="" id="person" className='input'/>
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
    )
}

export default Calculator