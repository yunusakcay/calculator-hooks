
import './App.css'
import Calculator from './components/Calculator'
import CalculatorUseReducer from './components/CalculatorUseReducer'
import CalculatorUseRef from './components/CalculatorUseRef'

function App() {

  return (
    <div className='App'>
      <CalculatorUseRef />
      <Calculator />
      <CalculatorUseReducer />
    </div>
  )
}

export default App
