import React, { Component } from 'react';
import EditProject from '../components/projects/EditProject';
import ProjectList from '../components/projects/ProjectList'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../constants/themes';
import uuidv4 from 'uuid/v4';
import { set, unset } from 'lodash/fp';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 1.7rem;
  margin: 5rem 0 5rem 4rem;
  font-weight: bold;
  color: ${props => props.theme.main}
`

const ContentContainer = styled.div`
  margin: 0 auto;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

const AddButton = styled.button`
  color: #fff;
  font-weight: bold;
  background-color: #9013FE;
  border: none;
  border-radius: 5px;
  padding: 0.6rem;
  cursor: pointer;
`

class Projects extends Component {

  state = {
    displayEditModal: false,
    currProject: false,
    projects: {
      1: {id: 1, name: 'Project 1'},
      2: {id: 2, name: 'Project 2'},
      3: {id: 3, name: 'Project 3'},
    }
  }

  openEditModal = () => {
    this.setState({
      displayEditModal: true
    })
  }

  closeEditModal = () => {
    if (this.state.currProject) {
      this.setState({
        displayEditModal: false,
        currProject: false
      })
    } else {
      this.setState({
        displayEditModal: false
      })
    }
  }
  
  submitProject = (newName, projectId) => {
    if (projectId) { 
      this.setState({
        projects: set([projectId, 'name'], newName, this.state.projects),
        displayEditModal: false,
        currProject: false
      })
    } else {
      const newProjectId = uuidv4()
      const newProject = {id: newProjectId, name: newName}
      this.setState({
        projects: set([newProjectId], newProject, this.state.projects),
        displayEditModal: false
      })
    }
  }

  editProject = (project) => () => {
    this.setState({
      currProject: project,
      displayEditModal: true
    })
  }
  

  deleteProject = (projId) => {

    this.setState({
      projects: unset([projId], this.state.projects)
    })

  }

  render() {
    return (
      <Wrapper>

        <ThemeProvider theme={theme}>
          <Title>Projects</Title>
        </ThemeProvider>

        <ContentContainer>
          <ButtonContainer>
            <AddButton onClick={this.openEditModal}>ADD PROJECT</AddButton>
          </ButtonContainer>
          
          <ProjectList 
            projects={this.state.projects}
            deleteProject={this.deleteProject}
            editProject={this.editProject}
          />
        </ContentContainer>

        { 
          this.state.displayEditModal && 
          <EditProject 
            closeEditModal={this.closeEditModal}
            submitProject={this.submitProject}
            projectId={this.state.currProject.id}
            title={this.state.currProject.name || 'Add new project'}
            inputValue={this.state.currProject.name}
          />
        }

      </Wrapper>
    )
  }
}

export default Projects


