import React, { Component } from 'react';
import EditProject from 'components/projects/EditProject';
import withLoader from 'components/projects/withLoader'
import ProjectList from 'components/projects/ProjectList'
import ProjectPreview from 'components/projects/ProjectPreview';
import gridLayout from 'assets/images/grid.png'
import listLayout from 'assets/images/list.png'
import styled from 'styled-components';
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const LayoutSelectors = styled.div`
  display: flex;
  justify-content: center;
`

const LayoutSelector = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
  cursor: pointer;
`

const EditWithLoader = withLoader(EditProject)

class Projects extends Component {

  state = {
    isLoading: false,
    displayEditModal: false,
    displayMode: 'list',
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
    this.setState({ isLoading: true });
    if (projectId) { 
      this.setState({
        projects: set([projectId, 'name'], newName, this.state.projects),
        displayEditModal: false,
        isLoading: false,
        currProject: false
      })
    } else {
      const newProjectId = uuidv4()
      const newProject = {id: newProjectId, name: newName}
      this.setState({
        projects: set([newProjectId], newProject, this.state.projects),
        displayEditModal: false,
        isLoading: false,
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

  changeLayout = (layout) => {
    this.setState({displayMode: layout})
  }

  render() {
    return (
      <Wrapper>
        <Title>Projects</Title>
        <ContentContainer>
          <ButtonsContainer>
            <LayoutSelectors>
              <LayoutSelector onClick={() => this.changeLayout('grid')} src={gridLayout} alt="grid-icon"/>
              <LayoutSelector onClick={() => this.changeLayout('list')} src={listLayout} alt="list-icon"/>
            </LayoutSelectors>
            <AddButton onClick={this.openEditModal}>ADD PROJECT</AddButton>
          </ButtonsContainer>
          
          <ProjectList 
            projects={this.state.projects}
            onDeleteProject={this.deleteProject}
            onEditProject={this.editProject}
            displayMode={ this.state.displayMode }
            renderProject={ (project) => {
              return (
                <ProjectPreview
                        key={project.id}
                        displayMode={ this.state.displayMode }
                        project={project}
                        onDeleteProject={this.deleteProject}
                        onEditProject={this.editProject}/>
              ) }
            } 
          />
        </ContentContainer>

        { 
          this.state.displayEditModal && 
          <EditWithLoader 
            onCloseEditModal={this.closeEditModal}
            onSubmitProject={this.submitProject}
            projectId={this.state.currProject.id}
            title={this.state.currProject.name || 'Add new project'}
            inputValue={this.state.currProject.name}
            isLoading={this.state.isLoading}
          />
        }

      </Wrapper>
    )
  }
}

export default Projects


