import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from "./Die"
import Dice from "./Dice";
import { sum } from "./utils"
import Luckyn from "./Luckyn"
function lessThan4(dice) {
  return sum(dice) < 4;
}
function App() {

  return (
    <>
      {/* <Die val={2} /> */}
      {/* <Dice dice={[3, 6, 1]} color="purple" /> */}
      {/* <Luckyn /> */}
      <Luckyn winCheck={lessThan4} />
    </>
  )
}

export default App
