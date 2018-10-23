import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setDeletedProject, openEditProject } from 'actions/projectsActions'

const Project = styled.li`
  width: 25rem;
  border-radius: 5px;
  padding: 0.9rem 1.1rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0 10px 15px -10px rgba(156,156,156,1);

  ${({ displayMode }) => (displayMode === 'grid') && `
    flex-direction: column;
    align-items: flex-start;
    width: 100px;
    height: 100px;
    margin: 5px;
  `}
`
const ProjectName = styled.h1`
`

const Options = styled.div`
  display: flex;
  font-size: 0.9rem;
  ${({ displayMode }) => (displayMode === 'grid') && `
  font-size: 0.8rem;
`}
`

const Edit = styled.h1`
  margin-right: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
`

const Delete = styled.h1`
  color: red;
  text-transform: uppercase;
  margin-left: 0.5rem;
  cursor: pointer;
`

const ProjectPreview = (props) => {
  return (
    <Project displayMode={props.displayMode}>
      <ProjectName>{props.project.name}</ProjectName>
      <Options displayMode={props.displayMode}>
        <Edit onClick={() => props.openEditProject(props.project)}>edit</Edit>
          | 
        <Delete onClick={() => props.setDeletedProject(props.project.id)}>delete</Delete>
      </Options>
    </Project>
  )
}

ProjectPreview.propTypes = {
  setDeletedProject: PropTypes.func,
  openEditProject: PropTypes.func,
  project: PropTypes.object
}

export default connect(null, { setDeletedProject, openEditProject })(ProjectPreview)
