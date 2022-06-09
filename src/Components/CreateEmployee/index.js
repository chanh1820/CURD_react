import './CreateEmployee.scss'
import {useStore,actions} from '../../store/index.js'
import { useEffect } from 'react';

function CreateEmployee(){

    const [state,dispatch] =useStore()
    const { employeeInput,ListEmploy,reload,update,binding}=state
    console.log(employeeInput);
    
    
    const handleSubmit=()=>{
        fetch('http://localhost:8080/api/employee', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(employeeInput),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            dispatch(actions.reloadListEmphoyee())
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    const handleUpdate=(id)=>{
        fetch(`http://localhost:8080/api/employee/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(employeeInput),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            document.getElementById('btn-update-employee').classList.add('hidden')
            document.getElementById('input-firstName').value=""
            document.getElementById('input-firstName').focus()
            document.getElementById('input-lastName').value=""
            document.getElementById('input-email').value=""
            dispatch(actions.reloadListEmphoyee)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    useEffect(()=>{
        if(binding!==-1){
            fetch(`http://localhost:8080/api/employee/${binding}`)
            .then(reponse=>{
                return reponse.json();
            })
            .then(employee=>{
                document.getElementById('input-firstName').value=employee.fisrtName
                document.getElementById('input-lastName').value=employee.lastName
                document.getElementById('input-email').value=employee.email
                document.getElementById('btn-update-employee').classList.remove('hidden')
            })
        }
    },[binding])
    return (
        <div className="container">
            <div className='content'>  
                <span  className='text-content'>First Name </span>
                <input  id='input-firstName'className='input' name='fisrtName'
                value={state.employeeInput.fisrtName}
                 onChange={e=>{dispatch(actions.setEmployInput({name:e.target.name,value:e.target.value}))}}/>
            </div>
            <div className='content'> 
                <span className='text-content'>Last Name </span> 
                <input id='input-lastName' className='input' name='lastName'
                 value={state.employeeInput.lastName}
                 onChange={e=>{dispatch(actions.setEmployInput({name:e.target.name,value:e.target.value}))}}/>
            </div>
            <div className='content'> 
                <span className='text-content'>Email </span>
                 <input id='input-email' className='input' name='email' 
                 value={state.employeeInput.email}
                 onChange={e=>{dispatch(actions.setEmployInput({name:e.target.name,value:e.target.value}))}}/>
            </div>
            <button onClick={handleSubmit}>Create</button>
            <button id='btn-update-employee' className='hidden' onClick={()=>handleUpdate(binding)}>Update</button>
        </div>
    )
}
export default CreateEmployee;