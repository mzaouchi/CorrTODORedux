import { ADDTASK, CHANGEMOHAMED, DELETETASK, EDITDONE } from "./ActionTypes"

const initialState={
    tasks : [
        {title : "Smoking", isDone : false,id : Math.random()},
        {title : "Drinking water", isDone : false,id : Math.random()},
        {title : "Sport", isDone : false,id : Math.random()},
        {title : "Running", isDone : false,id : Math.random()},
    ],
    mohamed : "ALL"
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
       case ADDTASK : return {...state, tasks : [...state.tasks,action.payload]}
       case DELETETASK : return {...state, tasks : state.tasks.filter((el,i,t)=> el.id != action.payload)}
       case EDITDONE : return {...state,tasks : state.tasks.map((el,i,t)=> el.id == action.payload ? {...el,isDone : !el.isDone}: el)}
       case CHANGEMOHAMED : return {...state, mohamed : action.payload}
       default: return state
    }
}

export default Reducer