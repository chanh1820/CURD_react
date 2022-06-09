import { BINDING_EMPLOYEE, RELOAD_LIST_EMPLOYEE, SET_EMPLOYEE_INPUT,UPDATE_EMPLOYEE } from "./constains";
const employeeInput = {
    fisrtName: "",
    lastName: "",
    email: ""
}
const ListEmploy=[]
const reload=1;
const binding=-1;
const initState={
    employeeInput,
    ListEmploy,
    reload,
    binding,

}

function reducer(state,action){
    switch (action.type) {
        case SET_EMPLOYEE_INPUT:
            const {name,value}=action.payLoad
            state.employeeInput[name]=value
            return{
               ...state
            }
        case RELOAD_LIST_EMPLOYEE:
            console.log("reload");
            state.reload=state.reload!==1?1:0
            return{
                ...state  
            }
        case BINDING_EMPLOYEE:
            state.binding=action.payLoad
            return{
                ...state  
            }
            
        default:
            throw new Error("invalid action !!");
    }
}
export {initState}
export default reducer