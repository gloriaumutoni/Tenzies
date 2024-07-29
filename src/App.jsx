import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [counter,setCounter]=useState(handleClick())

  function handleClick(){
    let dice=[]
    for(let i=0;i<10;i++){
      dice.push({value:Math.ceil(Math.random()*6),isHeld:false,id:nanoid()})
    }
    return dice
  }
  function newDice(){
    setCounter(handleClick())
  }
let num=counter.map(dice=><button className="px-6 py-4 rounded-md text-xl font-medium bg-white mx-2 shadow-sm my-2" value={dice.value} key={dice.id}/>)

  return (
    <div className="grid h-screen w-screen">
      <div className="bg-[#0B2434] rounded-md w-[40%] h-[70%] mx-auto ">
        <div className="bg-gray-300 rounded-md w-[85%] h-[80%]  mx-auto mt-14 grid grid-rows-3 justify-end">
          <div className="text-center">
            <h2 className="mt-4 font-bold text-2xl">Tenzies</h2>
            <p className="ml-28 w-[56%]">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className=" grid grid-cols-5 ">
            {num}
          </div>
          <div className="mt-10 ">
          <button className="bg-blue-600 px-8 py-2 text-white rounded-sm ml-52" onClick={newDice}>Roll</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
