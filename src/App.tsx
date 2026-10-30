import { useState } from 'react'

function Zadanie({ title, length, albumTitle }: Track) {
  return (
   
  );
}

interface Track {
  /** title of the song (string) */
  title: string;
  /** duration of the song (string) */
  length: string;

  albumTitle: string;
}

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="container">

    </div>
  )
}

export default App
