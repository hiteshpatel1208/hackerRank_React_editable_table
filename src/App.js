import React, { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import Employee from './components/Employee';
import EmployeeList from './shared/EmployeeList';

function App() {
  
  let [list, setList] = useState(EmployeeList);

  const addEmp = (newList) => {
    setList([...newList]);
  }

  const handleSalarySave = (empId, newSalary) => {
    let newList = [...list];
    newList.filter(emp => emp.id === empId)[0].salary = newSalary;
    setList([...newList]);
  }

  return (
    <div className="App">
      <h8k-navbar header={'Some Titile'}></h8k-navbar>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((emp) => {
              return (
                <tr key={emp.id}>
                  <Employee emp={emp} saveSalary={handleSalarySave} />
                </tr>
              );
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <AddEmployee empList={list} addEmp={addEmp} />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
