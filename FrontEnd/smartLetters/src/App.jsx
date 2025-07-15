import axios from 'axios';
import { useEffect, useState } from 'react';
import LetterCard from './components/LetterCard';

function App() {
  const [letters, setLetters] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://smartmailbox-production.up.railway.app/api/letters");
      // Filtrar apenas as cartas pendentes
      const pendingLetters = response.data.letters.filter(letter => letter.status.toLowerCase() === 'pendente');
      setLetters(pendingLetters);
    } catch (error) {
      console.error("Erro ao buscar cartas:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [letters]);

  const markAsRead = async (id) => {
    try {
      await axios.put(`https://smartmailbox-production.up.railway.app/api/letters/${id}`, 
        { status: 'lida' }
      );
      setLetters(prevLetters => prevLetters.filter(letter => letter.id !== id));
    } catch (error) {
      console.error("Erro ao marcar como lida:", error);
    }
  };

  return (
    <main className="min-h-screen bg-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 b">Correio Inteligente de Kauan</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {letters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} markAsRead={markAsRead} />
        ))}
      </div>

      {letters.length === 0 && (
        <p className="text-xl text-gray-700 mt-10">Sem cartas pendentes !</p>
      )}
    </main>
  );
}

export default App;
