import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { render } from "react-dom";

class DemoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adelete: false
    };
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div>
        <p>Item</p>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default DemoItem;
