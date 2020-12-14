import React, { useState } from 'react'

export default function AddEmployee(props) {
    const [newName, setNewName] = useState('');
    const [newDes, setNewDes] = useState('');
    const [newSalary, setNewSalary] = useState('');

    const handleAddEmployee = () => {
        const newEmp = {
            "id": props.empList.length + 1,
            "name": newName,
            "des": newDes,
            "salary": newSalary,
        }
        props.empList.push(newEmp);
        props.addEmp(props.empList);
        setNewName('');
        setNewDes('');
        setNewSalary('');
    }

    return (
        <>
            <td>
                <input type="text" placeholder="Enter Name" value={newName} onChange={e => setNewName(e.target.value)} />
            </td>
            <td>
                <input type="text" placeholder="Enter Designation" value={newDes} onChange={e => setNewDes(e.target.value)} />
            </td>
            <td>
                <input type="text" placeholder="Enter Salary" value={newSalary} onChange={e => setNewSalary(e.target.value)} />
            </td>
            <td>
                <button type="button" onClick={() => handleAddEmployee()}>
                    Add
                </button>
            </td>
        </>
    )
}
