import { useState } from "react";



function App() {
  const [color,setColor] = useState('red')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor('red')} className="bg-red-600 px-3 py-2 rounded-2xl shadow-lg outline-none text-white">Red</button>
          <button onClick={() => setColor('blue')} className="bg-blue-600 px-3 py-2 rounded-2xl shadow-lg outline-none text-white">Blue</button>
          <button onClick={() => setColor('green')} className="bg-green-600 px-3 py-2 rounded-2xl shadow-lg outline-none text-white">Green</button>
          <button onClick={() => setColor('black')} className="bg-black px-3 py-2 rounded-2xl shadow-lg outline-none text-white">Black</button>
          <button onClick={() => setColor('orange')} className="bg-orange-600 px-3 py-2 rounded-2xl shadow-lg outline-none text-white">Orange</button>
          <button onClick={() => setColor('yellow')} className="bg-yellow-500 px-3 py-2 rounded-2xl shadow-lg outline-none text-white">Yellow</button>
          <button onClick={() => setColor('white')} className="bg-white px-3 py-2 rounded-2xl shadow-lg outline-none text-black">White</button>
        </div>
      </div>
    </div>
  )
}

export default App
