export default function Button({ number,onClick }) {
    return (
      <button
        onClick={onClick}
        className="py-6 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition cursor-pointer"
      >
        {number}
      </button>
    );
  }
  