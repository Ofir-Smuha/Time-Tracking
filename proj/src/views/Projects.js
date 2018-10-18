import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EditProject from 'components/projects/EditProject';
import withLoader from 'components/projects/withLoader'
import ProjectList from 'components/projects/ProjectList'
import ProjectPreview from 'components/projects/ProjectPreview';
import { openEditProject, fetchProjects } from 'actions/projectsActions'

import gridLayout from 'assets/images/grid.png'
import listLayout from 'assets/images/list.png'

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
    displayMode: 'list',
  }
  
  componentDidMount() {
    this.props.fetchProjects()
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
            <AddButton onClick={() => this.props.openEditProject()}>ADD PROJECT</AddButton>
          </ButtonsContainer>
          
          <ProjectList 
            projects={this.props.projects}
            displayMode={this.state.displayMode}
            renderProject={ (project) => {
              return (
                <ProjectPreview
                  key={project.id}
                  displayMode={ this.state.displayMode }
                  project={project}/>
              )}
            } 
          />
        </ContentContainer>
        
        { 
          this.props.displayEditModal && 
          <EditWithLoader 
          />
        }
      </Wrapper>
    )
  }
}

Projects.propTypes = {
    projects: PropTypes.object,
    isLoading: PropTypes.bool,
    displayEditModal: PropTypes.bool
}

const mapStateToProps = ({ projects }) => ({
    projects: projects.projects,
    displayEditModal: projects.displayEditModal,
    isLoading: projects.isLoading
})

export default connect(mapStateToProps, { openEditProject, fetchProjects })(Projects)