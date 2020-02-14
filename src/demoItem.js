import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

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
    //    console.log("-----");
    //    console.log("PANEL: ", panel);
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

  createTasks(item, i) {
    //   console.log("ITEM", item);
    let valExp = false;
    if (this.state.expanded === item.id) {
      valExp = true;
    } else {
      valExp = false;
    }
    //    console.log("Valeur injecte :", valExp);
    return (
      <ExpansionPanel
        key={i}
        expanded={valExp}
        onChange={this.handleChange(item.id)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={item}
        >
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <p>Icone</p>
            </Grid>
            <Grid item xs={2}>
              <Typography>
                {item.HourStart} - {item.HourStop}
                {item.Company}
              </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={1}>
              <Typography>
                {item.CityStart}-{item.CityStop}
                {item.DureeFlight}
              </Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <Typography>{item.NbEscales}</Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={1}>
              <Typography align="right">
                {item.Price} {item.Currency} {item.TypeFlight}
              </Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Details panel {item.id}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  render() {
    console.log("-----------------");
    //   console.log("Valeur expanded: ", this.state.expanded);
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((p, i) => this.createTasks(p, i));

    return <div>{listItems}</div>;
  }
}

export default DemoItem;
