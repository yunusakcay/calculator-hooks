import { useRef } from 'react'
import './Calculator.css'

function CalculatorUseRef() {

  const number1Ref = useRef();
  const number2Ref = useRef();
  const resultRef = useRef();

  const handleAddition = () => {
    const num1 = Number(number1Ref.current.value);
    const num2 = Number(number2Ref.current.value);
    resultRef.current.value = num1 + num2;
    number1Ref.current.value = "";
    number2Ref.current.value = "";
  }

  const handleNumberChange = () => {
    resultRef.current.value = "";
  }

  return (
    <div className="calculator-container">
      <h1>useRef</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="number1" className="form-label">Number1</label>
          <input type="number" className="form-input" placeholder='0' id="number1" ref={number1Ref} onChange={handleNumberChange} />
        </div>
        <div className="form-group">
          <label htmlFor="number2" className="form-label">Number2</label>
          <input type="number" className="form-input" placeholder='0' id="number2" ref={number2Ref} onChange={handleNumberChange} />
        </div>
        <button onClick={handleAddition} type='button' className="form-button">Add</button>
        <div className="form-group">
          <label htmlFor="result" className="form-label">Result</label>
          <input type="number" className="form-input" placeholder='0' id="result" ref={resultRef} />
        </div>
      </form>
    </div>)
}

export default CalculatorUseRef