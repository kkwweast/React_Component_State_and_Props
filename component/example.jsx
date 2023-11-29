import { useState } from "react"

export default function Exercise (){

    const [text, setText] = useState("");
    const [todoList, setToDoList] = useState(["Ready", "Set", "Go"]);

      return(
        <div>
            <h1>React State Exercise</h1>
            <form>
                <input type="text"/>
                <button>Add Item</button>
            </form>
            <ul> 
              {todoList.map((element, index) => {
                return<li key={index}>{element}</li>
              })}

            </ul>
           </div>

            )}






        
