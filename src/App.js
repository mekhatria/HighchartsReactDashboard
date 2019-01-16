import React, { Component } from 'react';
import './App.css';

import Chart from './components/Chart';
import data from './components/data';
import Selection from './components/Selection';

let fossilFuelData = [],
  hydroElectricData = [],
  renewableEnergyData = [],
  biomassData = [];

const dataProcessing = (yearFrom, yearTo) => {
  let coal = 0,
    pliquids = 0,
    pcoke = 0,
    ngas = 0,
    ogas = 0,
    nuclear = 0,
    chydroelectric = 0,
    wind = 0,
    solar = 0,
    geothermal = 0,
    biomass = 0,
    wood = 0,
    otherbio = 0;
  for (let i = yearFrom; i < yearTo; i++) {
    coal += data.coal[i];
    pliquids += data.pliquids[i];
    pcoke += data.pcoke[i];
    ngas += data.ngas[i];
    ogas += data.ogas[i];
    nuclear += data.nuclear[i];
    chydroelectric += data.chydroelectric[i];
    wind += data.wind[i];
    solar += data.solar[i];
    geothermal += data.geothermal[i];
    biomass += data.biomass[i];
    wood += data.wood[i];
    otherbio += data.otherbio[i];
  }

  fossilFuelData = [
    { name: 'coal', y: coal },
    { name: 'Petroleum Liquids', y: pliquids },
    { name: 'Petroleum Coke', y: pcoke },
    { name: 'Natural gas', y: ngas },
    { name: 'Other Gases', y: ogas }
  ];

  hydroElectricData = [
    { name: 'Nuclear', y: nuclear },
    { name: 'Conventional Hydroelectric', y: chydroelectric }
  ];

  biomassData = [
    { name: 'Biomass', y: biomass },
    { name: 'Wood', y: wood },
    { name: 'Otherbio', y: otherbio }
  ];

  renewableEnergyData = [
    { name: 'Wind', y: wind },
    { name: 'Solar', y: solar },
    { name: 'Geothermal', y: geothermal }
  ];
};

class App extends Component {
  state = {
    chart1: [
      {
        data: [
          { name: 'coal', y: 1 },
          { name: 'Petroleum Liquids', y: 1 },
          { name: 'Petroleum Coke', y: 1 },
          { name: 'Natural gas', y: 1 },
          { name: 'Other Gases', y: 1 }
        ]
      }
    ],
    chart2: [
      {
        data: [
          { name: 'Nuclear', y: 1 },
          { name: 'Conventional Hydroelectric', y: 1 }
        ]
      }
    ],
    chart3: [
      {
        data: [
          { name: 'Biomass', y: 1 },
          { name: 'Wood', y: 1 },
          { name: 'Otherbio', y: 1 }
        ]
      }
    ],
    chart4: [
      {
        data: [
          { name: 'Wind', y: 1 },
          { name: 'Solar', y: 1 },
          { name: 'Geothermal', y: 1 }
        ]
      }
    ],
    tooltip: {
      pointFormat: '<b>{point.y} thousand megawatthours</b>'
    },
    plotOptions: {
      pie: {
        showInLegend: true,
        innerSize: '60%',
        dataLabels: {
          enabled: false,
          distance: -14,
          color: 'white',
          style: {
            fontweight: 'bold',
            fontsize: 50
          }
        }
      }
    },
    titleNanme: 'name',
    yearFrom: '2001',
    yearTo: '2015'
  };

  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.setState({
      chart1: [
        {
          data: fossilFuelData
        }
      ],
      chart2: [
        {
          data: hydroElectricData
        }
      ],
      chart3: [
        {
          data: renewableEnergyData
        }
      ],
      chart4: [
        {
          data: biomassData
        }
      ]
    });
  }

  handleSubmit = e => {
    dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.setState({
      chart1: [
        {
          data: fossilFuelData
        }
      ],
      chart2: [
        {
          data: hydroElectricData
        }
      ],
      chart3: [
        {
          data: renewableEnergyData
        }
      ],
      chart4: [
        {
          data: biomassData
        }
      ]
    });

    e.preventDefault();
  };

  handleChangeYearFrom = e => {
    this.setState({ yearFrom: e.target.value });
  };
  handleChangeYearTo = e => {
    this.setState({ yearTo: e.target.value });
  };

  render() {
    return (
      <>
        <div className='container bg-light'>
          <h1 className='text-center mt-5'>
            Net energy generation in the United States
          </h1>
        </div>
        <div className='container  pt-1 mt-2 mb-5 pb-3 bg-light'>
          <Selection
            yearFrom={this.state.yearFrom}
            yearTo={this.state.yearTo}
            onChangeYearFrom={this.handleChangeYearFrom}
            onChangeYearTo={this.handleChangeYearTo}
            onSubmit={this.handleSubmit}
          />

          <div className='row bg-light'>
            <div className='col-xs-12 col-sm-6 mb-2'>
              <Chart
                data={this.state.chart1}
                plotOptions={this.state.plotOptions}
                tooltip={this.state.tooltip}
                titleNanme={'Fossil Fuel'}
              />
            </div>
            <div className='col-xs-12 col-sm-6'>
              <Chart
                data={this.state.chart2}
                plotOptions={this.state.plotOptions}
                titleNanme={'Hydroelectric Energy'}
              />
            </div>
          </div>
          <div className='row  mb-1 bg-light'>
            <div className='col-xs-12 col-sm-6 mb-2'>
              <Chart
                data={this.state.chart3}
                plotOptions={this.state.plotOptions}
                titleNanme={'Biomass'}
              />
            </div>
            <div className='col-xs-12 col-sm-6'>
              <Chart
                data={this.state.chart4}
                plotOptions={this.state.plotOptions}
                titleNanme={'Renewable Energy'}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
