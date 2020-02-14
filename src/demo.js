import React, { Component } from "react";
import DemoItem from "./demoItem";
import data from "../data/2items.json";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ["item1", "item2", "item3", "item4", "item5"]
    };
  }

  render() {
    console.log({ data });
    return (
      <div>
        <DemoItem entries={data} />
      </div>
    );
  }
}
//        <DemoItem entries={this.state.listItem} />

export default Demo;
