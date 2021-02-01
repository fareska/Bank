import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'vendor', headerName: 'Vendor', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    {
        field: 'fullName', headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
];


export default function Transactions(props) {
    const rows = []
    props.transactions.forEach(t => {
        t.id = t._id
        rows.push(t)
    })

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}
