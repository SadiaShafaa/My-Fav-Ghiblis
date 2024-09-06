import { useState } from 'react'
import Home from "./pages/Home"
import Howl from "./pages/Howl"
import Ponyo from "./pages/Ponyo"
import Wisper from "./pages/Whisper"

function App() {

  return (
    <main
    className="p-0 m-0 apps bg-blue-300 min-h-screen w-screen">
      <Home/>
      <Ponyo/>
      <Wisper/>
      <Howl/>
    </main>
  )
}

export default App
