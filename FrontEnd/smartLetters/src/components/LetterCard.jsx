function LetterCard({ letter, markAsRead }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between">
      <p className="text-lg font-semibold">ID: {letter.id}</p>
      <p className="text-gray-600">Status: {letter.status}</p>
      <button
        className="mt-4 bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
        onClick={() => markAsRead(letter.id)}
      >
        Marcar como lida
      </button>
    </div>
  );
}
export default LetterCard;