import {BINDING_EMPLOYEE, RELOAD_LIST_EMPLOYEE, SET_EMPLOYEE_INPUT, UPDATE_EMPLOYEE} from './constains'

export const setEmployInput = payLoad=>({

    type:SET_EMPLOYEE_INPUT,
    payLoad
})
export const reloadListEmphoyee = payLoad=>({

    type:RELOAD_LIST_EMPLOYEE,
    payLoad
})
export const bindingEmployee = payLoad=>({

    type:BINDING_EMPLOYEE,
    payLoad
})

export const updateEmphoyee = payLoad=>({
    type:UPDATE_EMPLOYEE,
    payLoad
})