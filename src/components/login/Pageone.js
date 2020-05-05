import React from 'react'
import { TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Paper } from "@material-ui/core";

const createBody = (rows) => {
    return rows.map((row) => {
        return (
            <TableRow>
                {
                    row.map((cell) => <TableCell align="center">{cell}</TableCell>)
                }
            </TableRow>
        )
    })
}

const createHeader = (headers) => {
    return (
        <TableRow>
            {
                headers.map((head) => <TableCell align="center" style={{fontWeight: "bold", color: "white", backgroundColor: "gray"}}>{head}</TableCell>)
            }
        </TableRow>
    )
}
const ResultAnalysis = (props) => {
    const headers = [
        "Correct Answers",
        "Wrong Answers",
        "Not Attempted"
    ]
    const data = [
        [5, 3, 2],
        [5, 3, 2],
        [5, 3, 2],
        [5, 3, 2],
        [5, 3, 2]
    ]
    return (
        <TableContainer style={{margin: "30px 100px 0 250px", width: "350px"}} component={Paper}>
            <Table size="small" aria-label="customized table" stickyHeader>
                <TableHead style={{backgroundColor: "green"}}>
                    {
                        createHeader(headers)
                    }
                </TableHead>
                <TableBody>
                    {createBody(data)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ResultAnalysis;