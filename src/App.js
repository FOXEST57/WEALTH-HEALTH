import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import { useContext, useEffect } from 'react';
import { EmployeeContext } from './context/EmployeeContext';

function App() {
    // appel du context(useContext)
    const employeesContext = useContext(EmployeeContext)
    //mise en place dun useEffect 
    useEffect(() => {
        employeesContext.getStoredEmployees()
    }, [])

    // mise en place du router avec 2 routes
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateEmployee />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
