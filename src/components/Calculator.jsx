
import { useState } from 'react'
import './Calculator.css'

function Calculator() {

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");

    const handleNumber1 = (e) => {
        setNumber1(Number(e.target.value));
        setResult("");
    }

    const handleNumber2 = (e) => {
        setNumber2(Number(e.target.value));
        setResult("");
    }

    const handleAddition = () => {
        setResult(number1 + number2);
        setNumber1("");
        setNumber2("");
    }


    return (
        <div className="calculator-container">
            <h1>useState</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="number1" className="form-label">Number1</label>
                    <input type="number" className="form-input" placeholder='0' id="number1" value={number1} onChange={handleNumber1} />
                </div>
                <div className="form-group">
                    <label htmlFor="number2" className="form-label">Number2</label>
                    <input type="number" className="form-input" placeholder='0' id="number2" value={number2} onChange={handleNumber2} />
                </div>
                <button onClick={handleAddition} type='button' className="form-button">Add</button>
                <div className="form-group">
                    <label htmlFor="result" className="form-label">Result</label>
                    <input type="number" className="form-input" placeholder='0' id="result" value={Number(result)} readOnly />
                </div>
            </form>
        </div>
    )
}

export default Calculator