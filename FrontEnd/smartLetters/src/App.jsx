import axios from 'axios';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const [letters, setLetters] = useState([]);

  const fetchData = async () => {
    try{
      const response = await fetch("https://smartmailbox-production.up.railway.app/api/letters");
      setLetters(response.data.letters);
    }catch(error){
      console.error("Erro ao buscar cartas:", error);
    }
  }

fetchData();
console.log(letters);
  return (
    <>
     <h1>kauan</h1>
    </>
  )
}

export default App
