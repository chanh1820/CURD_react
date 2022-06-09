import { useEffect, useState } from "react";
import { useStore,actions } from "../../store";
import  './ListEmployee.scss'

function ListEmployee(){
    
    const [employees,setEmloyees]=useState([]);
    const [state,dispatch] =useStore()
    const { employeeInput,ListEmploy,reload,binding}=state
    console.log(employeeInput);
    useEffect(()=>{
            fetch("http://localhost:8080/api/employee")
            .then(reponse=>{
                return reponse.json();
            })
            .then(data=>{
                setEmloyees(data)
            })
    },[reload])

    useEffect(()=>{
     
    },[binding])
     const handleDelete=(id)=>{
      fetch(`http://localhost:8080/api/employee/${id}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },})
            .then(() => {
                console.log('Success');
                dispatch(actions.reloadListEmphoyee())
            })
            .catch(() => {
                console.error('Error');
            });
     }
    const handleUpdate=(id)=>{
          dispatch(actions.bindingEmployee(id))       
    }
    return (
        <div className="container">
          {
            employees.map((employee)=>(
              <div className='row-employee' key={employee.id}>
                <div id={`fisrtName-${employee.id}`} className='col'>{employee.id}</div>
                <div className='col'>{employee.fisrtName}</div>
                <div className='col'>{employee.lastName}</div>
                <div className='col'>{employee.email}</div>
                <div className="delete col" onClick={()=>handleDelete(employee.id)}>Xóa</div>
                <div className="update col" onClick={()=>handleUpdate(employee.id)}>Update</div>
              </div>
            ))
          }
    </div>
    )
}
export default ListEmployee