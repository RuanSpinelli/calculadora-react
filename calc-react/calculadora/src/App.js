import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // Adiciona número ao visor
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => prev === '0' ? number : prev + number);
  };

  // Limpa visor e dados
  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  // Define operação e guarda o primeiro número
  const handleOperation = (op) => {
    setFirstNumber(currentNumber);
    setOperation(op);
    setCurrentNumber('0');
  };

  // Executa a conta ao clicar em "="
  const handleEquals = () => {
    if (!firstNumber || !operation || !currentNumber) return;

    const first = Number(firstNumber);
    const second = Number(currentNumber);
    let result = 0;

    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case 'x':
        result = first * second;
        break;
      case '/':
        result = second !== 0 ? first / second : 'Erro';
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber('0');
    setOperation('');
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label={'C'} onClick={handleClear} />
          <Button label={'/'} onClick={() => handleOperation('/')} />
          <Button label={'x'} onClick={() => handleOperation('x')} />
          <Button label={'-'} onClick={() => handleOperation('-')} />
        </Row>

        <Row>
          <Button label={7} onClick={() => handleAddNumber('7')} />
          <Button label={8} onClick={() => handleAddNumber('8')} />
          <Button label={9} onClick={() => handleAddNumber('9')} />
          <Button label={'+'} onClick={() => handleOperation('+')} />
        </Row>

        <Row>
          <Button label={4} onClick={() => handleAddNumber('4')} />
          <Button label={5} onClick={() => handleAddNumber('5')} />
          <Button label={6} onClick={() => handleAddNumber('6')} />
          <Button label={'='} onClick={handleEquals} />
        </Row>

        <Row>
          <Button label={1} onClick={() => handleAddNumber('1')} />
          <Button label={2} onClick={() => handleAddNumber('2')} />
          <Button label={3} onClick={() => handleAddNumber('3')} />
          <Button label={0} onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
