import './App.css';
import {useState} from "react";

function App() {
    const [previousValue, setPreviousValue] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);
    const [currentSign, setCurrentSign] = useState("");
    const [result, setResult] = useState(null);

    console.log('previousValue=' + previousValue )
    console.log('currentValue=' + currentValue )
    console.log('currentSign=' + currentSign )
    console.log('result=' + result )

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const signs = ["+", "-", "/", "*"]
    const buttonClickHandler = (e) => {
        if (numbers.findIndex(el => el === Number(e.currentTarget.value)) !== -1) {
            let newValue = currentValue + e.currentTarget.value
            newValue = parseInt(newValue, 10)
            setCurrentValue(newValue)
        } else if (signs.findIndex(el => el === e.currentTarget.value) !== -1) {
            setCurrentSign(e.currentTarget.value)
            setPreviousValue(Number(currentValue))
            setCurrentValue(null)
        }
    }

    const equallyClickHandler = () => {
        let newResult
        switch (currentSign) {
            case "+":
                newResult = currentValue + previousValue
                setResult(newResult)
                break
            case "-":
                newResult = currentValue - previousValue
                setResult(newResult)
                break
            case "/":
                newResult = currentValue / previousValue
                setResult(newResult)
                break
            case "*":
                newResult = currentValue * previousValue
                setResult(newResult)
                break
            default:
                break
        }
        setPreviousValue(null)
        setCurrentValue(null)
        setCurrentSign('')
    }

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand"></div>
                <div className="current-operand">{currentValue}{currentSign}{result ? result : ''}</div>
                <div className="current-operand">{result ? result : ''}</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <button onClick={buttonClickHandler} value="/">/</button>
            <button onClick={buttonClickHandler} value="1">1</button>
            <button onClick={buttonClickHandler} value="2">2</button>
            <button onClick={buttonClickHandler} value="3">3</button>
            <button onClick={buttonClickHandler} value="*">*</button>
            <button onClick={buttonClickHandler} value="4">4</button>
            <button onClick={buttonClickHandler} value="5">5</button>
            <button onClick={buttonClickHandler} value="6">6</button>
            <button onClick={buttonClickHandler} value="+">+</button>
            <button onClick={buttonClickHandler} value="7">7</button>
            <button onClick={buttonClickHandler} value="8">8</button>
            <button onClick={buttonClickHandler} value="9">9</button>
            <button onClick={buttonClickHandler} value="-">-</button>
            <button onClick={buttonClickHandler} value=".">.</button>
            <button onClick={buttonClickHandler} value="0">0</button>
            <button onClick={equallyClickHandler} className="span-two" value="=">=</button>

        </div>

    );
}

export default App;
