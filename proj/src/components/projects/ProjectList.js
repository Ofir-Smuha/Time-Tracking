import React from 'react'
import ProjectPreview from './ProjectPreview'
import styled from 'styled-components';
import { map } from 'lodash/fp';


const ProjectListContainer = styled.ul`
  background-color: ${({theme}) => theme.background};
  border-radius: 5px;
  padding: 1.2rem;
  min-height: 25rem;
`

 const ProjectList = (props) => {

    return (
      <ProjectListContainer>
          {
            map(project => {
              return (
                  <ProjectPreview
                    key={project.id}
                    project={project}
                    onDeleteProject={props.onDeleteProject}
                    onEditProject={props.onEditProject}/>
              )
            }, props.projects)
          }
      </ProjectListContainer>
    )

}

export default ProjectList