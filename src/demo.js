import React, { Component } from "react";
import DemoItem from "./demoItem";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ["item1", "item2", "item3", "item4", "item5"]
    };
  }

  render() {
    return (
      <div>
        <DemoItem entries={this.state.listItem} />
      </div>
    );
  }
}

export default Demo;
