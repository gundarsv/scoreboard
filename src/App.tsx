import * as React from 'react';
import { Result, JsonData } from './Interfaces/Results';
import Results from './Components/Results/Results';

interface IState {
  data?: Result[],
  loading: boolean
}

export default class App extends React.Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.loadData();
    setInterval(() => {
      this.loadData();
    }, 60000);
  }

  loadData() {
    console.log("Data loaded");
    var json;
    try {
      json = require('./Data/result.json') as JsonData;
      var sortedData = this.sortData(json);
      this.setState({
        data: sortedData,
        loading: false,
      });
    }
    catch (e) {
      console.log(e)
      setInterval(() => {
        this.loadData();
      }, 5000);
    }
  }

  sortData(data: JsonData) {
    var currentData = data.results;
    currentData.map(a => a.ranking.sort((a, b) => +a.rank - +b.rank));
    return currentData;
  }

  render() {
    while (this.state.data === undefined) {
      return (
        <div>Loading</div>
      )
    }
    console.log(this.state.data);
    return (
      <Results data={this.state.data} />
    )
  }
}