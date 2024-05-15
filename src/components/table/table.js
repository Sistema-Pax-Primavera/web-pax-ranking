import React, { useEffect, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = ({ data }) => {
    const tableRef = useRef(null);
    const getColorByPercentage = (percentage) => {
        if (percentage <= 30) {
            return { backgroundColor: 'red', color: 'white', fontWeight: 'bold' };
        } else if (percentage <= 55) {
            return { backgroundColor: 'yellow', color: 'green', fontWeight: 'bold' };
        } else {
            return { backgroundColor: 'green', color: 'white', fontWeight: 'bold' };
        }
    };

    useEffect(() => {
        const scrollTable = () => {
            if (tableRef.current) {
                tableRef.current.scrollTop += 1;
                if (tableRef.current.scrollTop === tableRef.current.scrollHeight - tableRef.current.clientHeight) {
                    tableRef.current.scrollTop = 0;
                }
            }
        };

        const interval = setInterval(scrollTable, 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <TableContainer ref={tableRef} component={Paper} style={{ height: '500px', overflow: 'hidden' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1,
                            backgroundColor: 'white'
                        }}>
                        <TableRow>
                            <TableCell align="center" >Cobradores</TableCell>
                            <TableCell align="center" >1ª Parcela</TableCell>
                            <TableCell align="center" >2ª Parcela</TableCell>
                            <TableCell align="center" >3ª Parcela</TableCell>
                            <TableCell align="center" >Adiantados</TableCell>
                            <TableCell align="center" >Pontuação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{row.cobradores}</TableCell>
                                <TableCell align="center">{row.parcela1}</TableCell>
                                <TableCell align="center">{row.parcela2}</TableCell>
                                <TableCell align="center">{row.parcela3}</TableCell>
                                <TableCell align="center">{row.adiantados}</TableCell>
                                <TableCell align="center" style={getColorByPercentage(row.pontuacao)}>{row.pontuacao}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableComponent;
