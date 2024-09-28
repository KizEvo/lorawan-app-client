import React from 'react';

const StatusTable = ({data}) => {
    const getColor = (label) => {
        return label == "Connected" ? 'green' : 'red';
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Sensor's Name</th>
                    <th>Status</th>      
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.sensorNo}</td>
                        <td>{row.sensorName}</td>
                        <td style={{color: getColor(row.status)}}>{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StatusTable;