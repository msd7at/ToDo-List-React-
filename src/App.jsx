import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
const App = () => {
    const [inputList,setinputList] =useState("");
    const [Items,setItems] = useState([]);
    const inputEvent = (event)=>{
        setinputList(event.target.value);
    };
    const listofItems= () =>{
        setItems((olditems )=>{
            return [...olditems,inputList]
        })
        setinputList("");
    };
    const deleteItems = (id) =>{
        setItems((olditems)=>{
            return olditems.filter((arrEle,index)=>{
                return index!==id;
            })
        })
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                <br/>
                    <h1> ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add Items" value={inputList} onChange={inputEvent}/>
                <button onClick={listofItems}> + </button>
                <ol>
                    
                    {
                        Items.map((itemval,index)=>{
                         return   <ToDoLists key={index}
                          id={index} 
                          text={itemval}
                          onSelect={deleteItems}
                          />
                        })
                    }
                </ol>
                </div>
            </div>
        </>
    );
};

export default App;