import Button from "../Button";

export default function CallButtons({
  handleNumberInput,
  clearInput,
  handleSum,
  handleSubtract,
  handleEqual,
  handleDivis,
  handlePorc,
  handleMultiply, 
}) {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-5 gap-2 mt-15">
      <Button number="C" onClick={clearInput} />
      <Button number="%" onClick={handlePorc} />
      <Button number="/" onClick={handleDivis} />
      <Button number="x" onClick={handleMultiply} />

      {[7, 8, 9].map((num) => (
        <Button key={num} number={num} onClick={() => handleNumberInput(num)} />
      ))}
      <Button number="-" onClick={handleSubtract} />

      {[4, 5, 6].map((num) => (
        <Button key={num} number={num} onClick={() => handleNumberInput(num)} />
      ))}
      <Button number="+" onClick={handleSum} />

      {[1, 2, 3].map((num) => (
        <Button key={num} number={num} onClick={() => handleNumberInput(num)} />
      ))}
      <Button number="=" onClick={handleEqual} />

      <Button number="of" onClick={() => handleNumberInput("of")} />
      <Button number={0} onClick={() => handleNumberInput(0)} />
      <Button number="," onClick={() => handleNumberInput(",")} />
    </div>
  );
}
