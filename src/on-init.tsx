/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

interface State {
  data: PanelData;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.onPanelUpdate = this.onPanelUpdate.bind(this);
  }

  componentDidMount() {
    htmlNode.addEventListener("panelupdate", this.onPanelUpdate);
  }

  componentWillUnmount() {
    htmlNode.removeEventListener("panelupdate", this.onPanelUpdate);
  }

  onPanelUpdate() {
    this.setState({ data: data });
  }

  render() {
    const value = data.series[0]?.fields[1]?.state.calcs?.last;
    return <div>Value: {value ?? "No data"}</div>;
  }
}

ReactDOM.render(<App />, htmlNode.children[1]);
