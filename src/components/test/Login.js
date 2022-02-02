import React from 'react'
import styled from 'styled-components';

const DivBox = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  &:active {
    background-color: #f1ac15;
  }
`

export default function Login() {
  return (
      <DivBox>
        Korea
      </DivBox>
  )
}
