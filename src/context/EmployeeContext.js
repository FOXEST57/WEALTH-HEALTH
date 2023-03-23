import { createContext, useState } from "react";
// Creation dun contexte pour englober et partagé des données
export const EmployeeContext = createContext()

export const EmployeeContextProvider = props => {
    const [employees, setEmployees] = useState([])
    // function constante pour ajouter un employe  
    const addEmployee = employee => {

        setEmployees(prevEmployees => {
            return [
                ...prevEmployees
                , employee
            ]
        })
        storeEmployee(employee)
    }
  // function constante pour enregistrer les employer dans le localstorage
    const storeEmployee = employee => {
        const employeesStored = localStorage.getItem('employees') !== null
            ? JSON.parse(localStorage.getItem('employees'))
            : []
        const updatedEmployees = [...employeesStored, employee]
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }
// function constante pour recuperer les employer dans le localstorage
    const getStoredEmployees = () => {
        if (localStorage.getItem('employees') !== null) {
            const storedEmployees = JSON.parse(localStorage.getItem('employees'))

            setEmployees(() => {
                return [
                    ...storedEmployees
                ]
            })
        }
    }


    return <EmployeeContext.Provider value={{
        employees,
        addEmployee,
        getStoredEmployees


    }}>
        {props.children}
    </EmployeeContext.Provider>
}