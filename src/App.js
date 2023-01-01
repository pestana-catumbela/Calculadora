import React, { useState } from 'react';
import {Container, Content, Row} from './styles'
import Input from './components/input'
import Button from './components/botton';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleOnClear = (num) => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () =>{
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubNumbers()
          break
        case 'x':
          handleMultNumbers()
          break
        case '/':
          handleDivNumbers()
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
            <Button label='x' onClick={() => handleMultNumbers()}/>
            <Button label='/' onClick={() => handleDivNumbers()}/>
            <Button label='0' onClick={() => handleAddNumber('0')}/>
            <Button label='C' onClick={() => handleOnClear()}/>
          </Row>

          <Row>
            <Button label='9' onClick={() => handleAddNumber('9')}/>
            <Button label='8' onClick={() => handleAddNumber('8')}/>
            <Button label='7' onClick={() => handleAddNumber('7')}/>
            <Button label='-' onClick={() => handleSubNumbers()}/>
          </Row>

          <Row>
            <Button label='6' onClick={() => handleAddNumber('6')}/>
            <Button label='5' onClick={() => handleAddNumber('5')}/>
            <Button label='4' onClick={() => handleAddNumber('4')}/>
            <Button label='+' onClick={() => handleSumNumbers()}/>
          </Row>

          <Row>
            <Button label='3' onClick={() => handleAddNumber('3')}/>
            <Button label='2' onClick={() => handleAddNumber('2')}/>
            <Button label='1' onClick={() => handleAddNumber('1')}/>
            <Button label='=' onClick={() => handleEquals()}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
