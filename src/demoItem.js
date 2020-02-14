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
      expanded: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }

  handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    console.log("-----");
    const valueExpanded = this.state.expanded;
    if (this.state.expanded === panel.item) {
      this.setState({
        expanded: false
      });
    } else {
      this.setState({
        expanded: panel.item
      });
    }
  };

  createTasks2(item, i) {
    valExp = false;
    if (this.state.expanded === item) {
      valExp = true;
    } else {
      valExp = false;
    }
    return (
      <ExpansionPanel
        key={i}
        expanded={valExp}
        onChange={this.handleChange({ item })}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={item}
        >
          <Typography>General settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Details panel {item}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((p, i) => this.createTasks2(p, i));

    return <div>{listItems}</div>;
  }
}

export default DemoItem;
