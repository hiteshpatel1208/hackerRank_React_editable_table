import React, {useState} from 'react'

export default function Employee(props) {
    const [isEditable, setIsEditable] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const [newSalary, setNewSalary] = useState(props.emp.salary);

    const handleSaveItem = () => {
        props.emp.salary = newSalary;
        setIsEditable(false);
        setCanSave(false);
    }

    const handlePriceChange = (val) => {
        setNewSalary(val);
        if(val === props.emp.salary) {
            setCanSave(false);
        } else {
            setCanSave(true);
        }
    }

    return (
        <>
            <td>{props.emp.name}</td>
            <td>{props.emp.des}</td>
            <td>
                {isEditable ? <input type="number" value={newSalary} onChange={e => handlePriceChange(e.target.value)} /> : <span onClick={() => setIsEditable(true)}>$ {props.emp.salary}</span>}
            </td>
            <td>
                <button type="button" onClick={() => handleSaveItem()} disabled={!canSave}>
                    Save
                </button>
            </td>
        </>
    )
}
