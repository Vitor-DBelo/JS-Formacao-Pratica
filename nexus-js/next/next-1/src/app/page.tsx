import { Metadata } from "next"
import {Buttom} from "../componentes/buttom";

export const metadata: Metadata = {
  title: "home",
  description: "aprendendo next do zero",
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
    nocache:true,
    googleBot:{
      index:true,
      follow:true
    }
  }
};

export default function home(){
  return (
    <>
      <Buttom />
      <h1>cleid</h1>
     
    </>
  )
}