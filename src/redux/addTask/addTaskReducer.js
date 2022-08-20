import { COMPLETEDONE, TASKADDED, TOGGLETASK } from "./actionTypes";

const initialState = [
    {
        id: 0,
        task: 'React',
        complete: false
    },
]

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKADDED:
            return [
                ...state,
                {
                    id: state.length,
                    task: action.payload,
                    complete: false
                }
            ]
        case COMPLETEDONE:
            const updatedTask = state.map(todo => {
                if(todo.id == action.payload){
                    return {
                        ...todo,
                        complete: true 
                    }
                }
                return {
                    ...todo
                }
            })
            return [
                ...updatedTask
            ]
        case TOGGLETASK:
            const toggleTask = state.map(todo => {
                if(todo.id == action.payload){
                    return {
                        ...todo,
                        complete: !todo.complete 
                    }
                }
                return {
                    ...todo
                }
            })
            return [
                ...toggleTask
            ]
    
        default:
            return state
    }
}

export default todoReducer;