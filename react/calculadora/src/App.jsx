import { useState } from "react";
import Container from "./components/Layout/Conteiner";
import Content from "./components/Layout/Content";
import Input from "./components/Input/Input";
import CallButtons from "./components/Buttons/CallButtons/CallButtons";

function App() {
  const [currentInput, setCurrentInput] = useState("0");
  const [firstOperand, setFirstOperand] = useState("0");
  const [operation, setOperation] = useState(null);

  const clearInput = () => {
    setCurrentInput("0");
    setFirstOperand("0");
    setOperation(null);
  };

  const handleNumberInput = (number) => {
    setCurrentInput((prev) => (prev === "0" ? String(number) : prev + number));
  };

  const handleAddition = () => {
    setFirstOperand(currentInput);
    setOperation("add");
    setCurrentInput("0");
  };

  const handleSubtraction = () => {
    setFirstOperand(currentInput);
    setOperation("subtract");
    setCurrentInput("0");
  };

  const handleDivision = () => {
    setFirstOperand(currentInput);
    setOperation("divide");
    setCurrentInput("0");
  };

  const handleMultiply = () => {
    setFirstOperand(currentInput);
    setOperation("multiply");
    setCurrentInput("0");
  };

  const handlePercentage = () => {
    setCurrentInput((prev) => String(Number(prev) / 100));
  };

  const handleEqual = () => {
    if (!operation || firstOperand === "0") return;

    const first = Number(firstOperand);
    const second = Number(currentInput);
    let result = 0;

    switch (operation) {
      case "add":
        result = first + second;
        break;
      case "subtract":
        result = first - second;
        break;
      case "divide":
        result = first / second;
        break;
      case "multiply":
        result = first * second;
        break;
      default:
        break;
    }

    setCurrentInput(String(result));
    setFirstOperand("0");
    setOperation(null);
  };

  return (
    <Container>
      <Content>
        <Input value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} />
        <CallButtons
          handleNumberInput={handleNumberInput}
          clearInput={clearInput}
          handleSum={handleAddition}
          handleSubtract={handleSubtraction}
          handleEqual={handleEqual}
          handleDivis={handleDivision}
          handlePorc={handlePercentage}
          handleMultiply={handleMultiply}
        />
      </Content>
    </Container>
  );
}

export default App;
