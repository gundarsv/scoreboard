import * as React from 'react';
import { Result } from "../../Interfaces/Results";
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@material-ui/core";
import './ResultsStyles.css';

interface IProps {
    data: Result[]
}

export default class Results extends React.Component<IProps> {
    render() {
        let firstRow: Result[] = [];
        let secondRow: Result[] = [];
        this.props.data.map((result, key) => {
            if (key % 2 || key === 0) {
                return firstRow.push(result)
            } else {
                return secondRow.push(result);
            }
        })
        return (
            <div>
                <Box className="firstRow" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                    {
                        firstRow.map(result => {
                            return <div key={result.name}>
                                <Typography variant="h6" id="tableTitle">
                                   {result.name}
                                </Typography>
                                <Box className="dataBox" width="28vw" height="35vh" p={1} bgcolor="grey.300">
                                    <Table title={result.name} aria-label="simple table" className="table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className={"rankColumn"} align="center"><h4>Rank</h4></TableCell>
                                                <TableCell align="left"><h4>Name</h4></TableCell>
                                                <TableCell align="center"><h4>Result</h4></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {result.ranking.map(rank => (
                                                <TableRow key={rank.name}>
                                                    <TableCell className={"rankColumn"} align="center"><p>{rank.rank}</p></TableCell>
                                                    <TableCell align="left"><p>{rank.name}</p></TableCell>
                                                    <TableCell align="center"><p>{rank.result}</p></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </div>
                        })
                    }
                </Box>
                <Box className="secondRow" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                    {
                        secondRow.map(result => {
                            return <div key={result.name}>
                            <Typography variant="h6" id="tableTitle">
                               {result.name}
                            </Typography>
                            <Box className="dataBox" width="28vw" height="35vh" p={1} bgcolor="grey.300">
                                <Table title={result.name} aria-label="simple table" className="table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={"rankColumn"} align="center"><h4>Rank</h4></TableCell>
                                            <TableCell align="left"><h4>Name</h4></TableCell>
                                            <TableCell align="center"><h4>Result</h4></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {result.ranking.map(rank => (
                                            <TableRow key={rank.name}>
                                                <TableCell className={"rankColumn"} align="center"><p>{rank.rank}</p></TableCell>
                                                <TableCell align="left"><p>{rank.name}</p></TableCell>
                                                <TableCell align="center"><p>{rank.result}</p></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </div>
                        })
                    }
                </Box>
            </div>
        )
    }
}
