import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { render } from "react-dom";
import DemoItem from "./demoItem";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      listItem: ["item1", "item2"]
    };
    this.handleChange = this.handleChange.bind(this);
    //    this.addItem = this.addItem.bind(this);
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
        <DemoItem entries={this.state.listItem} />
      </div>
    );
  }
}

export default Demo;
