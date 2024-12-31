import 'dotenv/config'  // Para versões do Node.js abaixo da 20
import connectToDatabase from "./database/data.js"

async function  main() {
   await connectToDatabase('naruto', '123')
}
main()