import * as React from 'react';
import { Result } from './Interfaces/Results';
import Results from './Components/Results/Results';

interface IState {
  data?: Result[],
  loading:boolean
}

export default class App extends React.Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      loading:true
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
    import('./Data/result.json').then(result => {
      const sortedData = this.sortData(result.results);
      this.setState({
      data: sortedData,
      loading: false,
    })
    });
    
  }

  sortData(data: Result[]) {
    return data.sort((a, b) => +b.ranking - +a.ranking);
  }

  render() {
    while (this.state.data === undefined) {
      return (
        <div>Loading</div>
      )
    }
    return (
        <Results data={this.state.data}/>
    )
  }
}