import React from 'react';

const PatientTable = ({patients}) => {
    return (
        <div>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Sex</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  patients.map((pt, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{pt.name}</td>
                        <td>{pt.sex}</td>
                        <td>{pt.age}</td>
                        <td>{pt.weight}KG</td>
                        <td>{pt.phone}</td>
                        <td>{pt.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default PatientTable;