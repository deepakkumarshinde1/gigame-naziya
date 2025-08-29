import { Component } from "react";
import { withParams } from "../hoc/common.hoc";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>ProjectDetails {props.id}</div>;
  }
}

export default withParams(ProjectDetails);
