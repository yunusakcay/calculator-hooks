import { useReducer } from 'react'
import './Calculator.css'
import { reducer, initialState } from '../reducers/reducerCalculator'


function CalculatorUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNumber1 = (e) => {
        dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
        dispatch({ type: "SET_RESULT", payload: "" })
    }

    const handleNumber2 = (e) => {
        dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
        dispatch({ type: "SET_RESULT", payload: "" })
    }

    const handleAddition = () => {
        dispatch({ type: "SET_RESULT", payload: (state.number1 + state.number2) });
        dispatch({ type: "SET_NUMBER1", payload: "" })
        dispatch({ type: "SET_NUMBER2", payload: "" })
    }

    return (
        <div className="calculator-container">
            <h1>useReducer</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="number1" className="form-label">Number-1</label>
                    <input type="number" className="form-input" placeholder='0' id="number1" onChange={handleNumber1} value={state.number1} />
                </div>
                <div className="form-group">
                    <label htmlFor="number2" className="form-label">Number-2</label>
                    <input type="number" className="form-input" placeholder='0' id="number2" onChange={handleNumber2} value={state.number2} />
                </div>
                <button onClick={handleAddition} type='button' className="form-button">Add</button>
                <div className="form-group">
                    <label htmlFor="result" className="form-label">Result</label>
                    <input type="number" className="form-input" placeholder='0' id="result" value={state.result} readOnly />
                </div>
            </form>
        </div>
    )
}

export default CalculatorUseReducer