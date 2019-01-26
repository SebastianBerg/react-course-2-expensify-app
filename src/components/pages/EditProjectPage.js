import React from "react";
import { connect } from "react-redux";
import ProjectForm from "../partials/ProjectForm";
import { startAddProject, startRemoveProject } from "../../actions/projects";
import OptionModal from "../partials/OptionModal";

export class AddProjectPage extends React.Component {
  state = {
    isOpen: false
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

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
            <h1 className="page-header__title">
              Edit Project: <span>{this.props.project.name}</span>
            </h1>
          </div>
        </div>
        <div className="content-container">
          <ProjectForm onSubmit={this.onSubmit} project={this.props.project} />
          <button className="button--light-grey" onClick={this.handleOpenModal}>
            Remove Project
          </button>
        </div>
        <OptionModal
          isOpen={this.state.isOpen}
          onRemove={this.onRemove}
          handleCloseModal={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          removalObject={"Project"}
        />
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
