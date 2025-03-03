import { Metadata } from "next";
import { Buttom } from "../componentes/buttom";

export const metadata: Metadata = {
  title: "Home",
  description: "Aprendendo Next.js do zero",
  openGraph: {
    title: "Gatosad",
    images: [
      {
        url: "https://i.pinimg.com/736x/24/da/e6/24dae658bace4e44336ea39823ca3746.jpg",
        width: 800,
        height: 600,
        alt: "Um gato triste",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


async function handleId(formData: FormData) {
  "use server";
  const userId = formData.get('userId')
  console.log("you",userId);
}


async function handleCleid() {
  "use server";
  console.log("Submit function");
}

export const revalidate = 60;

export default function Home() {
  let number = Math.random() * 10;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Página Inicial</h1>
      <h1>numero gerado: {number}</h1>
      <Buttom />

      <form className="flex gap-2 my-4 w-full max-w-md" action={handleId}>
        <input
          type="text"
          placeholder="Insira o ID"
          name="userId"
          className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Buscar ID
        </button>
      </form>

      {/* Botão Cleid */}
      <h2 className="text-xl font-semibold text-gray-700 mt-6">Cleid</h2>
      <button
        onClick={handleCleid}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Botão da Cleid
      </button>
    </div>
  );
}
