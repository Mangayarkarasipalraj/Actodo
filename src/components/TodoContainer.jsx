import AddTodoForm from "./AddTodoForm"
import Todolist from "./Todolist"
import { useState } from "react"
function TodoContainer()
{
    const [activityArr,setActivityArr]=useState([
        {
            id:1,
            activity:"Go For a Walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a Shower"
        }

    ])
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
        


        
        </div>
      </div>
    )
}

export default TodoContainer;