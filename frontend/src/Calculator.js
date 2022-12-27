import React from 'react';
import style from './Calculator.module.css';

const Calculator = () => {
    return (
        <div className={style.calculator}>
            <div className={style.values}>
                <div className={style.bill}>
                    <label htmlFor="bill" className='type-1'>Bill</label>
                    <input type="number" className='input' id="bill"/>
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
                <div>
                    <label htmlFor="people" className='type-1'>Number of People</label>
                    <input type="number" name="" id="people" className='input'/>
                </div>
            </div>
            <div className={style.result}>
                <div>
                    <div>
                        <p>Tip Amount</p>
                        <span>/ person</span>
                    </div>
                    <div>$ 0.00</div>
                </div>
                <div>
                    <div>
                        <p>Total</p>
                        <span>/ person</span>
                    </div>
                    <div>$ 0.00</div>
                </div>
                <button>reset</button>
            </div>
        </div>
    )
}

export default Calculator