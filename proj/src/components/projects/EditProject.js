import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import * as projectActions from 'actions/projectsActions';

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
  margin-bottom: 0.5rem;
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
  background-color: ${({theme}) => theme.main}
  cursor: pointer;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

const EditProject = (props) => {
  
  const submitProject = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value
    props.isLoading();

    if (props.currProject) { 
      const editedProject = { ...props.currProject };
      editedProject.name = inputValue
      props.setEditedProject(editedProject)
    } else {
      const newProjectId = uuidv4()
      const newProject = {id: newProjectId, name: inputValue}
      props.setAddedProject(newProject)
    }
  }

  const renderTitle = () => {
    if (props.currProject) {
      return <Title>{props.currProject.name}</Title>
    }
    return <Title>Add new project</Title>
  }

  const renderInput = () => {
    if (props.currProject) {
      return <Input type="text" name="name" defaultValue={props.currProject.name}/>
      }
      return <Input type="text" name="name"/>
  }

  return (
    <Backdrop>
      <Modal>
        <CloseButton onClick={props.closeEditModal}>X</CloseButton>
        {renderTitle()}
        <form onSubmit={submitProject}>
          <Label>Project Label</Label>
          {renderInput()}
            <Button>SAVE</Button>
        </form>
      </Modal>
    </Backdrop>
  )
}

EditProject.propTypes = {
  setEditedProject: PropTypes.func,
  setAddedProject: PropTypes.func,
  isLoading: PropTypes.func,
  closeEditModal: PropTypes.func
}

const mapStateToProps = state => ({
  currProject: state.projects.currProject
})

export default connect(mapStateToProps, {
  closeEditModal: projectActions.closeEditModal,
  isLoading: projectActions.isLoading,
  setAddedProject: projectActions.setAddedProject,
  setEditedProject: projectActions.setEditedProject
})(EditProject)