function LetterCard({ letter, markAsRead }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
      <h3 className="text-2xl font-semibold mb-2">Alerta de carta nova !</h3>
      <p className="text-lg">ID: {letter.id}</p>
      <p className="text-gray-600">Status: {letter.status}</p>
      <button
        className="mt-4 bg-blue-400 text-white py-2 rounded-xl hover:bg-blue-600 transition"
        onClick={() => markAsRead(letter.id)}
      >
        Marcar como lida
      </button>
    </div>
  );
}

export default LetterCard;
