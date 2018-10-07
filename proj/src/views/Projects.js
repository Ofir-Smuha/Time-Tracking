import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../constants/themes'
import AddNew from '../components/projects/AddNew'
const uuidv4 = require('uuid/v4');

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

const ProjectList = styled.ul`
  background-color: #F9F9F9;
  border-radius: 5px;
  padding: 1.2rem;
  min-height: 25rem;
`

const Project = styled.li`
  width: 25rem;
  border-radius: 5px;
  padding: 0.9rem 1.1rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0px 10px 15px -10px rgba(156,156,156,1);
`

const ProjName = styled.h1`
  cursor: pointer;
`

const Options = styled.div`
  display: flex;
  font-size: 0.9rem;
`

const Edit = styled.h1`
margin-right: 0.5rem;
cursor: pointer;
`

const Delete = styled.h1`
color: red;
margin-left: 0.5rem;
cursor: pointer;
`



class Projects extends Component {

  state = {
    displayAdd: false,
    projects: [{id: uuidv4(), name: 'Project 1'},
               {id: uuidv4(), name: 'Project 2'},
               {id: uuidv4(), name: 'Project 3'}],
  }

  openAddProject = () => {
    this.setState({
      displayAdd: true
    })
  }

  closeAddProject = () => {
    this.setState({
      displayAdd: false
    })
  }

  submitProject = (value) => {
    const projects = [...this.state.projects, {id: uuidv4(), name: value}]
    this.setState({
      projects: projects,
      displayAdd: false
    })
  }

  editProject = () => {

  }

  deleteProject = (projId) => {
    const projects = this.state.projects.filter(project => {
      return project.id !== projId
    })
    console.log(projects)
    this.setState({
      projects: projects,
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
            <AddButton onClick={this.openAddProject}>ADD PROJECT</AddButton>
          </ButtonContainer>
          <ProjectList>
            {this.state.projects.map(project => {
              return (
                <Project key={project.name}>
                  <ProjName>{project.name}</ProjName>
                  <Options>
                    <Edit>EDIT</Edit> | <Delete onClick={() => this.deleteProject(project.id)}>DELETE</Delete>
                  </Options>
                </Project>
              )
            })}
          </ProjectList>
        </ContentContainer>
        <AddNew 
          displayAdd={this.state.displayAdd}
          name="dudu"
          closeAddProject={this.closeAddProject}
          submitProject={this.submitProject}
        />
      </Wrapper>
    )
  }
}

Projects.defaultProps = { projects: [{projectName:'Project 1'}] };

export default Projects


