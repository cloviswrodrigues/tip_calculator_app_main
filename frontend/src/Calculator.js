import React from 'react';

const Calculator = () => {
    return (
        <div>
            <div>
                <div>
                    <label htmlFor="">Bill</label>
                    <input type="number" />
                </div>
                <div>
                    <p>Select Tip %</p>
                    <div>
                        <button>5%</button>
                        <button>10%</button>
                        <button>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <input type="number" name="" id="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Number of People</label>
                    <input type="number" name="" id="" />
                </div>
            </div>
            <div>
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