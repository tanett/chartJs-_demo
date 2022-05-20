import React, { Component } from 'react';
import './App.css';
import BarChart from './components/Bar';
import ChartGradientLine from './components/GradientLine';
import DoughnutChart from './components/DougnutChart';
import PolarAreaChart from './components/PolarAreaChart';

class App extends Component {
  render() {
    return (
      <div className="App">
<BarChart />
          <ChartGradientLine/>
          <DoughnutChart/>
          <PolarAreaChart/>
      </div>
    );
  }
}

export default App;
