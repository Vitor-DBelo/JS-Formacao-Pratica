// FALSY
// Valores que retornam false em contexto booleano
// false literal
// 0
// '' (string vazia) / "" (string vazia com aspas duplas) / `` (template string vazia)
// NaN
// undefined
// null

// Exemplo com OR (||)
// Retorna o primeiro valor truthy ou o último valor caso todos sejam falsy
const resultadoOR = false || 0 || "" || "Maçã" || null;
// Explicação: false (falsy), 0 (falsy), "" (falsy), "Maçã" (truthy), então o resultado é "Maçã".
console.log(resultadoOR); // Saída: "Maçã"

// Exemplo com AND (&&)
// Retorna o primeiro valor falsy ou o último valor caso todos sejam truthy
const resultadoAND = true && 1 && "Banana" && undefined;
// Explicação: true (truthy), 1 (truthy), "Banana" (truthy), undefined (falsy), então o resultado é "undefined".
console.log(resultadoAND); // Saída: undefined

// Uso combinado de OR e AND
const valor = "Maçã";
const resultadoCombinado = (valor && "Fruta") || "Sem fruta";
// Explicação: valor é "Maçã" (truthy), então "Fruta" é retornado no AND.
// Depois, no OR, "Fruta" (truthy) é retornado diretamente.
console.log(resultadoCombinado); // Saída: "Fruta"

// Verificação rápida de valores
const falsyCheck = null || undefined || NaN || 0 || false || "Primeiro valor truthy";
// Explicação: Todos os valores antes de "Primeiro valor truthy" são falsy, então o OR retorna "Primeiro valor truthy".
console.log(falsyCheck); // Saída: "Primeiro valor truthy"
