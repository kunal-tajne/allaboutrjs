import { useState } from "react"

const App = () =>
{
  const [color, setColor] = useState("Black")
  const colorCode = "0123456789ABCDEF"

  function generateRandomCode ()
  {
    let colorString = "#"
    for (let index = 0; index < 6; index++) {
      let currCode = Math.floor((Math.random() * 16))
      colorString += colorCode[currCode]
      
    }

    console.log(Math.random())
    handleOnClick(colorString)
  }

  const handleOnClick = (currColor) => {
    setColor(currColor)
  }

  return(

    <div className="w-full h-screen duration-1000"
    style={{backgroundColor: color}}>
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-white text-center text-3xl">Welcome to Background Changer</h2>
    </div>
    <div className="fixed flex flex-wrap bottom-10 justify-center   inset-x-10 py-2 rounded-md">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-3xl rounded-md px-3 py-2">

    <button onClick={() => setColor("Red")} className="outline-none px-5 py-1 rounded-lg text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button>

    <button onClick={() => setColor("Green")} className="outline-none px-5 py-1 rounded-lg text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>

    <button onClick={() => handleOnClick("Blue")} className="outline-none px-5 py-1 rounded-lg text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>

    <button onClick={() => handleOnClick("Yellow")} className="outline-none px-5 py-1 rounded-lg text-black shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>

    <button onClick={() => generateRandomCode()} className="outline-none px-5 py-1 rounded-lg text-white shadow-lg" style={{backgroundColor:"Black"}}>Generate Random</button>
    </div>
    </div>

    </div>


  )
}

export default App