import React, { Component } from "react";
import "./App.css";
import template from "./components/template";
import Selection from "./components/Selection";
import Dashboard from "./components/Dashboard.jsx";
import dataProcessing, {
  fossilFuelData,
  hydroElectricData,
  renewableEnergyData,
  biomassData
} from "./components/dataProcessing";

class App extends Component {
  state = template;

  copyDataSeries = (obj = {}) => {
    this.setState({
      ...obj,

      charts: [
        { serie: fossilFuelData, title: "Fossil Fuel" },
        { serie: hydroElectricData, title: "Hydroelectric Energy" },
        { serie: renewableEnergyData, title: "Biomass" },
        { serie: biomassData, title: "Renewable Energy" }
      ]
    });
  };
  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
    this.copyDataSeries();
  }

  handleSubmit = e => {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.yearFrom !== this.state.yearFrom) {
      this.handleChangeSelect();
    }
    if (prevState.yearTo !== this.state.yearTo) {
      this.handleChangeSelect();
    }
  }
  handleChangeSelect() {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
  }

  handleChangeYear = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <>
        <div className="container bg-light">
          <h1 className="text-center mt-5">
            Net energy generation in the United States
          </h1>
          <p className="text-center">
            Source:&nbsp;
            <a href="https://www.eia.gov">
              U.S. Energy Information Administration
            </a>{" "}
          </p>
        </div>
        <div className="container  mb-5 pb-3 bg-light">
          <div
            className={
              "text-center mb-0 pt-3 bold " +
              (this.state.msg !== "Select the range" ? "text-danger" : "")
            }
          >
            <strong>{this.state.msg}</strong>
          </div>
          <Selection
            yearFrom={this.state.yearFrom}
            yearTo={this.state.yearTo}
            onChangeYear={this.handleChangeYear}
            onSubmit={this.handleSubmit}
          />
          <Dashboard
            userConfig={this.state.userConfig}
            charts={this.state.charts}
          />
        </div>
      </>
    );
  }
}

export default App;
