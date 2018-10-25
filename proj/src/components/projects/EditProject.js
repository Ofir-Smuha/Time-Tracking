import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uid from 'uuid/v4';
import { Formik } from 'formik';
import * as yup from 'yup';

import * as projectActions from 'actions/projectsActions';

const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  position: relative;
  background-color: #fff;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 1.3rem;
  margin-left: 0.5rem;
`;

const Form = styled.form``

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid #EDEDED;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: #fff;
  background-color: ${({theme}) => theme.main}
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const ProjectSchema = yup.object().shape({
  owner: yup.string().required('Owner is required') ,
  members: yup.number().min(2, 'Members must be at least 2 characters').required(),
  project: yup.string().required('Project name is required')
});

const EditProject = (props) => {
  
  const submitProject = (values) => {
    props.isLoading();
    if (props.currProject) {
      const editedProject = { ...props.currProject };
      editedProject.name = values.project;
      props.setEditedProject(editedProject)
    } else {
      const newProjectId = uid();
      const newProject = {id: newProjectId, name: values.project};
      props.setAddedProject(newProject)
    }
  };

  const renderTitle = () => {
    if (props.currProject) {
      return <Title>{props.currProject.name}</Title>
    }
    return <Title>Add new project</Title>
  };

  const renderInput = (action) => {
    if (props.currProject) {
      return <Input type="text" name="project" onChange={action} defaultValue={props.currProject.name}/>
      }
      return <Input type="text" name="project" onChange={action}/>
  };

  return (
    <Backdrop>
      <Modal>
        <CloseButton onClick={props.closeEditModal}>X</CloseButton>
        {renderTitle()}
      <Formik
          initialValues={{
            project: '',
            owner: '',
            members: ''
          }}
          validationSchema={ProjectSchema}
          onSubmit={values => {
            submitProject(values)
          }}
          render={({
                     errors,
                     values,
                     handleSubmit,
                     handleChange,
                     touched
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label>
                Owner:
                {touched.owner && errors.owner && <p>{errors.owner}</p>}
                <Input
                  type="text"
                  name="owner"
                  placeholder="Owner"
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Maximum members:
                {touched.members && errors.members && <p>{errors.members}</p>}
                <Input
                  type="number"
                  name="members"
                  placeholder="Maximum members"
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Project Label:
                {touched.project && errors.project && <p>{errors.project}</p>}
                {renderInput(handleChange)}
              </Label>
              <Button type="submit">SAVE</Button>
            </Form>
          )}
      />
      </Modal>
    </Backdrop>
  )
};

EditProject.propTypes = {
  setEditedProject: PropTypes.func,
  setAddedProject: PropTypes.func,
  isLoading: PropTypes.func,
  closeEditModal: PropTypes.func
};

const mapStateToProps = state => ({
  currProject: state.projects.currProject
});

export default connect(mapStateToProps, {
  closeEditModal: projectActions.closeEditModal,
  isLoading: projectActions.isLoading,
  setAddedProject: projectActions.setAddedProject,
  setEditedProject: projectActions.setEditedProject
})(EditProject)