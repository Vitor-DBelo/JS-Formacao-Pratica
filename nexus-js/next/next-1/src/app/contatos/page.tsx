import { Metadata } from "next"

export const metadata: Metadata = {
  title: "contato",
  description: "next do zero",
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
  robots:{
    index:true,
    follow: true,
    nocache:false,
    googleBot:{
      index:false,
      follow:true
    }
  }
};

export default function contatos(){
    return(
        <><h1>contato do rogerinho</h1></>
    )
}