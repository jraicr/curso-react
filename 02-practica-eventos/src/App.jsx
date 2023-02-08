
import './App.css'
import marioPic from './assets/images/mario.png'
import yoshiPic from './assets/images/yoshi.png'

import { useRef } from 'react';

function App() {
  const refContainer = useRef();
  const refImg = useRef();
  const conversionRate = 23.16;

  const convert = () => {
    refContainer.current.innerText = Number(refContainer.current.innerText) * conversionRate;
  }

  const incrementValue = (e) => {

    e.target.innerText =  Number(e.target.innerText) + 1;

    let newValue = Number(e.target.innerText);
    
    if (newValue == 8) {
      changeBgColor("red");

    } else if (newValue >= 10) {
      changeBgColor("white");
      e.target.innerText = 1;
    }
  }

  const changeBgColor = (color) => {
    refContainer.current.style.backgroundColor = color;
  }

  const changePic = (e) => {
    if (getCurrentPic().includes(marioPic)) {
      e.target.src = yoshiPic;

    } else {
      e.target.src = marioPic;
    }
  }

  const readValue = (e) => {
    refContainer.current.innerText = e.target.value;
  }

  /**
   * 
   * @returns {string} cadena
   */
  const getCurrentPic = () => {
    return refImg.current.src;
  }

  return (
    <>
      <div ref={refContainer} className="container" onClick={incrementValue}>1</div>
      <button onClick={convert}>Aceptar</button>
      <div><img ref={refImg} onClick={changePic} src={marioPic} /></div>
      <input onChange={readValue} className='input-field' />
    </>

  )
}

export default App
