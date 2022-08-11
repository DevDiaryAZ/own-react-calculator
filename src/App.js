import './App.css';
import {useState} from "react";

function App() {
    const [previousValue, setPreviousValue] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [currentSign, setCurrentSign] = useState('');
    const [result, setResult] = useState('');
    const [isFloat, setIsFloat] = useState(false)

    console.log('previousValue=' + previousValue)
    console.log('currentValue=' + currentValue)
    console.log('currentSign=' + currentSign)
    console.log('result=' + result)
    console.log('isFloat=' + isFloat)

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const signs = ["+", "-", "/", "*"]

    const buttonClickHandler = (e) => {

        if (numbers.findIndex(el => el === Number(e.currentTarget.value)) !== -1) {
            if (result !== '') {
                setResult('')
            }
            let newValue
            if (!isFloat) {
                newValue = currentValue + e.currentTarget.value
                setCurrentValue(newValue)
            } else {
                if (currentValue === '.') {
                    newValue = '0.' + e.currentTarget.value
                } else {
                    if (currentValue.indexOf('.') === -1) {
                        newValue = currentValue + '.' + e.currentTarget.value
                    } else {
                        newValue = currentValue + e.currentTarget.value
                    }
                }
                setCurrentValue(newValue)
            }

        } else if (signs.findIndex(el => el === e.currentTarget.value) !== -1) {
            if(currentValue !== '.') {
                if (result) {
                    setPreviousValue(result)
                    setResult('')
                    setCurrentSign(e.currentTarget.value)
                }
                if (currentValue && !previousValue) {
                    setCurrentSign(e.currentTarget.value)
                    setPreviousValue(currentValue)
                    setCurrentValue('')
                    setIsFloat(false)
                }
                if (currentValue && previousValue) {
                    equallyClickHandler()
                }
            }
        } else if (e.currentTarget.value === ".") {
            if(!isFloat){
                let newValue
                if (currentValue) {
                    if (currentValue.indexOf('.') === -1 ) {
                        newValue = currentValue + '.'
                    } else {
                        newValue = currentValue
                    }
                } else {
                    newValue = '.'
                }
                setIsFloat(true)
                setCurrentValue(newValue)
            }
        }
    }

    const equallyClickHandler = () => {
        let newResult
        switch (currentSign) {
            case "+":
                newResult = parseFloat(previousValue) + parseFloat(currentValue)
                setResult(newResult.toFixed(9).replace(/0*$/,"").replace(/\.*$/,""))
                break
            case "-":
                newResult = parseFloat(previousValue) - parseFloat(currentValue)
                setResult(newResult.toFixed(9).replace(/0*$/,"").replace(/\.*$/,""))
                break
            case "/":
                newResult = parseFloat(previousValue) / parseFloat(currentValue)
                setResult(newResult.toFixed(9).replace(/0*$/,"").replace(/\.*$/,""))
                break
            case "*":
                newResult = parseFloat(previousValue) * parseFloat(currentValue)
                setResult(newResult.toFixed(9).replace(/0*$/,"").replace(/\.*$/,""))
                break
            default:
                break
        }
        if (currentValue && previousValue && currentSign) {
            setPreviousValue('')
            setCurrentValue('')
            setCurrentSign('')
            setIsFloat(false)
        }
    }

    const resetValuesHandler = () => {
        setPreviousValue('')
        setCurrentValue('')
        setCurrentSign('')
        setResult('')
        setIsFloat(false)
    }

    const deleteLastSymbolHandler = () => {
        let newCurrentValue = (currentValue.slice(0, -1))
        setCurrentValue(newCurrentValue)
    }


    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousValue ? previousValue : ''}{currentSign}</div>
                <div className="current-operand">{currentValue ? currentValue : ''}</div>
                <div className="current-operand">{result !== "" ? result : ''}</div>
            </div>
            <button onClick={resetValuesHandler} className="span-two">AC</button>
            <button onClick={deleteLastSymbolHandler}>DEL</button>
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
