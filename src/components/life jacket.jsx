import React, { Component } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart1 extends Component {
  state = {
    chartData: {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'My chart2'
      },
      series: this.props.data
    }
  };

  componentDidMount() {
    // this.setState({ : this.props.data });
    /*console.log(this.state.series[0].data);
    const series = { ...this.state.series };
    series[0].data = this.props.data;
    this.setState({ series });
    console.log(series);*/
    //this.setState({this.state.series[0].data});
    /*const temp = this.state.series.data.map(e => {
      return e;
    });*/
  }

  /*componentDidUpdate(prevProps, prevState) {
    if (this.state.check) {
      this.setState({
        series: this.props.data,
        check: false
      });
    }
  }*/
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      console.log(
        'Child => data is different, old ',
        prevProps.data,
        'new :',
        this.props.data
      );
      //const chartData = this.state.chartData; //{ ...this.state.series };
      //chartData.series = this.props.data;
      this.setState({
        chartData: {
          series: this.props.data
        }
      });
      console.log('state is now : ', this.state);
    }
    /*console.log('Child => prevProps: ', prevProps);*/
    /*if (this.props.data !== prevProps.data) {
      console.log('Child => data is different, old ', prevProps.data, 'new :');
      const series = { ...this.state.series };
      series[0].data = this.props.data;
      this.setState({ series });
    }
    console.log('Child => data updated: ', this.state.series[0].data);*/
    //this.setState({ redrawChart: true }); //Maximum update depth exceeded.
  }

  render() {
    console.log('RENDER', this.state);
    return (
      <>
        <h1>I am Chart 1</h1>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.chartData}
        />
      </>
    );
  }
}

export default Chart1;
