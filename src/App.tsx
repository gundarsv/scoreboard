import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Box } from '@material-ui/core';
import { User } from './Interfaces/User';
import './App.css';

interface IState {
  timePassed: Number;
  data: User[]
}

export default class App extends Component {
  state: IState = {
    timePassed: 0,
    data: [
      {
        name: "Gundars",
        result: 7898796
      },
      {
        name: "David",
        result: 7898796
      },
      {
        name: "Dominik",
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
    ],
  }

  componentDidMount() {
    setInterval(() => this.setState({
      timePassed: +this.state.timePassed + 1
    }), 1000)
  }

  sayHello() {
    if (+this.state.timePassed % 60 === 0) {
      return "Hello"
    }
  }

  render() {
    return (
      <div>
        <div>
          <Box className="firstRow" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
            <Box className="dataBox" width="33%" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box className="dataBox" width="33%" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
          <Box className="secondRow" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
            <Box className="dataBox" width="33%" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box className="dataBox" width="33%" p={1} bgcolor="grey.300">
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.result}</TableCell>
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