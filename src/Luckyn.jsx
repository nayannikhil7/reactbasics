import { useState } from "react";
import { getRolls, sum } from "./utils"
import Button from "./Button";
import Dice from "./Dice"
// export default function Luckyn({ numDice = 2, goal = 7 }) {
export default function Luckyn({ numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    // const won = sum(dice) === goal;
    const won = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            {/* <h1>Lucky{goal}{won && "you won"}</h1> */}
            <h1>Lucky{won && "you won"}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>Roll</button>
            <Button click={roll} />
        </main>
    )
}