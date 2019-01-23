import React, { Component } from "react";
import { connect } from "react-redux";
import database from "../../firebase/firebase";
import { setCurrentProject } from "../../actions/projects";
import { startSetExpenses } from "../../actions/expenses";

export class ProjectHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.getProjects(this.props.auth.uid),
      project: { isLoading: true }
    };
  }

  calculateCurrentFunds() {}

  createSelectItems() {
    let projectArray = Array.from(this.state.projects);
    let items = [];
    if (projectArray.length !== 0) {
      for (let i = 0; i <= this.state.projects.length - 1; i++) {
        items.push(
          <option
            key={[i]}
            value={projectArray[i].name}
            id={projectArray[i].id}
          >
            {projectArray[i].name}
          </option>
        );
        //here I will be creating my options dynamically based on
        //what props are currently passed to the parent component
      }
      return items;
    }
  }

  handleProjectSelect = event => {
    const projectArray = Array.from(this.state.projects);
    const selectedIndex = event.target.options.selectedIndex;
    const projectId = event.target.options[selectedIndex].getAttribute("id");
    const projectIndex = this.state.projects.findIndex(x => x.id === projectId);
    const project = projectArray[projectIndex];
    this.props.setCurrentProject(project);
    this.props.startSetExpenses();
    console.log(this.props.history);
  };

  getProjects = uid =>
    database
      .ref(`users/${uid}/projects`)
      .once("value")
      .then(snapshot => {
        const projects = [];

        snapshot.forEach(childSnapshot => {
          projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        this.setState({ projects });
        this.setState({ project: { isLoading: false } });
      });

  componentWillMount() {
    this.getProjects(this.props.auth.uid);
  }

  render() {
    return (
      <div className="page-header">
        <div className="content-container">
          <div className="input-group__item header__content">
            <h1 className="page-header__title">
              {this.props.project.name ? (
                <span>{this.props.project.name}</span>
              ) : (
                <span>Select a Project</span>
              )}
            </h1>
            {!this.state.project.isLoading ? (
              <select
                className="select"
                onChange={this.handleProjectSelect}
                defaultValue={this.props.project.name || "default"}
              >
                <option disabled value="default">
                  Select a Project
                </option>
                {this.createSelectItems()}
              </select>
            ) : null}
          </div>

          <div className="header__content">
            <h1 className="page-header__title">
              Starting Funds: <span>{this.props.project.initialFunds}</span>
            </h1>
            <h1 className="page-header__title">
              Current Funds: <span>{this.props.project.initialFunds}</span>
            </h1>
          </div>
          {this.props.project.info ? (
            <div className="container-content">
              <h1 className="page-header__title--center">Additional Info:</h1>

              {this.props.project.info}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  setCurrentProject: project => dispatch(setCurrentProject(project)),
  startSetExpenses: () => dispatch(startSetExpenses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectHeader);
