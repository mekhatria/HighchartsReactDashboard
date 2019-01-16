import React, { Component } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart extends Component {
  state = {
    chartData: {
      chart: {
        type: 'pie'
        //backgroundColor: '#FCFFC5'
      },
      title: {
        text: this.props.titleNanme
      },
      tooltip: this.props.tooltip || {},
      /*tooltip: {
        pointFormat: '<b>{point.y} thousand megawatthours</b>'
      },*/

      plotOptions: this.props.plotOptions,
      series: this.props.data
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        chartData: {
          series: this.props.data
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
