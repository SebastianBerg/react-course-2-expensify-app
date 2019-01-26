import React from "react";
import { connect } from "react-redux";
import ProjectForm from "../partials/ProjectForm";
import { startAddProject, startRemoveProject } from "../../actions/projects";

export class AddProjectPage extends React.Component {
  onSubmit = project => {
    this.props.startAddProject(project);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveProject({ id: this.props.project.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Project</h1>
          </div>
        </div>
        <div className="content-container">
          <ProjectForm onSubmit={this.onSubmit} />
          <button className="button--light-grey" onClick={this.onRemove}>
            Remove Project
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.project
  };
};

const mapDispatchToProps = dispatch => ({
  startAddProject: project => dispatch(startAddProject(project)),
  startRemoveProject: id => dispatch(startRemoveProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProjectPage);
