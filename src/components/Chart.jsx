import React, { Component } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Chart extends Component {
  state = {
    chartData: {
      chart: {
        type: "pie",
        marginBottom: 100
      },
      title: {
        text: this.props.titleName
      },
      subtitle: {
        text:
          (
            this.props.data.reduce(
              (accumulator, obj) => accumulator + obj.y,
              0
            ) / 1000000
          ).toFixed(2) + " Twh",
        floating: true,
        style: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#000000"
        },
        y: 170
      },
      series: [
        {
          data: this.props.data
        }
      ],
      ...this.props.userConfig
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        chartData: {
          ...this.state.chartData,
          subtitle: {
            text:
              (
                this.props.data.reduce(
                  (accumulator, obj) => accumulator + obj.y,
                  0
                ) / 1000000
              ).toFixed(2) + " Twh"
          },
          series: [
            {
              data: this.props.data
            }
          ]
        }
      });
    }
  }

  render() {
    return (
      <>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.chartData}
        />
      </>
    );
  }
}

export default Chart;
