import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { map } from 'lodash/fp';


const ProjectListContainer = styled.ul`
  ${({ displayMode }) => (displayMode === 'grid') && `
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    align-content: space-between;
  `}

  background-color: ${({theme}) => theme.background};
  border-radius: 5px;
  padding: 1.2rem;
  min-height: 15rem;
  width: 28rem;
`

 const ProjectList = (props) => {
    return (
      <ProjectListContainer displayMode={props.displayMode}>
        {
          map(project => {
            return props.renderProject(project)
          }, props.projects)
        }
      </ProjectListContainer>
    )
}

ProjectList.propTypes = {
  onDeleteProject: PropTypes.func,
  onEditProject: PropTypes.func,
  projects: PropTypes.object
}

export default ProjectList