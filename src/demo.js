import React, { Component } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { render } from "react-dom";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    //    setExpanded(isExpanded ? panel : false);
    console.log("onChange: " + panel);
    if (this.state.expanded === panel) {
      this.setState({
        expanded: false
      });
    } else {
      this.setState({
        expanded: panel
      });
    }
  };


  render() {
    return (
      <div>
        <ExpansionPanel
          expanded={this.state.expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>General settings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Details panel 1</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={this.state.expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>Users</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Details panel 2 </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Demo;
