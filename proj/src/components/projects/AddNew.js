import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { theme } from '../../constants/themes'


const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Modal = styled.div`
  position: relative;
  background-color: #fff;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
`

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 1.3rem;
  margin-left: 0.5rem;
`

const Label = styled.label`
font-size: 0.8rem;
font-weight: bold;
margin-bottom: 0.3rem;
`

const Input = styled.input`
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid #EDEDED;
  margin-bottom: 1rem;
`

const Button = styled.button`
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: #fff;
  background-color: ${props => props.theme.main}
  cursor: pointer;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

export default (props) => {
  
  if(!props.displayAdd) return null;
  
  let input = null;

  const submit = (e) => {
    e.preventDefault();
    props.submitProject(e.target.elements.name.value);
  }

  return (
    <Backdrop>
      <Modal>
        <CloseButton onClick={ e => props.closeAddProject(e)}>X</CloseButton>
        <Title>Add new project</Title>
        <form onSubmit={ submit }>
          <Label>Project Label</Label>
          <Input type="text" name="name" innerRef={el => input = el }/>
          <ThemeProvider theme={theme}>
            <Button>SAVE</Button>
          </ThemeProvider>
        </form>
      </Modal>
    </Backdrop>
  )
}