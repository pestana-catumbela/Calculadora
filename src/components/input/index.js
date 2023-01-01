import React from 'react'
import { InputContainer } from './styles';

const Input = ({value}) => {
    return (
        <InputContainer>
          <input value={value} disabled/>
        </InputContainer>
    );
  }

export default Input