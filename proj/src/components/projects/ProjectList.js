import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { map } from 'lodash/fp';


const ProjectListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.background};
  border-radius: 5px;
  padding: 1.2rem;
  min-height: 15rem;
  width: 28rem;
  ${({ displayMode }) => (displayMode === 'grid') && `
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    align-content: space-between;
  `}
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
  projects: PropTypes.object
}

export default ProjectList