import { useState } from "react";

function App() {
  const [counter,setCounter]=useState([])
  const [fixedNum,setFixedNum]=useState(counter)

  function handleClick(){
    let dice=[]
    for(let i=0;i<10;i++){
      dice.push(Math.ceil(Math.random()*6))
    }
    setCounter(dice)
  }

 function setColor(){

 }

  return (
    <div className="grid h-screen w-screen">
      <div className="bg-[#0B2434] rounded-md w-[40%] h-[70%] mx-auto ">
        <div className="bg-gray-300 rounded-md w-[85%] h-[80%]  mx-auto mt-14 grid grid-rows-3 justify-end">
          <div className="text-center">
            <h2 className="mt-4 font-bold text-2xl">Tenzies</h2>
            <p className="ml-28 w-[56%]">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className="ml-8 grid grid-rows-2">
            <div className="flex gap-10">
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[0]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[1]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[2]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[3]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[4]}</button>
            </div>

            <div className="flex gap-10">
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[5]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[6]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[7]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[8]}</button>
              <button className="px-6 py-4 rounded-md text-xl font-medium bg-white shadow-sm my-2">{counter[9]}</button>
            </div>
          </div>
          <div className="mt-10 ">
          <button className="bg-blue-600 px-8 py-2 text-white rounded-sm ml-52" onClick={handleClick}>Roll</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
