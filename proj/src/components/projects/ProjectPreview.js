import React from 'react'
import styled from 'styled-components';

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


const ProjectPreview = (props) => {
  return (
    <Project>
      <ProjName>{props.project.name}</ProjName>
      <Options>
        <Edit onClick={ props.editProject(props.project)}>EDIT</Edit>
          | 
        <Delete onClick={() => props.deleteProject(props.project.id)}>DELETE</Delete>
      </Options>
    </Project>
  )
}


export default ProjectPreview