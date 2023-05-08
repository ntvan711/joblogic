import React, { useState } from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import mockData from './mockData/EmployeeData';
const App = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [employees, setEmployees] = useState(mockData.employees);

  const handleChangeEmployee = (id) => () => {
    setCurrentIdx(id)
  }

  const handleChangePopularity = (e) => {
    const newData = JSON.parse(JSON.stringify(employees))
    newData[currentIdx].popularity = Number(e.currentTarget.value)
    setEmployees(newData);
  }

  
  return (
   
    <div className='app'>
        <Sidebar employees={employees} currentIdx={currentIdx} onChange={handleChangeEmployee}/>
        <div>
            <Header />
            <Content employee={employees[currentIdx]} currentIdx={currentIdx} onChangePopularity={handleChangePopularity} />
        </div>
    </div>
  )
}

export default App