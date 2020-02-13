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
    this.handleChange2 = this.handleChange2.bind(this);
    this.navOpen = this.navOpen.bind(this);
    this.navOpen2 = this.navOpen2.bind(this);
  }

  handleChange(event: object, expanded: boolean) {
    //  console.log("Appel de la fonction change");
    // if (event.target.props.) {
    //   console.log("Expanded");
    // }
    //    console.log(event);
    return null;
  }

  handleChange2 = (panel: string) => (
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

  navOpen(parm) {
    console.log("Fonction navOpen - Click Panel 1");
    //   console.log(parm);
    //const val = "panel1";
    this.setState({
      expanded: "panel1"
    });
  }
  navOpen2(parm) {
    console.log("Fonction navOpen2 - Click Panel 2");
    //   console.log(parm);
    //const val = "panel1";
    this.setState({
      expanded: "panel2"
    });
  }

  render() {
    return (
      <div>
        <ExpansionPanel
          expanded={this.state.expanded === "panel1"}
          onChange={this.handleChange2("panel1")}
          //     onClick={this.navOpen}
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
          onChange={this.handleChange2("panel2")}
          //  onClick={this.navOpen2}
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
