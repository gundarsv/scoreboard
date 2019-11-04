import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Box } from '@material-ui/core';
import { User } from './Interfaces/User';
import './App.css';

interface IState {
  timePassed: number;
  data: User[],
  loading:boolean;
}

export default class App extends Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      timePassed: 0,
      data: [],
      loading:true,
    }

  }

  componentDidMount() {
    setInterval(() => this.setState({
      timePassed: +this.state.timePassed + 1
    }), 1000);

    let arrayOfData = [
      {
        name: "Gundars",
        result: 171120
      },
      {
        name: "Gundars1",
        result: 5487521
      },
      {
        name: "Gundars2",
        result: 7898796
      },
      {
        name: "Hello",
        result: 7898796
      },
      {
        name: "Not hello",
        result: 7898796
      },
      {
        name: "Welcome",
        result: 7898796
      },
      {
        name: "Hi",
        result: 7898796
      },
    ]

    const sortedData = this.sortData(arrayOfData);

    this.setState({
      data: sortedData,
      loading:false,
    });


  }

  sayHello() {
    if (+this.state.timePassed % 60 === 0) {
      return "Hello"
    }
  }

  sortData(data: User[]) {
    return data.sort((a, b) => b.result - a.result);
  }

  render() {
    while (this.state.loading)
    {
        return (
          <div>Loading</div>
        )
    }
    return (
      <div>
        <div>
          <Box className="firstRow" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
            <Box className="dataBox" width="60vh" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"><h4>Name</h4></TableCell>
                    <TableCell align="right"><h4>Result</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row"><p>{row.name}</p></TableCell>
                      <TableCell align="right"><p>{row.result}</p></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box className="dataBox" width="60vh" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"><h4>Name</h4></TableCell>
                    <TableCell align="right"><h4>Result</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row"><p>{row.name}</p></TableCell>
                      <TableCell align="right"><p>{row.result}</p></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
          <Box className="secondRow" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
            <Box className="dataBox" width="60vh" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"><h4>Name</h4></TableCell>
                    <TableCell align="right"><h4>Result</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row"><p>{row.name}</p></TableCell>
                      <TableCell align="right"><p>{row.result}</p></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box className="dataBox" width="60vh" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"><h4>Name</h4></TableCell>
                    <TableCell align="right"><h4>Result</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row"><p>{row.name}</p></TableCell>
                      <TableCell align="right"><p>{row.result}</p></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </div>
        <div>
          {
            this.sayHello()
          }
        </div>
        <div>
          {
            this.state.timePassed
          }
        </div>
      </div>
    )
  }
}