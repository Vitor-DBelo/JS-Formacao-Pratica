// Importa a função useState do React. Ela é um *hook* usado para gerenciar estados dentro de componentes funcionais.
import { useState } from "react";
import Link from "./components/Link.jsx";

// Define a função principal do componente App. No React, cada componente funcional é uma função que retorna a interface do usuário.
function App() {
  // O hook useState retorna duas coisas:
  // 1. Uma variável (`msg`), que contém o valor atual do estado.
  // 2. Uma função (`seteMessage`), que permite atualizar o estado.
  //
  // Ao atualizar o estado usando `seteMessage`, o React detecta a mudança e "re-renderiza" o componente,
  // atualizando a interface com o novo valor do estado.
  //
  // Aqui, o estado inicial de `msg` é "Mudou de cor".
  const [msg, seteMessage] = useState("Mudou de cor");

  // O JSX a seguir define o que será renderizado na interface. Ele é semelhante ao HTML, mas permite usar JavaScript dentro de `{}`.
  // JSX deve retornar um único elemento pai (neste caso, uma `<div>`).
  return (
    <div>
      {/* 
        Exibe a mensagem armazenada na variável de estado `msg`. 
        As chaves `{}` permitem interpolar (inserir) valores JavaScript em JSX.
      */}
      <h1>{msg}</h1>

      {/* 
        O botão possui um evento `onClick`. Quando o botão é clicado, a função passada como argumento é executada.
        Essa função altera o estilo do elemento `<body>` e também atualiza o estado `msg`, o que resulta em mudanças na interface.
      */}
      <button
        onClick={() => {
          // Seleciona o elemento <body> da página para alterar diretamente seu estilo (manipulação de DOM).
          const body = document.body;

          // Verifica se a cor de fundo atual do <body> é "red" (vermelha).
          if (body.style.backgroundColor === "red") {
            // Se for vermelha, altera a cor de fundo para branca.
            body.style.backgroundColor = "white";

            // Atualiza o estado `msg` com uma nova mensagem. Isso dispara a re-renderização do componente.
            seteMessage("Mudou de cor, Para vermelho");
          } else {
            // Caso contrário, altera a cor de fundo para vermelha.
            body.style.backgroundColor = "red";

            // Atualiza o estado `msg` com uma mensagem diferente.
            seteMessage("Mudou de cor, Para branco");
          }
        }}
      >
        {/* 
          Este é o texto exibido no botão. Ele não depende de estado e permanece fixo como "Muda cor".
        */}
        Muda cor
      </button>

      {/* 
        Aqui é uma lista não ordenada (`ul`). Dentro dela, há dois itens de lista (`li`) que exibem componentes `Link` com diferentes URLs.
        Cada `Link` é um componente importado, que recebe uma propriedade `link` com a URL a ser acessada e um texto (`text`) que será exibido no link.
      */}
      <ul>
        {/* 
          O primeiro item da lista exibe o componente `Link` com a URL do YouTube 3 e o texto "YouTube3".
        */}
        <li><Link link="https://www.youtube.com/3" text="YouTube3" /></li>

        {/* 
          O segundo item da lista exibe o componente `Link` com a URL do YouTube 4 e o texto "YouTube4".
        */}
        <li><Link link="https://www.youtube.com/4" text="YouTube4" /></li>
      </ul>
    </div>
  );
}

// Exporta o componente App para que ele possa ser usado em outros arquivos do projeto.
// Esse padrão de exportação é usado para reutilizar componentes em diferentes partes da aplicação.
export default App;

// Define uma função chamada `title` que é um componente funcional em React.
// Os componentes funcionais recebem um único argumento chamado `props` (abreviação de propriedades).
// `props` é um objeto que contém todos os dados passados para o componente quando ele é utilizado.
function Title({ props }) {
  // O componente retorna um elemento <h1>.
  // Dentro do <h1>, o valor de `props` deveria ser exibido.
  // No entanto, atualmente está passando a palavra literal "props" como string, em vez do valor contido no objeto `props`.
  
  return <h1>{props}</h1>; // Aqui, o valor exibido é sempre a string literal "props".
}

// Observação:
// Para usar corretamente o valor de `props`, você deve referenciar uma propriedade específica de `props` ou passar o próprio objeto:
// Exemplo correto seria:
// <h1>{props.title}</h1> - Isso exibiria o valor da propriedade `title` do objeto `props`.
// Ou se você quer exibir o valor completo de `props` como JSON: <h1>{JSON.stringify(props)}</h1>.
