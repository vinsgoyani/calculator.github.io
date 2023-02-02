import React, { useState } from 'react'
import './Cala.css'

const Cala = () => {

    const [result, setResult] = useState('')

    const handleClick = (tar) => {
        setResult(result.concat(tar.target.name))
    }

    const clear = () => {
        setResult('')
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1))
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setResult('Error')
        }
    }

    return (
        <div className='body'>
            <div className='header'>
                <h1>
                    <span className="border border-info">calculator</span>
                </h1>
            </div>

            <div className='box'>
                <input type="text" id='label' placeholder='0' defaultValue={result} />
            </div>

            <div className='button-r'>

                <button onClick={clear} type="button" id='clear' className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>Clear</button>
                <button onClick={backspace} type='button' id='backspace' className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>C</button>
                <button name='*' onClick={handleClick} type="button" className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>*</button>

                <button name='7' onClick={handleClick} type="button" className="btn btn-secondary ">7</button>
                <button name='8' onClick={handleClick} type="button" className="btn btn-secondary ">8</button>
                <button name='9' onClick={handleClick} type="button" className="btn btn-secondary ">9</button>
                <button name='/' onClick={handleClick} type="button" className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>/</button>

                <button name='4' onClick={handleClick} type="button" className="btn btn-secondary ">4</button>
                <button name='5' onClick={handleClick} type="button" className="btn btn-secondary ">5</button>
                <button name='6' onClick={handleClick} type="button" className="btn btn-secondary ">6</button>
                <button name='-' onClick={handleClick} type="button" className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>-</button>

                <button name='1' onClick={handleClick} type="button" className="btn btn-secondary ">1</button>
                <button name='2' onClick={handleClick} type="button" className="btn btn-secondary ">2</button>
                <button name='3' onClick={handleClick} type="button" className="btn btn-secondary ">3</button>
                <button name='+' onClick={handleClick} type="button" className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>+</button>

                <button name='0' onClick={handleClick} type="button" className="btn btn-secondary ">0</button>
                <button name='.' onClick={handleClick} type="button" className="btn btn-secondary ">.</button>
                <button name='=' onClick={calculate} type="button" id='result' className="btn btn-secondary " style={{ backgroundColor: '#6bfac5' }}>=</button>

            </div>
        </div>
    );
};

export default Cala;