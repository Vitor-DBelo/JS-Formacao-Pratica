import bomDia from "./services/saudacoesDia.mjs";
//import { boaNoite,boaTarde,sono} from "./services/saudacoesNoite";
import * as deUrno from "./services/saudacoesNoite.js";
import {tomarCafe} from "./services/cafe.mjs";

console.log(await bomDia('marcos'));
console.log(deUrno.sono.mediano);
tomarCafe()

console.log(await deUrno.boaNoite('Cleid'));
console.log(await deUrno.boaTarde('marcia'));